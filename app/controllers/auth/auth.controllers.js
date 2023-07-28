import { User } from "$app/models/index.js";
import { createToken } from "$app/functions/index.js";

import md5 from "md5";

export const LOGIN = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await User.findOne({
      email,
      password: md5(password),
    }).select("-password -createdAt -updatedAt -__v");

    if (result) {
      return res.status(200).send({
        token: createToken(result._id),
        user: result,
      });
    } else {
      return res.status(401).send({
        message: "Wrong email or password",
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const REGISTER = async (req, res) => {
  const data = req.body;

  try {
    const result = await User.find({ email: data.email });

    if (result.length === 0) {
      data.password = md5(data.password);

      const user = await User.create(data);

      return res.status(200).send({
        message: "You are now registered!",
        token: createToken(user._id),
      });
    } else {
      return res.status(400).send({ message: "Email exists" });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};
