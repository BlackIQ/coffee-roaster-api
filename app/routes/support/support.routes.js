import express from "express";

import { Support } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Support.ALL);
router.post("/", Support.CREATE);
router.get("/:id", Support.SINGLE);
router.patch("/answer/:id", Support.ANSWER);
router.patch("/rate/:id", Support.RATE);

export default router;
