import express from "express";
import { checkDisease, createUser, getPredictions, getProfile, loginUser, logoutUser } from "../controllers/userController";
import { verifyJWT } from "../middleware/auth";
import { uploadMiddleware } from "../middleware/upload";

const router = express.Router();

router.post("/auth/signup", createUser);
router.post("/auth/login", loginUser);
router.get("/auth/profile", verifyJWT, getProfile);
router.post("/auth/logout", verifyJWT, logoutUser);
router.post('/check-disease', uploadMiddleware, checkDisease);
router.get("/predictions/:id", verifyJWT, getPredictions);


export default router;
