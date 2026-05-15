import { prisma } from "@/lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "@/utils/AppError.js";

// export const registerService = async(name:string,email:string){}

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) throw new AppError("JWT secret not configured", 500);

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError("User not found, sign up", 404);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1d" });
  return { user, token };
};
