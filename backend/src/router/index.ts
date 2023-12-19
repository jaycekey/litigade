import express from "express";
import reviews from "../components/reviews/reviews.routes";
import forms from "../components/forms/forms.routes";
const router = express.Router();

export default (): express.Router => {
  reviews(router);
  forms(router);
  return router;
};
