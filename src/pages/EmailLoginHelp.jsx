import React from "react";
import { Mail, ArrowRight, CheckCircle, AlertCircle, Phone, MessageSquare } from "lucide-react";

export default function EmailLoginHelp() {
  const sections = [
    {
      id: "cant-log-in",
      title: "Can't Log Into Email",
      icon: AlertCircle,
      content: [
        { type: "header", text: "Common Causes:" },
        { type: "list", items: ["Wrong password", "Caps Lock is on", "Account temporarily locked", "Browser issues"] },
        { type: "header", text: "Quick Fixes:" },
        { type: "numbered", items: ["Check if Caps Lock is on", "Try resetting your password", "Clear browser cache and cookies", "Try a different browser"] },
        { type: "text", text: "Still not working? We can help you recover access." }
      ],
      link: "/help/cant-log-into-gmail",
    },
    {
      id: "forgot-password",
      title: "Forgot Password",
      icon: AlertCircle,
      content: [
        { type: "header", text: "How to Reset:" },
        { type: "numbered", items: ['Click "Forgot Password" on the login page', "Enter your email address", "Check your email for reset link", "Create a new strong password"] },
        { type: "header", text: "Tips:" },
        { type: "list", items: ["Use a password manager", "Don't reuse passwords", "Enable two-factor authentication"] },
        { type: "text", text: "Need help? We'll walk you through it." }
      ],
      link: "/help/forgot-password",
    },
    {
      id: "account-hacked",
      title: "Account Got Hacked",
      icon: AlertCircle,
      content: [
        { type: "header", text: "Immediate Steps:" },
        { type: "numbered", items: ["Try to reset your password ASAP", "Check for suspicious activity", "Enable two-factor authentication", "Alert contacts if spam was sent"] },
        { type: "header", text: "Signs of Hacking:" },
        { type: "list", items: ["Emails you didn't send", "Password no longer works", "Strange activity logs", "Contacts receiving spam from you"] },
        { type: "text", text: "This is urgent - Contact us immediately." }
      ],
      link: "/help/email-hacked",
    },
    {
      id: "not-receiving-emails",
      title: "Not Receiving Emails",
      icon: AlertCircle,
      content: [
        { type: "header", text: "Check These First:" },
        { type: "numbered", items: ["Look in Spam/Junk folder", "Check if inbox is full", "Verify email filters aren't blocking", "Make sure account isn't suspended"] },
        { type: "header", text: "Common Fixes:" },
        { type: "list", items: ["Clear spam folder to free space", "Update email filters", "Check account storage limits", "Verify forwarding rules"] },
        { type: "text", text: "Still missing emails? We can diagnose it." }
      ],
      link: "/contact",
    },
  ];

  const renderContent = (content) => {
    return content.map((item, idx) => {
      if (item.type === "header") {
        return (
          <p key={idx} className="font-bold mt-4 mb-2" style={{ color: "#fbbf24" }}>
            {item.text}
          </p>
        );
      }
      if (item.type === "list") {
        return (
          <ul key={idx} className="space-y-1 mb-3">
            {item.items.map((listItem, i) => (
              <li key={i} style={{ color: "#f5f5f4" }}>• {listItem}</li>
            ))}
          </ul>
        );
      }
      if (item.type === "numbered") {
        return (
          <ol key={idx} className="space-y-1 mb-3 ml-4">
            {item.items.map((listItem, i) => (
              <li key={i} style={{ color: "#f5f5f4" }}>{i + 1}. {listItem}</li>
            ))}
          </ol>
        );
      }
      if (item.type === "text") {
        return (
          <p key={idx} className="mt-3" style={{ color: "#f5f5f4" }}>
            {item.text}
          </p>
        );
      }
      return null;
    });
  };

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

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="mb-6" style={{ color: "#d97706", fontSize: "14px" }}>
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Email & Login Issues
        </div>

        <div className="text-center mb-12">
          <Mail size={64} style={{ color: "#ef4444", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Email & Login Issues
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Can't access your email? We'll help you get back in.
          </p>
        </div>

        <div
          className="rounded-xl p-6 mb-12"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Jump to Section:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-lg text-center text-sm font-semibold"
                style={{
                  background: "rgba(217, 119, 6, 0.2)",
                  color: "#fbbf24",
                  border: "1px solid rgba(217, 119, 6, 0.3)",
                }}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="rounded-xl p-8"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  border: "2px solid rgba(217, 119, 6, 0.4)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon size={32} style={{ color: "#ef4444" }} />
                  <h2 className="text-3xl font-bold" style={{ color: "#fbbf24" }}>
                    {section.title}
                  </h2>
                </div>

                <div style={{ fontSize: "16px", lineHeight: "1.7" }}>
                  {renderContent(section.content)}
                </div>

                {section.link && (
                  <a
                    href={section.link}
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                      color: "#fff",
                    }}
                  >
                    Get Detailed Help <ArrowRight size={18} />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)",
            border: "2px solid #fbbf24",
          }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Still Can't Get In?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            Let us handle it. We'll recover your account and secure it.
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
