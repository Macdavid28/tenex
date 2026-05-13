import { BrevoClient } from "@getbrevo/brevo";
import dotenv from "dotenv";
dotenv.config();
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_EMAIL = process.env.BREVO_EMAIL;
if (!BREVO_API_KEY)
    throw new Error("BREVO_API_KEY is not defined in .env");
if (!BREVO_EMAIL)
    throw new Error("BREVO_EMAIL is not defined in .env");
export const brevo = new BrevoClient({ apiKey: BREVO_API_KEY });
export const sender = { email: BREVO_EMAIL, name: "Tenex" };
//# sourceMappingURL=brevo.config.js.map