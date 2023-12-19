import express from "express";

import {
  getReviews,
  getReviewById,
  createReview,
  deleteReviewById,
  updateReviewById,
} from "./reviews.services";

export const getAllReviews = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const reviews = await getReviews();
    res.header("Content-Type", "application/json");
    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const postReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { author, authorPhotoUrl, role, reviewText, rating } = req.body;

    if (!author || !authorPhotoUrl || !role || !reviewText || !rating) {
      return res.status(400).json({
        error:
          "Author, authorPhotoUrl, role, reviewText, and rating are required.",
      });
    }

    const newReview = await createReview({
      author,
      authorPhotoUrl,
      role,
      reviewText,
      rating,
    });

    return res.status(201).json(newReview);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedReview = await deleteReviewById(id);

    return res.json(deletedReview);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { author, authorPhotoUrl, role, reviewText, rating } = req.body;

    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    const updatedFields = {
      author: author || review.author,
      authorPhotoUrl: authorPhotoUrl || review.authorPhotoUrl,
      role: role || review.role,
      reviewText: reviewText || review.reviewText,
      rating: rating || review.rating,
    };

    Object.assign(review, updatedFields);

    await updateReviewById(id, review);

    return res.status(200).json(review).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
