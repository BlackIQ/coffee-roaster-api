import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    type: {
      type: Number,
      default: "",
    },
    country: {
      type: Number,
      default: "",
    },
    weight: {
      type: Number,
      default: "",
    },
    size: {
      type: Number,
      default: "",
    },
    roast: {
      type: Number,
      default: "",
    },
    bean: {
      type: Number,
      default: "",
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

export default mongodb.model("History", schema);
