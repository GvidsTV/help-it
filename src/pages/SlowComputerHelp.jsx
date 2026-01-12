import React from "react";
import { Monitor, ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function SlowComputerHelp() {
  const sections = [
    {
      id: "general-slowness",
      title: "Computer Running Slow Overall",
      content: [
        { type: "header", text: "Most Common Causes:" },
        { type: "list", items: ["Too many programs running at once", "Not enough free disk space", "Outdated software", "Malware or viruses", "Computer needs restart"] },
        { type: "header", text: "Quick Fixes:" },
        { type: "numbered", items: ["Restart your computer", "Close programs you're not using", "Check available disk space (need 15%+ free)", "Run Windows Update or Mac Software Update", "Scan for viruses"] },
        { type: "text", text: "Still slow? We can diagnose what's eating resources." }
      ],
      link: "/help/slow-computer-fix",
    },
    {
      id: "startup-slow",
      title: "Takes Forever to Start Up",
      content: [
        { type: "header", text: "Why Startup is Slow:" },
        { type: "list", items: ["Too many startup programs", "Hard drive nearly full", "Old mechanical hard drive (not SSD)", "Windows updates pending"] },
        { type: "header", text: "Speed Up Startup:" },
        { type: "numbered", items: ["Disable unnecessary startup programs", "Free up disk space", "Update Windows/Mac", "Consider upgrading to SSD (we can help!)"] },
        { type: "text", text: "Startup taking 5+ minutes? That's not normal - contact us." }
      ],
      link: "/contact",
    },
    {
      id: "programs-freezing",
      title: "Programs Keep Freezing or Crashing",
      content: [
        { type: "header", text: "Common Reasons:" },
        { type: "list", items: ["Not enough RAM memory", "Program needs updates", "Corrupted program files", "Conflicting software"] },
        { type: "header", text: "Try These:" },
        { type: "numbered", items: ["Update the freezing program", "Restart your computer", "Uninstall and reinstall the program", "Check if other programs also freeze"] },
        { type: "text", text: "Specific program always crashing? We can fix it." }
      ],
      link: "/contact",
    },
    {
      id: "internet-slow",
      title: "Internet is Slow on Computer",
      content: [
        { type: "header", text: "Check First:" },
        { type: "numbered", items: ["Test internet speed on phone - is it also slow?", "Restart your router", "Move closer to WiFi router", "Close browser tabs you're not using"] },
        { type: "header", text: "If Only Computer is Slow:" },
        { type: "list", items: ["Clear browser cache", "Disable browser extensions", "Update network drivers", "Run malware scan"] },
        { type: "text", text: "Phone fast but computer slow? Driver or malware issue - we'll check." }
      ],
      link: "/help/wifi-internet",
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Slow Computer Issues
        </div>

        <div className="text-center mb-12">
          <Monitor size={64} style={{ color: "#fbbf24", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Slow Computer Issues
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Speed up your PC or Mac - we know all the tricks
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
                    background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                    color: "#000",
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
            Computer Still Crawling?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            We'll identify the bottleneck and fix it - remotely or in person.
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
