import express from "express";
import exampleRoutes from "./employeeRoute";

const router = express.Router();

/**
 * Mount example routes under /api/v1/example
 */
router.use("/example", exampleRoutes);

export default router;
