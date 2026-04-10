import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  available: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("Resource", resourceSchema);