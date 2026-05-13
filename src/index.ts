import express from "express";
import type { Request, Response } from "express";

const server = express();

server.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "Backend server up and running" });
  res.send("<h1> Backend server running on port 3400</h1>");
});
server.listen(3400, () => {
  console.log("Server running on port 3400");
});
