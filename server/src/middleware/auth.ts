import {NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { asyncHandler, ApiError, ErrorCodes } from "../utils/root";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET environment variable is required but not set.");
}

export const verifyJWT = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        // Extract token from cookies or Authorization header
        const token =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return next(
                new ApiError(
                    "Unauthorized request: No token provided",
                    401,
                    ErrorCodes.UNAUTHORIZED.code
                )
            );
        }

        try {
            // Verify the token and decode its payload
            const payload = jwt.verify(token, ACCESS_TOKEN_SECRET) as jwt.JwtPayload;


            if (!payload || typeof payload.id !== "number") {
                return next(
                    new ApiError(
                        "Unauthorized request: Invalid token payload",
                        401,
                        ErrorCodes.UNAUTHORIZED.code
                    )
                );
            }

            // Check if the token has expired
            const currentTime = Math.floor(Date.now() / 1000); // current timestamp in seconds
            if (payload.exp && payload.exp < currentTime) {
                return next(
                    new ApiError(
                        "Unauthorized request: Token has expired",
                        401,
                        ErrorCodes.UNAUTHORIZED.code
                    )
                );
            }

            // Find the User using the decoded ID
            const user = await User.findOne({ where: { id: payload.id } });

            if (!user) {
                return next(
                    new ApiError(
                        "Unauthorized request: User not found",
                        401,
                        ErrorCodes.UNAUTHORIZED.code
                    )
                );
            }

            // Attach the User object to the request
            (req as Request & { user: User }).user = user;

            // Proceed to the next middleware
            next();
        } catch (error) {
            console.error("Error during token verification:", error);
            return next(
                new ApiError(
                    "Invalid access token",
                    401,
                    ErrorCodes.UNAUTHORIZED.code
                )
            );
        }
    }
);
