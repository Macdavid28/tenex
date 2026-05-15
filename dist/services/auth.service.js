export {};
// import { prisma } from "@/lib/prisma.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { AppError } from "@/utils/AppError.js";
// // import type { Request, Response } from "express";
// const login = async (email: string, password: string) => {
//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     throw new AppError("User not found, sign up", 404);
//   }
//   const passwordMatch = await bcrypt.compare(password, user.password);
//   if (!passwordMatch) {
//     throw new AppError("Invalid email or password", 401);
//   }
//   jwt.sign(process.env.JWT_SECRET, {
//     id: user.id,
//     name: user.name,
//   });
// };
//# sourceMappingURL=auth.service.js.map