import express from "express";
import cookieParser from "cookie-parser";
import { authRoutes } from "./routes/auth.routes.js";
import crypto from "crypto";
const server = express();
const PORT = process.env.PORT || 3400;
// for parsing all json request bodies
server.use(express.json());
// for parsing all cookies
server.use(cookieParser());
// browser check
server.get("/", (req, res) => {
    res.send(`<h1> Backend server running on port ${PORT}</h1>`);
});
// health check
server.get("/health", (req, res) => {
    res
        .status(200)
        .json({ success: true, message: "Backend server up and running" });
});
// for all auth routes
server.use("/api/v1/auth", authRoutes);
server.listen(PORT, () => {
    console.log("Server running on port 3400");
});
const jwt_secret = crypto.randomBytes(32).toString("hex");
console.log(jwt_secret);
//# sourceMappingURL=index.js.map