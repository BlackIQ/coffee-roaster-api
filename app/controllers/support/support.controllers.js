import { Support } from "$app/models/index.js";

export const ALL = async (req, res) => {
  try {
    const all = await Support.find();

    return res.status(200).send(all);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    await Support.create(data);

    return res.status(200).send({ message: "Ticket created" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const FOR = async (req, res) => {
  const { user } = req.params;

  try {
    const all = await Support.find({ user });

    return res.status(200).send(all);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const single = await Support.findById(id);

    if (single) {
      if (single.status === 0) {
        await Support.findByIdAndUpdate(id, { $set: { status: 1 } });
      }

      return res.status(200).send(single);
    } else {
      return res.status(404).send({ message: "Ticket not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ANSWER = async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;

  try {
    const single = await Support.findById(id);

    if (single) {
      await Support.findByIdAndUpdate(id, { $set: { answer, status: 2 } });

      return res.status(200).send({ message: "Ticket answered" });
    } else {
      return res.status(404).send({ message: "Ticket not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const RATE = async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;

  try {
    const single = await Support.findById(id);

    if (single) {
      await Support.findByIdAndUpdate(id, { $set: { rate } });

      return res.status(200).send({ message: "Ticket rated" });
    } else {
      return res.status(404).send({ message: "Ticket not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
