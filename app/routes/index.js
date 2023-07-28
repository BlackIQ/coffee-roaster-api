import express from "express";

import User from "$app/routes/user/user.routes.js";
import Auth from "$app/routes/auth/auth.routes.js";
import Support from "$app/routes/support/support.routes.js";

const router = express.Router();

router.use("/users", User);
router.use("/auth", Auth);
router.use("/support", Support);

export default router;
