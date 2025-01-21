import express from "express";
import userRoutes from "./userRoute";

const router = express.Router();

/**
 * Mount example routes under /api/v1/example
 */
router.use("/user", userRoutes);

export default router;
