import express from "express";
import { checkDisease, createCrops, createLand, createUser, deleteLand, deletePredictions, getAllLandsByUserId, getDataStatus, getPredictions, getProfile, insertAllData, loginUser, logoutUser } from "../controllers/userController";
import { verifyJWT } from "../middleware/auth";
import { uploadMiddleware } from "../middleware/upload";

const router = express.Router();

router.post("/auth/signup", createUser);
router.post("/auth/login", loginUser);
router.get("/auth/profile", verifyJWT, getProfile);
router.post("/auth/logout", verifyJWT, logoutUser);
router.post('/check-disease', uploadMiddleware, checkDisease);
router.get("/predictions/:id", verifyJWT, getPredictions);
router.delete("/predictions/:id", verifyJWT, deletePredictions);

router.post('/land',createLand);
router.get("/land/:id", getAllLandsByUserId);
router.delete("/land/:id", verifyJWT, deleteLand);
router.post("/test", insertAllData);
router.get("/call-insert", getDataStatus);  
router.post("/crops", createCrops);


export default router;
