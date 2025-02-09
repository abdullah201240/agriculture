import { CookieOptions, NextFunction, Request, Response } from "express";
import { asyncHandler, ApiError, ApiResponse } from "../utils/root";
import { ErrorCodes } from '../utils/errors/ErrorCodes';
import { userLoginValidator, userRegisterValidator } from "../validators/userValidators";
import User from "../models/user";
import bcrypt from 'bcryptjs';
import ERROR_MESSAGES from '../utils/errors/errorMassage'
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "LD9cv1kBfgRHVIg9GG_OGzh9TUkcyqgZAaM0o3DmVkx08MCFRSzMocyO3UtNdDNtoCJ0X0-5nLwK7fdO"; // Fallback to a hardcoded secret if not in env



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