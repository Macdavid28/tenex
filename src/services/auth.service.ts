import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendWelcomeEmail,
  sendResetSuccessEmail,
} from "../email/email.js";
import { AppError } from "../utils/AppError.js";
import crypto from "crypto";

// Sign up service
export const registerService = async (
  name: string,
  email: string,
  password: string,
) => {
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

if (!jwtSecret) throw new AppError("JWT secret not configured", 500);

// Verify token
export const verifyTokenService = async (email: string, token: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (
    !user ||
    !user.verificationToken ||
    !user.verificationTokenExpiresAt ||
    user.verificationTokenExpiresAt < new Date()
  ) {
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
  await sendWelcomeEmail(email, user.name);
};
// forgot password
export const forgotPasswordService = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError("If this email exists, a reset link will be sent", 200);
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  const resetPasswordValidity = new Date(Date.now() + 10 * 60 * 1000);
  await prisma.user.update({
    where: { email },
    data: {
      resetPasswordToken: hashedToken,
      resetPasswordTokenExpiresAt: resetPasswordValidity,
    },
  });
  await sendPasswordResetEmail(
    email,
    `${process.env.CLIENT_LINK}/reset-password/${resetToken}`,
  );
};

export const resetPasswordService = async (token: string, password: string) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: hashedToken,
      resetPasswordTokenExpiresAt: { gt: new Date() },
    },
  });

  if (!user) {
    throw new AppError("Invalid or expired token", 400);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpiresAt: null,
    },
  });
  await sendResetSuccessEmail(user.email);
};

// login logic
export const loginService = async (email: string, password: string) => {
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
