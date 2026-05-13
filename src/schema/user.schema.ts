import { z } from "zod";

export const userSchema = z.object({
  name: z.string().trim().min(3, "Name required"),
  email: z
    .string()
    .email("Email address required")
    .url("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type UserInput = z.infer<typeof userSchema>;
