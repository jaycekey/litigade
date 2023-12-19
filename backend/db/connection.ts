import mongoose from "mongoose";
require("dotenv").config();

const connectDB = () => {
  const MONGO_URL = process.env.MONGO_URL;
  mongoose.Promise = Promise;
  mongoose.connect(MONGO_URL);
  mongoose.connection.on("error", (error: Error) => console.log(error));
};

export default connectDB;
