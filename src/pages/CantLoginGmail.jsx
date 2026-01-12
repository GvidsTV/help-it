import React from "react";
import { Mail, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function CantLoginGmail() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/email-login" style={{ color: "#d97706" }}>Email Issues</a> / Can't Login to Gmail
        </div>

        <div className="text-center mb-12">
          <Mail size={56} style={{ color: "#ef4444", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Can't Log Into Gmail?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            We'll get you back in your account fast
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
              Try These First
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="font-bold mb-2">1. Check if Caps Lock is on</p>
            <p className="ml-4 mb-4">Passwords are case-sensitive. That's the #1 cause of login fails.</p>
            
            <p className="font-bold mb-2">2. Try "Forgot Password"</p>
            <p className="ml-4 mb-4">Click the "Forgot password?" link on Gmail's login page and follow the steps.</p>
            
            <p className="font-bold mb-2">3. Check for typos in your email address</p>
            <p className="ml-4 mb-4">Make sure you're typing the right email (yourname@gmail.com).</p>
            
            <p className="font-bold mb-2">4. Clear your browser cache</p>
            <p className="ml-4">Old browser data can cause login problems.</p>
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
            Step-by-Step: Reset Your Password
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
                <p className="font-bold mb-1">Go to gmail.com</p>
                <p>Click "Forgot password?" below the login box</p>
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
                <p className="font-bold mb-1">Enter your Gmail address</p>
                <p>Type the email you're trying to access</p>
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
                <p className="font-bold mb-1">Verify it's you</p>
                <p>Google will ask you to verify via phone, recovery email, or security questions</p>
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
                <p className="font-bold mb-1">Create a new password</p>
                <p>Make it strong: 12+ characters, mix of letters/numbers/symbols</p>
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
                <p>Save your new password in a safe place</p>
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
            <p className="mb-3">If you:</p>
            <ul className="space-y-1 ml-4">
              <li>• Don't have access to your recovery phone</li>
              <li>• Don't have access to your recovery email</li>
              <li>• Can't remember your security questions</li>
            </ul>
            <p className="mt-3 font-bold">Contact us immediately - we can help recover your account.</p>
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
            We'll recover your account and secure it so this doesn't happen again.
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
