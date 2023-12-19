import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  time: { type: String, required: true },
});

export const FormModel = mongoose.model("Form", FormSchema);
