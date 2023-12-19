import express from "express";

import { getAllUsers, deleteUser, updateUser, postUser } from "./users.controllers";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.post("/users", postUser)
  router.delete("/users/:id", deleteUser);
  router.patch("/users/:id", updateUser);
};
