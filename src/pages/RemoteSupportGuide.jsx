import React, { useState } from "react";
import { Monitor, Shield, CheckCircle, Clock, Download, Phone, Mail, ArrowRight, AlertCircle } from "lucide-react";

export default function RemoteSupportGuide() {
  const [selectedTool, setSelectedTool] = useState("chrome");

  const tools = [
    {
      id: "chrome",
      name: "Chrome Remote Desktop",
      recommended: true,
      pros: [
        "Completely free forever",
        "No software to install (Chrome extension)",
        "Simple 12-digit code system",
        "Works on any device with Chrome",
        "Google's security and privacy standards",
      ],
      cons: [
        "Requires Chrome browser",
        "Slightly limited features vs AnyDesk",
      ],
      setupSteps: [
        "Open Chrome browser on your computer",
        "Go to remotedesktop.google.com/support",
        "Click 'Get Support' and then 'Generate Code'",
        "Share the 12-digit code with your support technician",
        "The code expires after you end the session",
      ],
      downloadLink: "https://remotedesktop.google.com/support",
    },
    {
      id: "anydesk",
      name: "AnyDesk",
      recommended: false,
      pros: [
        "Lightweight (3MB download)",
        "Very fast connection",
        "Works on Windows, Mac, Linux, mobile",
        "Professional features",
        "Free for personal use",
      ],
      cons: [
        "Requires software installation",
        "Slightly more complex setup",
      ],
      setupSteps: [
        "Download AnyDesk from anydesk.com",
        "Run the installer (takes 30 seconds)",
        "Open AnyDesk - you'll see your AnyDesk Address",
        "Share your AnyDesk Address with your technician",
        "Accept the incoming connection request",
      ],
      downloadLink: "https://anydesk.com/en/downloads",
    },
  ];

  const currentTool = tools.find(t => t.id === selectedTool);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)",
        position: "relative",
      }}
    >
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Set Up Remote Support",
          "description": "Step-by-step guide to setting up Chrome Remote Desktop or AnyDesk for IT support sessions",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Choose your remote support tool",
              "text": "We recommend Chrome Remote Desktop for simplicity, or AnyDesk for advanced features"
            },
            {
              "@type": "HowToStep",
              "name": "Download and install",
              "text": "Follow the setup instructions for your chosen tool"
            },
            {
              "@type": "HowToStep",
              "name": "Generate access code",
              "text": "Create a temporary access code to share with your technician"
            },
            {
              "@type": "HowToStep",
              "name": "Share code with support",
              "text": "Provide the code via your support ticket or direct message"
            }
          ]
        })}
      </script>

      {/* Background glow */}
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

      {/* Header */}
      

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Monitor size={64} style={{ color: "#fbbf24", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Remote Support Setup Guide
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Let us fix your problem remotely — safe, simple, and you watch everything we do.
          </p>
        </div>

        {/* How It Works */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#fbbf24" }}>
            How Remote Support Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Download, title: "1. Download Tool", text: "Install Chrome Remote Desktop or AnyDesk" },
              { icon: Phone, title: "2. Schedule Session", text: "Book via ticket or direct link (Don members)" },
              { icon: CheckCircle, title: "3. Share Access", text: "Give us your temporary code" },
              { icon: Monitor, title: "4. We Fix It", text: "Watch as we solve your problem" },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                      boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                    }}
                  >
                    <Icon size={28} style={{ color: "#000" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#fbbf24" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#f5f5f4", fontSize: "14px" }}>
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Promise */}
        <div
          className="rounded-xl p-6 mb-12"
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            border: "2px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <Shield size={32} style={{ color: "#10b981", flexShrink: 0 }} />
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#10b981" }}>
                Your Security is Guaranteed
              </h3>
              <ul className="space-y-2" style={{ color: "#f5f5f4" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                  <span>You see everything we do on your screen — no hidden actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                  <span>You can end the session instantly at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                  <span>Access codes are temporary and expire after each session</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                  <span>We never ask for passwords or store sensitive information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                  <span>All connections are encrypted and secure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tool Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "#fbbf24" }}>
            Choose Your Remote Support Tool
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className="px-8 py-4 rounded-lg font-bold transition-all"
                style={{
                  background: selectedTool === tool.id
                    ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
                    : "rgba(120, 113, 108, 0.3)",
                  color: selectedTool === tool.id ? "#000" : "#fbbf24",
                  border: "2px solid " + (selectedTool === tool.id ? "#fbbf24" : "rgba(217, 119, 6, 0.4)"),
                }}
              >
                {tool.name}
                {tool.recommended && (
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      background: selectedTool === tool.id ? "rgba(0,0,0,0.2)" : "rgba(251, 191, 36, 0.2)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    RECOMMENDED
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tool Details */}
          {currentTool && (
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                border: "2px solid rgba(217, 119, 6, 0.4)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Pros */}
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#10b981" }}>
                    ✓ Advantages
                  </h3>
                  <ul className="space-y-2">
                    {currentTool.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "#f5f5f4", fontSize: "15px" }}>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#d97706" }}>
                    ⚠ Things to Know
                  </h3>
                  <ul className="space-y-2">
                    {currentTool.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle size={18} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "#f5f5f4", fontSize: "15px" }}>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Setup Steps */}
              <div
                className="rounded-lg p-6 mb-6"
                style={{
                  background: "rgba(217, 119, 6, 0.1)",
                  border: "1px solid rgba(217, 119, 6, 0.3)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#fbbf24" }}>
                  Setup Instructions
                </h3>
                <ol className="space-y-3">
                  {currentTool.setupSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        className="font-bold"
                        style={{
                          color: "#fbbf24",
                          minWidth: "24px",
                          fontSize: "18px",
                        }}
                      >
                        {idx + 1}.
                      </span>
                      <span style={{ color: "#f5f5f4", fontSize: "15px" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <a
                  href={currentTool.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                    color: "#000",
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <Download size={20} />
                  Download {currentTool.name}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Tier-Specific Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              border: "2px solid rgba(217, 119, 6, 0.4)",
            }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#d97706" }}>
              Made Man Members
            </h3>
            <ul className="space-y-2" style={{ color: "#f5f5f4", fontSize: "15px" }}>
              <li className="flex items-start gap-2">
                <Clock size={18} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                <span>24-48 hour response time</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                <span>Schedule via support ticket</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
                <span>Chrome Remote Desktop or AnyDesk</span>
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 font-semibold"
              style={{ color: "#d97706" }}
            >
              Submit Support Ticket <ArrowRight size={18} />
            </a>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)",
              border: "2px solid #fbbf24",
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)",
            }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#fbbf24" }}>
              Don Members (Priority)
            </h3>
            <ul className="space-y-2" style={{ color: "#f5f5f4", fontSize: "15px" }}>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#fbbf24", flexShrink: 0, marginTop: "2px" }} />
                <span>Same-day response</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#fbbf24", flexShrink: 0, marginTop: "2px" }} />
                <span>Direct scheduling link</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#fbbf24", flexShrink: 0, marginTop: "2px" }} />
                <span>Your choice of tool</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} style={{ color: "#fbbf24", flexShrink: 0, marginTop: "2px" }} />
                <span>Emergency after-hours available</span>
              </li>
            </ul>
            <a
              href="tel:407-504-1287"
              className="inline-flex items-center gap-2 mt-4 font-semibold"
              style={{ color: "#fbbf24" }}
            >
              Call Direct: 407-504-1287 <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Troubleshooting */}
        <div
          className="rounded-xl p-8 mb-12"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            border: "2px solid rgba(217, 119, 6, 0.4)",
          }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#fbbf24" }}>
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What if I can't install the software?",
                a: "Chrome Remote Desktop doesn't require installation - it's just a Chrome extension. If you're having trouble, we can walk you through it via phone or find an alternative method.",
              },
              {
                q: "Will you see my passwords?",
                a: "We never ask for passwords and don't need to see them. If a password needs to be reset, we'll guide you to do it yourself or you can type it while we look away from the screen.",
              },
              {
                q: "Can I use this on my phone or tablet?",
                a: "Yes! Both Chrome Remote Desktop and AnyDesk work on iOS and Android. The setup is similar - just install the app from your device's app store.",
              },
              {
                q: "What happens after the session ends?",
                a: "The access code expires automatically. We can't reconnect without you generating a new code. Your security is maintained.",
              },
              {
                q: "Do I need to stay at my computer?",
                a: "For simple fixes, you can step away once we're connected. For issues requiring your input (like entering passwords), you'll need to be present.",
              },
            ].map((faq, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-2" style={{ color: "#fbbf24", fontSize: "16px" }}>
                  {faq.q}
                </h4>
                <p style={{ color: "#f5f5f4", fontSize: "15px", lineHeight: "1.6" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)",
            border: "2px solid #fbbf24",
          }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Need Help Setting This Up?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            We'll walk you through it step by step. No tech experience required.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:407-504-1287"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                color: "#000",
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
              }}
            >
              <Phone size={20} />
              Call Us: 407-504-1287
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all"
              style={{
                background: "rgba(120, 113, 108, 0.5)",
                color: "#fbbf24",
                border: "2px solid rgba(217, 119, 6, 0.5)",
              }}
            >
              <Mail size={20} />
              Submit a Ticket
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-8"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          borderTopColor: "rgba(217, 119, 6, 0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p style={{ color: "#78716c", fontSize: "14px" }}>
            © 2025 Help IT. Just call the HIT Man. We'll take care of IT.
          </p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="tel:407-504-1287" style={{ color: "#d97706" }}>407-504-1287</a>
            <a href="mailto:support@helpitapp.com" style={{ color: "#d97706" }}>support@helpitapp.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
