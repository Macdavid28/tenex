import {
  forgotPassword,
  login,
  register,
  verifyEmail,
} from "../controllers/auth.controller.js";
import type { Router } from "express";
import express from "express";

export const authRoutes: Router = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/verify", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/login", login);
