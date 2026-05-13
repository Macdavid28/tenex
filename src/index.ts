import express from "express";
import cookieParser from "cookie-parser";
import type { Request, Response } from "express";
import { authRoutes } from "./routes/auth.routes.js";
const server = express();

// for parsing all json request bodies
server.use(express.json());
// for parsing all cookies
server.use(cookieParser());

// health check
server.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "Backend server up and running" });
  res.send("<h1> Backend server running on port 3400</h1>");
});

// for all auth routes
server.use("/api/v1/auth", authRoutes);

server.listen(3400, () => {
  console.log("Server running on port 3400");
});
