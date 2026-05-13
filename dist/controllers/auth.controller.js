import { prisma } from "../lib/prisma.js";
import { userSchema } from "../schema/user.schema.js";
export const register = async (req, res) => {
    const validateData = userSchema.parse(req.body);
    const { name, email, password } = validateData;
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res
                .status(400)
                .json({ success: false, message: "User exists pls login" });
        }
    }
    catch (error) { }
};
//# sourceMappingURL=auth.controller.js.map