import Booking from "../models/Booking.js";

// Create booking
export const createBooking = async (req, res) => {
  const { resource, startTime, endTime } = req.body;

  // 🔥 Conflict detection
  const conflict = await Booking.findOne({
    resource,
    status: "approved",
    $or: [
      { startTime: { $lt: endTime }, endTime: { $gt: startTime } }
    ]
  });

  if (conflict) {
    return res.status(400).json({ msg: "Resource already booked!" });
  }

  const booking = await Booking.create({
    user: req.user.id,
    resource,
    startTime,
    endTime
  });

  res.json(booking);
};

// Admin approves
export const approveBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  booking.status = "approved";
  await booking.save();

  res.json(booking);
};

// Get all bookings
export const getBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("user", "name")
    .populate("resource", "name");

  res.json(bookings);
};