import { userSchema } from "../schema/user.schema.js";
import { registerService, loginService, verifyTokenService, } from "../services/auth.service.js";
import { AppError } from "../utils/AppError.js";
import { ZodError } from "zod";
// signup
export const register = async (req, res) => {
    try {
        //   validate data input
        const validateData = userSchema.parse(req.body);
        const { name, email, password } = validateData;
        // pass input data to register service function
        const { newUser } = await registerService(name, email, password);
        if (!validateData) {
            throw new AppError("Invalid data input", 400);
        }
        res
            .status(201)
            .json({ success: true, message: "User created", user: newUser });
    }
    catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error.issues.map((i) => i.message) });
        }
        else if (error instanceof AppError) {
            res.status(error.status).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};
export const verifyEmail = async (req, res) => {
    try {
        const { email, token } = req.body;
        await verifyTokenService(email, token);
        res.status(200).json({ message: "Email verified successfully" });
    }
    catch (error) {
        if (error instanceof AppError) {
            res.status(error.status).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
};
// Login
export const login = async (req, res) => {
    try {
        //   validate data input
        const validateData = userSchema.parse(req.body);
        const { email, password } = validateData;
        // pass input data to register service function
        const { user, token } = await loginService(email, password);
        // set session cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ user });
    }
    catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error.issues.map((i) => i.message) });
        }
        else if (error instanceof AppError) {
            res.status(error.status).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};
//# sourceMappingURL=auth.controller.js.map