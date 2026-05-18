import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../email/email.js";
import { AppError } from "../utils/AppError.js";
import crypto from "crypto";
// Sign up service
export const registerService = async (name, email, password) => {
    // check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new AppError("User exists login", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = crypto.randomInt(100000, 999999).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            verificationToken: hashedOtp,
            verificationTokenExpiresAt: otpExpiresAt,
        },
    });
    await sendVerificationEmail(name, email, otp);
    return { newUser };
};
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret)
    throw new AppError("JWT secret not configured", 500);
// Verify token
export const verifyTokenService = async (email, token) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user ||
        !user.verificationToken ||
        !user.verificationTokenExpiresAt ||
        user.verificationTokenExpiresAt < new Date()) {
        throw new AppError("Invalid or expired verification token", 404);
    }
    const validToken = await bcrypt.compare(token, user.verificationToken);
    if (!validToken) {
        throw new AppError("Invalid verification token", 400);
    }
    await prisma.user.update({
        where: {
            email,
        },
        data: {
            isVerified: true,
            verificationToken: null,
            verificationTokenExpiresAt: null,
        },
    });
    // return { email };
};
// login logic
export const loginService = async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new AppError("User not found, sign up", 404);
    }
    if (!user.isVerified) {
        throw new AppError("User not verified", 400);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new AppError("Invalid email or password", 401);
    }
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1d" });
    return { user, token };
};
//# sourceMappingURL=auth.service.js.map