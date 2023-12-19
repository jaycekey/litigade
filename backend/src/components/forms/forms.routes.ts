import express from "express";

import {
  postForm,
  getAllForms,
  updateForm,
  deleteForm,
} from "./forms.controllers";

export default (router: express.Router) => {
  router.post("/forms", postForm);
  router.get("/forms", getAllForms);
  router.patch("/forms/:id", updateForm);
  router.delete("/forms/:id", deleteForm);
};
