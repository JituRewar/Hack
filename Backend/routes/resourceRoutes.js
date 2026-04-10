import express from "express";
import { createResource, getResources } from "../controllers/resourceController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createResource);
router.get("/", protect, getResources);

export default router;