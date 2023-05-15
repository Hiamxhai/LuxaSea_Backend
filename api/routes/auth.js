import express from "express";
import { getAllUser, login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", getAllUser);

export default router
