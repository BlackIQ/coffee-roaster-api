import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    title: {
      type: String,
      default: "",
    },
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
    isRated: {
      type: Boolean,
      default: false,
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
