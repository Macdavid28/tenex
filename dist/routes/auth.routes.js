import { register } from "../controllers/auth.controller.js";
import express from "express";
export const authRoutes = express.Router();
authRoutes.post("/register", register);
//# sourceMappingURL=auth.routes.js.map