import { CookieOptions, NextFunction, Request, Response } from "express";
import { asyncHandler, ApiError, ApiResponse } from "../utils/root";
import { ErrorCodes } from '../utils/errors/ErrorCodes';
import { userLoginValidator, userRegisterValidator } from "../validators/userValidators";
import User from "../models/user";
import bcrypt from 'bcryptjs';
import ERROR_MESSAGES from '../utils/errors/errorMassage'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import Disease from "../models/disease";
import fs from 'fs';
import FormData from 'form-data';
import dotenv from "dotenv";
import path from "path";
import Land from "../models/land";
import RainFall from "../models/rainFall";
import Crop from "../models/crop";

// Load environment variables from .env file
dotenv.config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "LD9cv1kBfgRHVIg9GG_OGzh9TUkcyqgZAaM0o3DmVkx08MCFRSzMocyO3UtNdDNtoCJ0X0-5nLwK7fdO"; // Fallback to a hardcoded secret if not in env
let deviceData: any = null;




export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = userRegisterValidator.safeParse(req.body);

    if (!result.success) {
      // ZodError includes an array of issues, format them for a response
      const errors = result.error.errors.map((error: { message: any; }) => error.message).join(", ");
      throw new ApiError(
        "All fields are required",
        400,
        ErrorCodes.BAD_REQUEST.code,
        errors
      );
    }

    const { name, email, password, phone, dob, gender } = req.body;

    // Check for missing fields
    if (!name || !email || !password || !phone || !dob || !gender) {
      throw new ApiError(
        ERROR_MESSAGES.MISSING_FIELDS,
        400,
        ErrorCodes.BAD_REQUEST.code
      );
    }

    // Check if User already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new ApiError(
        ERROR_MESSAGES.USER_EXISTS,
        409,
        ErrorCodes.CONFLICT?.code || "CONFLICT"
      );
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new  User in the database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      dob,
      gender,
    });




    if (!newUser) {
      throw new ApiError(
        ERROR_MESSAGES.INTERNAL_ERROR,
        500,
        ErrorCodes.INTERNAL_SERVER_ERROR.code
      );
    }

    // Exclude the password from the response
    const { password: _, ...userResponse } = newUser.toJSON();

    return res
      .status(201)
      .json({ message: "User created successfully", user: userResponse });
  }
);

export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Validate request body with Zod
    const validationResult = userLoginValidator.safeParse(req.body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map((err: { message: any; }) => err.message);
      return next(
        new ApiError(
          "Validation Error",
          400,
          ErrorCodes.VALIDATION_ERROR.code,
          errorMessages.join(", ")
        )
      );
    }

    const { email, password } = validationResult.data;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        new ApiError(
          "User does not exist",
          404,
          ErrorCodes.NOT_FOUND.code
        )
      );
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(
        new ApiError(
          "Invalid email or password",
          401,
          ErrorCodes.UNAUTHORIZED.code
        )
      );
    }

    // Generate access token
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      ACCESS_TOKEN_SECRET as string,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" }
    );



    // Set the access token in a secure, HTTP-only cookie
    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      sameSite: "strict" as "strict", // CSRF protection
      maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    };
    res.cookie("accessToken", accessToken, cookieOptions);

    // Return success response with tokens
    return res.status(200).json(
      ApiResponse.success(
        { accessToken },
        "User logged in successfully"
      )
    );
  }
);

export const getProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Extract User from the request (added by verifyJWT middleware)
    const user = req as Request & { user: User }; // Manually cast the request type


    if (!user) {
      return next(
        new ApiError(
          "User not found",
          404,
          ErrorCodes.NOT_FOUND.code
        )
      );
    }
    const { id, name, email, phone, dob, gender } = user.user.dataValues; // Extract only required fields


    // Return the User details
    return res.status(200).json(
      ApiResponse.success(
        {
          id,
          name,
          email,
          phone,
          dob,
          gender
        },
        "Profile retrieved successfully"
      )
    );
  }
);

export const logoutUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Clear the access token cookie
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      sameSite: "strict" as "strict", // CSRF protection
      maxAge: 0, // Expire cookie immediately
    });

    // Return a success response
    return res.status(200).json(
      ApiResponse.success(
        null,
        "User logged out successfully"
      )
    );
  }
);


export const checkDisease = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image provided" });
      }

      const { userId } = req.body;

      if (!userId) {
        return next(new ApiError("User does not exist", 404, ErrorCodes.NOT_FOUND.code));
      }

      const imagePath = req.file.path;
      const filename = path.basename(imagePath); // Ensures only the filename is stored

      // Check if the file exists before proceeding
      try {
        await fs.promises.access(imagePath);
      } catch (err) {
        return next(new ApiError("Uploaded image file not found", 400));
      }

      // Prepare image for API request
      const formData = new FormData();
      formData.append("image", fs.createReadStream(imagePath));

      // Use the environment variable for the API URL
      const predictionApiUrl = process.env.PREDICTION_API_URL;

      if (!predictionApiUrl) {
        return next(new ApiError("Prediction API URL is not defined in the environment", 500));
      }

      // Call external prediction API
      const response = await axios.post(`${predictionApiUrl}/predict_image`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      if (!response.data || !response.data.predicted_class) {
        return next(new ApiError("Failed to retrieve prediction from API", 500));
      }

      const predictedClass = response.data.predicted_class;

      // Save result in database
      const newDisease = await Disease.create({
        image: filename, // Store only the filename
        predicted_class: predictedClass,
        userId,
      });

      res.status(201).json({
        message: "Disease prediction stored successfully",
        data: newDisease,
      });
    } catch (error: any) {
      next(new ApiError(error.message || "Internal Server Error", error.status || 500));
    }
  }
);


export const getPredictions = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      if (!id) {
        return next(new ApiError("ID parameter is required", 400));
      }

      const diseases = await Disease.findAll({ where: { userId: id } });

      if (!diseases || diseases.length === 0) {
        return next(new ApiError("No results found", 404));
      }

      res.status(200).json({ success: true, data: diseases });
    } catch (error) {
      next(error);
    }
  }
);
export const deletePredictions = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const deleteWork = await Disease.findByPk(id);

    if (!deleteWork) {
      throw new ApiError('Disease not found', 404, 'NOT_FOUND');
    }

    await deleteWork.destroy();

    return res.status(200).json(
      ApiResponse.success(null, 'Disease deleted successfully')
    );
  }
);


export const deleteLand = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const deleteLand = await Land.findByPk(id);

    if (!deleteLand) {
      throw new ApiError('Land not found', 404, 'NOT_FOUND');
    }

    await deleteLand.destroy();

    return res.status(200).json(
      ApiResponse.success(null, 'Land deleted successfully')
    );
  }
);

// Get all lands by userId
export const getAllLandsByUserId = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const lands = await Land.findAll({
      where: { userId: id },
    });

    return res.status(200).json(
      ApiResponse.success(lands, 'Lands retrieved successfully')
    );
  }
);

// Create a new land entry
export const createLand = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { landName, userId } = req.body;
    if (!landName || !userId) {
      throw new ApiError('landName and userId are required', 400, 'BAD_REQUEST');
    }

    const newLand = await Land.create({ landName, userId });

    return res.status(201).json(
      ApiResponse.success(newLand, 'Land created successfully')
    );
  }
);

export const createCrops = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { land, userId, position, date } = req.body;

    if (!land || !userId || !position || !date) {
      throw new ApiError("All fields are required", 400, "BAD_REQUEST");
    }

    // Fetch land details
    const lands = await Land.findByPk(land);
    if (!lands) {
      throw new ApiError("Land not found", 404, "BAD_REQUEST");
    }
    const landsName = lands.landName;

    
      // Fetch device data
      const deviceResponse = await axios.get("http://localhost:8080/user/call-insert");
      if (!deviceResponse.data || !deviceResponse.data.data) {
        throw new ApiError("Failed to retrieve device data", 500, "BAD_REQUEST");
      }

      const deviceData = deviceResponse.data.data;

      // Ensure deviceData contains all necessary properties
      const { pH, nitrogen: N, phosphorus: P, potassium: K, soilTemperature: temperature, soilMoisture: humidity } = deviceData;

      if (pH === undefined || N === undefined || P === undefined || K === undefined || temperature === undefined || humidity === undefined) {
        throw new ApiError("Incomplete soil data from device", 400, "BAD_REQUEST");
      }
      const monthNames = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
      ];
      
      const currentMonthName = monthNames[new Date().getMonth()];      console.log(currentMonthName)
      const rain = await RainFall.findOne({ where:{
        city:'Dhaka',
        month:currentMonthName


      }  });
      if(!rain){
        throw new ApiError("Rain not found", 404, "BAD_REQUEST");

      }
      let rainfall = parseFloat(rain.rainfall); // Convert to number if necessary
      if (isNaN(rainfall)) {
        throw new ApiError("Invalid rainfall value", 400, "BAD_REQUEST");
      }


      // Get Prediction API URL
      const predictionApiUrl = process.env.PREDICTION_API_URL;
      if (!predictionApiUrl) {
        return next(new ApiError("Prediction API URL is not defined in the environment", 500));
      }

    

      // Call external prediction API
      const response = await axios.post(`${predictionApiUrl}/predict_crop`, {
        ph: pH, // Convert pH to lowercase to match API requirement
        N,
        P,
        K,
        temperature,
        humidity,
        rainfall
      });


      if (!response.data || !response.data.recommended_crop) {
        return next(new ApiError("Failed to retrieve prediction from API", 500));
      }

      const predictedClass = response.data.recommended_crop;

     // Check if the crop entry already exists with the same landId and date
     const existingCrop = await Crop.findOne({
      where: {
        landId: land,
        date, 
        position
      }
    });
      
    if (existingCrop) {
      // If the entry exists, update it
      existingCrop.landName = landsName;
      existingCrop.userId = userId;
      existingCrop.position = position;
      existingCrop.pH = pH;
      existingCrop.nitrogen = N;
      existingCrop.phosphorus = P;
      existingCrop.potassium = K;
      existingCrop.temperature = temperature;
      existingCrop.humidity = humidity;
      existingCrop.rainfall = rainfall;
      existingCrop.prediction = predictedClass;

      await existingCrop.save();

      return res.status(200).json(
        ApiResponse.success(existingCrop, "Crop data updated successfully")
      );
    } else {
      // If the entry doesn't exist, create a new one
      const newCrop = await Crop.create({
        landId: land,
        landName: landsName,
        userId,
        position,
        date,
        pH,
        nitrogen: N,
        phosphorus: P,
        potassium: K,
        temperature,
        humidity,
        rainfall,
        prediction: predictedClass
      })
    }
      
      
      

      return res.status(201).json(
        ApiResponse.success(
          {
            land: landsName,
            userId,
            position,
            date,
            soilData: { pH, N, P, K, temperature, humidity, rainfall },
            prediction: predictedClass
          },
          "Crop prediction successful"
        )
      );
   
  }
);

export const getAllCropsByUserId = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const lands = await Crop.findAll({
      where: { userId: id },
    });

    return res.status(200).json(
      ApiResponse.success(lands, 'Lands retrieved successfully')
    );
  }
);


export const insertAllData = async (req: Request, res: Response): Promise<any> => {
  // console.log("Received request at /insert with data:", req.body);

  // Check if the request body is empty
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Request body is empty" });
    return;
  }

  // Simulate a delay (5 seconds) for receiving IoT data
  setTimeout(() => {
    deviceData = req.body; // Store the data from the IoT device
    // console.log("Data received from IoT device:", deviceData);
  }, 5000);

  // Respond with a message indicating that the data creation is in progress
  res.status(201).json({
    message: "Data created successfully, you can check the status later.",
  });
};

export const getDataStatus = async (req: Request, res: Response): Promise<any> => {
  // If the data is not available yet, return a 404 error
  if (!deviceData) {
    res.status(404).json({ message: "Data is not yet available. Please try again later." });
    return;
  }

  // Return the data if it's available
  res.status(200).json({
    message: "Data retrieved successfully",
    data: deviceData,
  });
};

