import { z } from "zod";

const specialCharRegex = /[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>/?`~]/;

export const userSchema = z.object({
  name: z.string().trim().min(3, "Name required"),

  email: z.string().email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => specialCharRegex.test(value), {
      message: "Password must contain at least one special character",
    }),
});

export type UserInput = z.infer<typeof userSchema>;
