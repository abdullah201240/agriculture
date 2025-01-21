import express from "express";
import { getExample } from "../controllers/employeeController";

const router = express.Router();

/**
 * GET /example
 * Route to fetch example data.
 */
router.get("/", getExample);

export default router;
