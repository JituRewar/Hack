import express from "express";
import {
  createBooking,
  approveBooking,
  getBookings
} from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/", protect, getBookings);
router.put("/:id/approve", protect, isAdmin, approveBooking);

export default router;