import express from "express";
import { createUser, getProfile, loginUser, logoutUser } from "../controllers/userController";
import { verifyJWT } from "../middleware/auth";

const router = express.Router();

router.post("/auth/signup", createUser);
router.post("/auth/login", loginUser);
router.get("/auth/profile", verifyJWT, getProfile);
router.post("/auth/logout", verifyJWT, logoutUser);

export default router;
