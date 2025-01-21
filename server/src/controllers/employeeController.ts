import { Request, Response } from "express";
import { asyncHandler, ApiError, ApiResponse } from "../utils/root";
import { ErrorCodes } from '../utils/errors/ErrorCodes';
import logger from "../logger/winstonLogger"; // Import Winston logger

export const getExample = asyncHandler(async (req: Request, res: Response) => {
    
    logger.info(`Request received: ${JSON.stringify(req.query)}`);

    // Simulate an error
    if (!req.query.id) {
        logger.error("Missing query parameter: id"); // Log the error
        throw new ApiError(
          "Missing query parameter: id",
          400,
          ErrorCodes.BAD_REQUEST.code,
          ErrorCodes.BAD_REQUEST.message
        );
      }
  
    // Simulate a successful response
    const data = { id: req.query.id, name: "Example Item" };
    res.status(200).json(ApiResponse.success(data));
  });