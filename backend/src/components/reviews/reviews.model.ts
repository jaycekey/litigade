import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  authorPhotoUrl: { type: String, required: true },
  role: { type: String, required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
});

export const ReviewModel = mongoose.model("Review", ReviewSchema);
