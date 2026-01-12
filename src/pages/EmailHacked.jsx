import React from "react";
import { Shield, AlertTriangle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function EmailHacked() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/email-login" style={{ color: "#d97706" }}>Email Issues</a> / Email Hacked
        </div>

        <div className="text-center mb-12">
          <Shield size={56} style={{ color: "#ef4444", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Email Account Hacked?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Act fast - we'll help you secure it NOW
          </p>
        </div>

        <div
          className="rounded-xl p-8 mb-8"
          style={{
            background: "rgba(239, 68, 68, 0.2)",
            border: "2px solid #ef4444",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={32} style={{ color: "#ef4444" }} />
            <h2 className="text-2xl font-bold" style={{ color: "#ef4444" }}>
              DO THESE IMMEDIATELY
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <ol className="ml-4 space-y-3">
              <li className="font-bold">1. Change your password RIGHT NOW (if you still can log in)</li>
              <li className="font-bold">2. Check "sent" folder for emails you didn't send</li>
              <li className="font-bold">3. Alert your contacts that your account was compromised</li>
              <li className="font-bold">4. Check if payment info was accessed</li>
            </ol>
            <p className="mt-4 font-bold" style={{ color: "#ef4444" }}>Can't log in at all? Skip to recovery steps below →</p>
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
            Recovery & Security Steps
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", color: "#fff", fontWeight: "bold" }}
              >
                1
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Reset Password Immediately</p>
                <p className="mb-2">If you can still log in:</p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Change password to something completely new</li>
                  <li>• Make it 12+ characters with numbers/symbols</li>
                  <li>• Don't reuse old passwords</li>
                </ul>
                <p className="mb-2">If locked out:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Use "Forgot Password" to recover</li>
                  <li>• May need to verify with recovery email/phone</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", color: "#fff", fontWeight: "bold" }}
              >
                2
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check Account Settings</p>
                <p className="mb-2">Look for unauthorized changes:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Recovery email/phone changed?</li>
                  <li>• Email forwarding rules added?</li>
                  <li>• Unknown devices logged in?</li>
                  <li>• Automatic reply set up?</li>
                </ul>
                <p className="mt-2">Remove anything suspicious!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", color: "#fff", fontWeight: "bold" }}
              >
                3
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Enable Two-Factor Authentication</p>
                <p className="mb-2">Prevent future hacks:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Go to security settings</li>
                  <li>• Turn on 2-factor authentication</li>
                  <li>• Use authenticator app (Google Authenticator, etc.)</li>
                  <li>• Save backup codes somewhere safe</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", color: "#fff", fontWeight: "bold" }}
              >
                4
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Review Recent Activity</p>
                <ul className="ml-4 space-y-1">
                  <li>• Check sent emails for spam from your account</li>
                  <li>• Look for suspicious login locations</li>
                  <li>• Check if personal info was accessed</li>
                  <li>• Review any connected apps/services</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", color: "#fff", fontWeight: "bold" }}
              >
                5
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Change Other Account Passwords</p>
                <p className="mb-2">If you reused that password:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Banking/financial accounts</li>
                  <li>• Social media</li>
                  <li>• Online shopping sites</li>
                  <li>• Any site using same password</li>
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
                <p className="font-bold mb-1">Monitor for 30 Days</p>
                <p>Watch for suspicious activity. Alert contacts if they receive strange emails from you.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h3 className="font-bold text-lg mb-3" style={{ color: "#fbbf24" }}>
            Signs Your Email Was Hacked
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <ul className="space-y-2 ml-4">
              <li>• <span className="font-bold">Password doesn't work</span> - hacker changed it</li>
              <li>• <span className="font-bold">Sent emails you didn't write</span> - spam sent to your contacts</li>
              <li>• <span className="font-bold">Strange login locations</span> - logins from other countries</li>
              <li>• <span className="font-bold">Contacts getting spam</span> - from your email address</li>
              <li>• <span className="font-bold">Account settings changed</span> - recovery info updated</li>
              <li>• <span className="font-bold">Missing emails</span> - hacker deleted evidence</li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.2) 100%)",
            border: "2px solid #ef4444",
          }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Need Help Recovering Your Account?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            This is urgent - we'll help you secure your account and check for damage.
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
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)",
              }}
            >
              <Phone size={20} />
              GET URGENT HELP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
