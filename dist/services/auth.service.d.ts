export declare const registerService: (name: string, email: string, password: string) => Promise<{
    newUser: {
        name: string;
        email: string;
        password: string;
        id: string;
        verificationToken: string | null;
        verificationTokenExpiresAt: Date | null;
        resetPasswordToken: number | null;
        resetPasswordTokenExpiresAt: Date | null;
        isVerified: boolean;
        isLoggedIn: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
export declare const verifyTokenService: (email: string, token: string) => Promise<void>;
export declare const loginService: (email: string, password: string) => Promise<{
    user: {
        name: string;
        email: string;
        password: string;
        id: string;
        verificationToken: string | null;
        verificationTokenExpiresAt: Date | null;
        resetPasswordToken: number | null;
        resetPasswordTokenExpiresAt: Date | null;
        isVerified: boolean;
        isLoggedIn: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map