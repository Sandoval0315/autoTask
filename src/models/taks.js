import { Schema, model } from "mongoose";

const task = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Task", task);
