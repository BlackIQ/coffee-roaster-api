import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    isGuest: {
      type: Boolean,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongodb.model("User", schema);
