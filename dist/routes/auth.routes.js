import { forgotPassword, login, register, verifyEmail, } from "../controllers/auth.controller.js";
import express from "express";
export const authRoutes = express.Router();
authRoutes.post("/register", register);
authRoutes.post("/verify", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/login", login);
//# sourceMappingURL=auth.routes.js.map