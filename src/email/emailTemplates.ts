export const verificationEmailTemplate = (
  name: string,
  verificationToken: number,
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #eef2ff; margin: 0; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 24px rgba(37, 99, 235, 0.10); overflow: hidden;">
      
      <div style="background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%); padding: 36px 20px; text-align: center;">
        <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border-radius: 12px; padding: 8px 24px; margin-bottom: 10px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">Tenex</h1>
        </div>
        <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 0.5px;">Your trusted tech marketplace</p>
      </div>

      <div style="padding: 44px 40px 36px 40px;">
        <div style="display: inline-block; background-color: #eff6ff; border-radius: 8px; padding: 6px 14px; margin-bottom: 20px;">
          <span style="color: #2563eb; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">EMAIL VERIFICATION</span>
        </div>
        <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 22px; font-weight: 700;">Verify your email address</h2>
        <p style="color: #6b7280; font-size: 16px; margin: 0 0 8px 0;">Hi <strong style="color: #111827;">${name}</strong>,</p>
        <p style="color: #6b7280; font-size: 15px; margin: 0 0 28px 0;">Thanks for signing up with Tenex! Use the verification code below to complete your registration. The code expires in <strong style="color: #111827;">10 minutes</strong>.</p>
        
        <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 2px dashed #93c5fd; border-radius: 12px; padding: 28px 16px; margin: 0 0 28px 0; text-align: center;">
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">Your Verification Code</p>
          <span style="font-family: 'Courier New', monospace; font-size: 42px; font-weight: 800; letter-spacing: 10px; color: #1d4ed8;">${verificationToken}</span>
        </div>

        <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
          <p style="margin: 0; color: #92400e; font-size: 13px;">⚠️ &nbsp;Never share this code with anyone. Tenex will never ask for your OTP.</p>
        </div>

        <p style="color: #9ca3af; font-size: 13px; margin: 0;">Didn't request this? You can safely ignore this email.</p>
      </div>

      <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px;">Need help? <a href="#" style="color: #2563eb; text-decoration: none; font-weight: 500;">Contact Support</a></p>
        <p style="margin: 0; color: #d1d5db; font-size: 12px;">&copy; ${new Date().getFullYear()} Tenex. All rights reserved.</p>
      </div>

    </div>
  </div>
</body>
</html>
`;

export const resetPasswordTemplate = (resetURL: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #fff1f2; margin: 0; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 24px rgba(220, 38, 38, 0.10); overflow: hidden;">

      <div style="background: linear-gradient(135deg, #b91c1c 0%, #dc2626 60%, #ef4444 100%); padding: 36px 20px; text-align: center;">
        <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border-radius: 12px; padding: 8px 24px; margin-bottom: 10px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">Tenex</h1>
        </div>
        <p style="color: #fecaca; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 0.5px;">Your trusted tech marketplace</p>
      </div>

      <div style="padding: 44px 40px 36px 40px;">
        <div style="display: inline-block; background-color: #fff1f2; border-radius: 8px; padding: 6px 14px; margin-bottom: 20px;">
          <span style="color: #dc2626; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">PASSWORD RESET</span>
        </div>
        <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 22px; font-weight: 700;">Password Reset Request</h2>
        <p style="color: #6b7280; font-size: 15px; margin: 0 0 28px 0;">We received a request to reset your Tenex password. Click the button below to set a new one. This link is valid for <strong style="color: #111827;">1 hour</strong>.</p>
        
        <div style="text-align: center; margin: 0 0 28px 0;">
          <a href="${resetURL}" style="background: linear-gradient(135deg, #b91c1c, #dc2626); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(220,38,38,0.3); letter-spacing: 0.3px;">Reset My Password →</a>
        </div>

        <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
          <p style="margin: 0 0 6px 0; color: #6b7280; font-size: 13px; font-weight: 500;">Or copy and paste this link in your browser:</p>
          <p style="margin: 0; color: #2563eb; font-size: 12px; word-break: break-all; font-family: 'Courier New', monospace;">${resetURL}</p>
        </div>

        <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 14px 16px;">
          <p style="margin: 0; color: #92400e; font-size: 13px;">⚠️ &nbsp;If you didn't request a password reset, please ignore this email or contact support immediately.</p>
        </div>
      </div>

      <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px;">Need help? <a href="#" style="color: #dc2626; text-decoration: none; font-weight: 500;">Contact Support</a></p>
        <p style="margin: 0; color: #d1d5db; font-size: 12px;">&copy; ${new Date().getFullYear()} Tenex. All rights reserved.</p>
      </div>

    </div>
  </div>
</body>
</html>
`;

export const resetSuccessTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #ecfdf5; margin: 0; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 24px rgba(5, 150, 105, 0.10); overflow: hidden;">

      <div style="background: linear-gradient(135deg, #047857 0%, #059669 60%, #10b981 100%); padding: 36px 20px; text-align: center;">
        <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border-radius: 12px; padding: 8px 24px; margin-bottom: 10px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">Tenex</h1>
        </div>
        <p style="color: #a7f3d0; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 0.5px;">Your trusted tech marketplace</p>
      </div>

      <div style="padding: 44px 40px 36px 40px; text-align: center;">
        <div style="background: linear-gradient(135deg, #d1fae5, #a7f3d0); width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px auto; font-size: 36px; box-shadow: 0 4px 12px rgba(5,150,105,0.2);">✓</div>
        
        <div style="display: inline-block; background-color: #ecfdf5; border-radius: 8px; padding: 6px 14px; margin-bottom: 16px;">
          <span style="color: #059669; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">SUCCESS</span>
        </div>
        <h2 style="margin: 0 0 12px 0; color: #111827; font-size: 22px; font-weight: 700;">Password Updated!</h2>
        <p style="color: #6b7280; font-size: 15px; margin: 0 0 32px 0;">Your Tenex password has been successfully reset. You can now log in using your new password.</p>
        
        <a href="#" style="background: linear-gradient(135deg, #047857, #059669); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(5,150,105,0.3); letter-spacing: 0.3px;">Go to Login →</a>

        <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 14px 16px; margin-top: 32px; text-align: left;">
          <p style="margin: 0; color: #92400e; font-size: 13px;">⚠️ &nbsp;If you didn't make this change, contact our support team immediately.</p>
        </div>
      </div>

      <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px;">Need help? <a href="#" style="color: #059669; text-decoration: none; font-weight: 500;">Contact Support</a></p>
        <p style="margin: 0; color: #d1d5db; font-size: 12px;">&copy; ${new Date().getFullYear()} Tenex. All rights reserved.</p>
      </div>

    </div>
  </div>
</body>
</html>
`;

export const welcomeEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Tenex</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #eef2ff; margin: 0; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 24px rgba(37, 99, 235, 0.10); overflow: hidden;">

      <div style="background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%); padding: 48px 20px; text-align: center;">
        <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border-radius: 12px; padding: 8px 24px; margin-bottom: 16px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">Tenex</h1>
        </div>
        <h2 style="color: #ffffff; margin: 0 0 8px 0; font-size: 26px; font-weight: 700;">Welcome aboard! 🎉</h2>
        <p style="color: #bfdbfe; margin: 0; font-size: 15px;">We're thrilled to have you with us.</p>
      </div>

      <div style="padding: 44px 40px 36px 40px;">
        <p style="color: #6b7280; font-size: 16px; margin: 0 0 8px 0;">Hi <strong style="color: #111827;">${name}</strong>,</p>
        <p style="color: #6b7280; font-size: 15px; margin: 0 0 28px 0;">Thank you for joining Tenex! Your account is all set. Here's what you can do right away:</p>

        <div style="display: grid; gap: 12px; margin-bottom: 32px;">
          <div style="background-color: #f9fafb; border-radius: 10px; padding: 16px 20px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 600;">🛍️ &nbsp;Browse Products</p>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Explore our vast collection of the latest tech gear.</p>
          </div>
          <div style="background-color: #f9fafb; border-radius: 10px; padding: 16px 20px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 600;">📦 &nbsp;Track Orders</p>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Stay updated on your deliveries in real time.</p>
          </div>
          <div style="background-color: #f9fafb; border-radius: 10px; padding: 16px 20px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 600;">🎁 &nbsp;Exclusive Deals</p>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Enjoy member-only discounts and early access to sales.</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-bottom: 28px;">
          <a href="#" style="background: linear-gradient(135deg, #1d4ed8, #2563eb); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(37,99,235,0.3); letter-spacing: 0.3px;">Start Shopping →</a>
        </div>
        
        <p style="color: #9ca3af; font-size: 13px; margin: 0; text-align: center;">Have questions? Reply to this email and we'll be happy to help.</p>
      </div>

      <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 13px;">Need help? <a href="#" style="color: #2563eb; text-decoration: none; font-weight: 500;">Contact Support</a></p>
        <p style="margin: 0; color: #d1d5db; font-size: 12px;">&copy; ${new Date().getFullYear()} Tenex. All rights reserved.</p>
      </div>

    </div>
  </div>
</body>
</html>
`;
