import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { userSchema } from "../schema/user.schema.js";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const validateData = userSchema.parse(req.body);
  //   validate data
  try {
    const { name, email, password } = validateData;
    if (!validateData) {
      return res.status(400).json({
        success: false,
        message: "Invalid data",
      });
    }
    // check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User exists pls login" });
    }
    // salt password
    const salt = await bcrypt.genSalt(10);
    // hash password
    const hashPassword = await bcrypt.hash(password, salt);
    // generate otp function
    const generateOtp = Math.floor(10000 + Math.random() * 900000);

    // otp validity
    const otpExpiresAt = Date.now() + 10 * 60 * 1000;
  } catch (error) {}
};
