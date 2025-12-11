import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["indoor", "outdoor"], required: true },
  basePrice: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
});

export default mongoose.model("Court", CourtSchema);