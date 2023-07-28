import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    body: {
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
    },
    status: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongodb.model("Support", schema);
