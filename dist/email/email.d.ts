export declare const sendVerificationEmail: (name: string, email: string, verificationToken: number) => Promise<void>;
export declare const sendWelcomeEmail: (email: string, name: string) => Promise<void>;
export declare const sendPasswordResetEmail: (email: string, otp: number) => Promise<void>;
export declare const sendResetSuccessEmail: (email: string) => Promise<void>;
export declare const contactEmail: (email: string) => Promise<void>;
//# sourceMappingURL=email.d.ts.map