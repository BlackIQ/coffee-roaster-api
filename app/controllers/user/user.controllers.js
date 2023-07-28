import { User } from "$app/models/index.js";

import md5 from "md5";

export const ALL = async (req, res) => {
  try {
    const all = await User.find();

    return res.status(200).send(all);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const single = await User.findById(id);

    if (single) {
      return res.status(200).send(single);
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const single = await User.findById(id);

    if (single) {
      await User.findByIdAndUpdate(id, { $set: data });

      return res.status(200).send({ message: "User updated" });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const CHANGE_PASSWORD = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const single = await User.findById(id);

    if (single) {
      await User.findByIdAndUpdate(id, { $set: { password: md5(password) } });

      return res.status(200).send({ message: "Password changed" });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
