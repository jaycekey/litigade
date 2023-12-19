import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "../db/connection";
import router from "./router";

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const PORT = 8080;
server.listen(PORT, () => {
  console.log("Server running on http://localhost:8080/");
});

app.use("/api/v1", router());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server " });
});
