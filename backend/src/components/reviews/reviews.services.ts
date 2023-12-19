import { ReviewModel } from "./reviews.model";

export const getReviews = () => ReviewModel.find();

export const getReviewById = (id: string) => ReviewModel.findById(id);

export const createReview = (values: Record<string, any>) =>
  new ReviewModel(values).save().then((review) => review.toObject());

export const deleteReviewById = (id: string) =>
  ReviewModel.findOneAndDelete({ _id: id });

export const updateReviewById = (id: string, values: Record<string, any>) =>
  ReviewModel.findByIdAndUpdate(id, values);
