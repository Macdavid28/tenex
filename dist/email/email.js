import { brevo, sender } from "./brevo.config.js";
import { verificationEmailTemplate, resetPasswordTemplate, resetSuccessTemplate, welcomeEmailTemplate, } from "./emailTemplates.js";
const sendEmail = async (subject, htmlContent, email) => {
    return await brevo.transactionalEmails.sendTransacEmail({
        subject,
        htmlContent,
        sender,
        to: [{ email }],
    });
};
export const sendVerificationEmail = async (name, email, verificationToken) => {
    try {
        const data = await sendEmail("Verify Your Email", verificationEmailTemplate(name, verificationToken), email);
        console.log("Verification email sent:", data);
    }
    catch (err) {
        console.error("Verification email error:", err);
        throw err;
    }
};
export const sendWelcomeEmail = async (email, name) => {
    try {
        const data = await sendEmail("Welcome to Our Platform!", welcomeEmailTemplate(name), email);
        console.log("Welcome email sent:", data);
    }
    catch (err) {
        console.error("Welcome email error:", err);
        throw err;
    }
};
export const sendPasswordResetEmail = async (email, otp) => {
    try {
        const data = await sendEmail("Your Password Reset Code", resetPasswordTemplate(otp.toString()), email);
        console.log("Password reset email sent:", data);
    }
    catch (err) {
        console.error("Password reset email error:", err);
        throw err;
    }
};
export const sendResetSuccessEmail = async (email) => {
    try {
        const data = await sendEmail("Your Password Has Been Reset", resetSuccessTemplate(), email);
        console.log("Password reset success email sent:", data);
    }
    catch (err) {
        console.error("Reset success email error:", err);
        throw err;
    }
};
export const contactEmail = async (email) => { };
//# sourceMappingURL=email.js.map