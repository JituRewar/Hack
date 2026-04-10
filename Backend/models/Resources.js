import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  availability: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default mongoose.model("Resource", resourceSchema);