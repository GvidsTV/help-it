import React from "react";
import { Shield, ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function SecurityBasicsHelp() {
  const sections = [
    {
      id: "strong-passwords",
      title: "Creating Strong Passwords",
      content: [
        { type: "header", text: "Password Rules:" },
        { type: "list", items: ["At least 12 characters long", "Mix of uppercase, lowercase, numbers, symbols", "Don't use personal info (birthday, name, etc.)", "Don't reuse passwords across sites"] },
        { type: "header", text: "Best Practice:" },
        { type: "numbered", items: ["Use a password manager (1Password, LastPass, etc.)", "Enable two-factor authentication everywhere", "Change passwords if site gets hacked", "Never share passwords via email/text"] },
        { type: "text", text: "Need help setting up a password manager? We'll walk you through it." }
      ],
      link: "/contact",
    },
    {
      id: "two-factor",
      title: "Two-Factor Authentication (2FA)",
      content: [
        { type: "header", text: "What is 2FA:" },
        { type: "text", text: "Extra layer of security - requires your password PLUS a code from your phone." },
        { type: "header", text: "Where to Enable:" },
        { type: "list", items: ["Email accounts (Gmail, Outlook)", "Banking and financial sites", "Social media accounts", "Any site with personal info"] },
        { type: "header", text: "Types of 2FA:" },
        { type: "numbered", items: ["Text message codes (easiest)", "Authenticator apps (more secure)", "Physical security keys (most secure)"] },
        { type: "text", text: "Confused about 2FA? We'll set it up for you." }
      ],
      link: "/contact",
    },
    {
      id: "phishing-scams",
      title: "Recognizing Phishing & Scams",
      content: [
        { type: "header", text: "Red Flags:" },
        { type: "list", items: ["Urgent action required", "Too good to be true offers", "Poor grammar/spelling", "Suspicious sender email", "Requests for passwords or personal info"] },
        { type: "header", text: "Stay Safe:" },
        { type: "numbered", items: ["Never click links in unexpected emails", "Verify sender before opening attachments", "Go directly to websites (don't click email links)", "Call company directly if email seems suspicious"] },
        { type: "text", text: "Think you clicked a scam link? Contact us immediately." }
      ],
      link: "/help/email-hacked",
    },
    {
      id: "antivirus",
      title: "Antivirus & Malware Protection",
      content: [
        { type: "header", text: "You Need:" },
        { type: "list", items: ["Antivirus software installed and updated", "Regular system scans", "Firewall enabled", "Operating system up to date"] },
        { type: "header", text: "Signs of Malware:" },
        { type: "list", items: ["Computer suddenly slow", "Pop-ups everywhere", "Programs opening by themselves", "Browser homepage changed", "Can't access security settings"] },
        { type: "text", text: "Think you have malware? We'll clean it up remotely." }
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Security Basics
        </div>

        <div className="text-center mb-12">
          <Shield size={64} style={{ color: "#ef4444", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Security Basics
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Protect yourself online - it's easier than you think
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
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="rounded-xl p-8"
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                border: "2px solid rgba(217, 119, 6, 0.4)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#fbbf24" }}>
                {section.title}
              </h2>

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
          ))}
        </div>

        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)",
            border: "2px solid #fbbf24",
          }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Need Security Help?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            We'll audit your security, set up 2FA, and make sure you're protected.
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
