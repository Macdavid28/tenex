import { register } from "../controllers/auth.controller.js";
import type { Router } from "express";
import express from "express";

export const authRoutes: Router = express.Router();

authRoutes.post("/register", register);
