import React from "react";
import { Key, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6" style={{ color: "#d97706", fontSize: "14px" }}>
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/email-login" style={{ color: "#d97706" }}>Email Issues</a> / Forgot Password
        </div>

        <div className="text-center mb-12">
          <Key size={56} style={{ color: "#fbbf24", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Forgot Your Password?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            We'll help you reset it and get back in
          </p>
        </div>

        <div
          className="rounded-xl p-8 mb-8"
          style={{
            background: "rgba(217, 119, 6, 0.2)",
            border: "2px solid #fbbf24",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle size={32} style={{ color: "#fbbf24" }} />
            <h2 className="text-2xl font-bold" style={{ color: "#fbbf24" }}>
              Before You Reset
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="font-bold mb-2">Quick Checks:</p>
            <ul className="ml-4 space-y-2">
              <li>• Try typing your password carefully (Caps Lock off?)</li>
              <li>• Check if you're using the right email address</li>
              <li>• Try your other common passwords</li>
              <li>• Check if password manager has it saved</li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl p-8 mb-8"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#fbbf24" }}>
            How to Reset Your Password
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                1
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Go to the login page</p>
                <p>Gmail, Outlook, Yahoo, etc. - wherever you need to log in</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                2
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Click "Forgot Password"</p>
                <p>Usually right below the password field. Might say "Can't access your account?" or similar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                3
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Enter your email/username</p>
                <p>Type the account you're trying to access</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                4
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Verify it's you</p>
                <p className="mb-2">They'll ask you to verify via:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Text message to your phone</li>
                  <li>• Email to recovery address</li>
                  <li>• Security questions</li>
                  <li>• Authenticator app code</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                5
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Create new password</p>
                <p className="mb-2">Make it strong:</p>
                <ul className="ml-4 space-y-1">
                  <li>• At least 12 characters</li>
                  <li>• Mix of letters, numbers, symbols</li>
                  <li>• Don't reuse old passwords</li>
                  <li>• Write it down somewhere safe!</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff" }}
              >
                <CheckCircle size={24} />
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">You're back in!</p>
                <p>Consider using a password manager so this doesn't happen again</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: "rgba(239, 68, 68, 0.1)",
            border: "2px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <h3 className="font-bold text-lg mb-3" style={{ color: "#ef4444" }}>
            ⚠️ Can't Reset Your Password?
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="mb-3">Common problems:</p>
            <ul className="space-y-2 ml-4">
              <li>• Recovery email/phone number changed</li>
              <li>• Don't remember security questions</li>
              <li>• Not receiving reset emails (check spam!)</li>
              <li>• Account locked due to suspicious activity</li>
            </ul>
            <p className="mt-4 font-bold">We can help with account recovery - contact us now.</p>
          </div>
        </div>

        <div
          className="rounded-xl p-8 mb-8"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Tips to Avoid This Again
          </h2>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2" style={{ color: "#fbbf24" }}>Use a Password Manager</p>
                <p>Let software remember your passwords securely. We recommend 1Password, LastPass, or Bitwarden.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: "#fbbf24" }}>Keep Recovery Info Updated</p>
                <p>Make sure your backup email and phone number are current in your account settings.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: "#fbbf24" }}>Write Down Important Passwords</p>
                <p>Keep them in a safe place - not on a sticky note on your monitor!</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)",
            border: "2px solid #fbbf24",
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Still Locked Out?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll recover your account and set up better password management.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold"
              style={{
                background: "rgba(120, 113, 108, 0.5)",
                color: "#fbbf24",
                border: "2px solid rgba(217, 119, 6, 0.5)",
              }}
            >
              <MessageSquare size={20} />
              Chat with AI
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                color: "#000",
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
              }}
            >
              <Phone size={20} />
              Get Personal Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
