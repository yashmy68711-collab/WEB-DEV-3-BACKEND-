import express from "express";

import { getuser, createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getuser);

router.post("/", createUser);

export default router;