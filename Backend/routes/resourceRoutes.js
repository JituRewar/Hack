import express from "express";
import { createResource, getResources } from "../controllers/resourceController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, getResources);
router.post("/", protect, isAdmin, createResource);

export default router;