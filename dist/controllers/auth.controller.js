import { prisma } from "../lib/prisma.js";
import { userSchema } from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import { sendVerificationEmail } from "../email/email.js";
export const register = async (req, res) => {
    try {
        const validateData = userSchema.parse(req.body);
        //   validate data
        if (!validateData) {
            return res.status(400).json({
                success: false,
                message: "Invalid data",
            });
        }
        const { name, email, password } = validateData;
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
        // ✅ After
        const otp = Math.floor(100000 + Math.random() * 900000);
        // otp validity
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                verificationToken: otp,
                verificationTokenExpiresAt: otpExpiresAt,
            },
        });
        res
            .status(201)
            .json({ success: true, message: "User created", user: newUser });
        await sendVerificationEmail(name, email, otp);
    }
    catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};
//# sourceMappingURL=auth.controller.js.map