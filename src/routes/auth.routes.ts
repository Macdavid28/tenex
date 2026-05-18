import {
  forgotPassword,
  login,
  register,
  resetPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";
import type { Router } from "express";
import express from "express";

export const authRoutes: Router = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/verify", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);
authRoutes.post("/login", login);
