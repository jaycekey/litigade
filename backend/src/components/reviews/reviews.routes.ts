import express from "express";

import {
  postReview,
  getAllReviews,
  updateReview,
  deleteReview,
} from "./reviews.controllers";

export default (router: express.Router) => {
  router.get("/reviews", getAllReviews);
  router.post("/reviews", postReview);
  router.delete("/reviews/:id", deleteReview);
  router.patch("/reviews/:id", updateReview);
};
