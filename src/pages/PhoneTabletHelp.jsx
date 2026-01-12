import React from "react";
import { Smartphone, ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function PhoneTabletHelp() {
  const sections = [
    {
      id: "storage-full",
      title: "Storage Full / Can't Download Apps",
      content: [
        { type: "header", text: "Why This Happens:" },
        { type: "list", items: ["Photos and videos taking up space", "Apps storing too much data", "Downloaded files never deleted", "System cache buildup"] },
        { type: "header", text: "Quick Fixes:" },
        { type: "numbered", items: ["Delete old photos/videos (back up first!)", "Clear app cache in Settings", "Uninstall apps you don't use", "Move files to cloud storage"] },
        { type: "text", text: "Need to free up space fast? We'll walk you through it." }
      ],
      link: "/help/iphone-storage-full",
    },
    {
      id: "slow-phone",
      title: "Phone Running Slow",
      content: [
        { type: "header", text: "Common Causes:" },
        { type: "list", items: ["Too many apps running", "Storage almost full", "Old software version", "Apps need updates"] },
        { type: "header", text: "Speed It Up:" },
        { type: "numbered", items: ["Close apps running in background", "Update to latest iOS/Android", "Free up storage space", "Restart your phone regularly"] },
        { type: "text", text: "Still sluggish? Let us diagnose it." }
      ],
      link: "/contact",
    },
    {
      id: "cant-charge",
      title: "Phone Won't Charge",
      content: [
        { type: "header", text: "Check These First:" },
        { type: "numbered", items: ["Try a different cable", "Try a different power outlet", "Clean charging port (gently!)", "Restart your phone"] },
        { type: "header", text: "Warning Signs:" },
        { type: "list", items: ["Charging port damaged", "Cable frayed or bent", "Battery swelling (stop using immediately!)", "Gets extremely hot when charging"] },
        { type: "text", text: "Hardware issue? We can help you figure it out." }
      ],
      link: "/help/phone-wont-charge",
    },
    {
      id: "backup-issues",
      title: "Backup & Restore Issues",
      content: [
        { type: "header", text: "iPhone (iCloud):" },
        { type: "numbered", items: ["Go to Settings > [Your Name] > iCloud", "Turn on iCloud Backup", "Connect to WiFi and plug in to charge", "Backup will happen automatically"] },
        { type: "header", text: "Android (Google):" },
        { type: "numbered", items: ["Go to Settings > System > Backup", "Turn on Back up to Google Drive", "Connect to WiFi", "Automatic backup enabled"] },
        { type: "text", text: "Need help restoring from backup? We'll guide you." }
      ],
      link: "/help/backup-files",
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Phone & Tablet Help
        </div>

        <div className="text-center mb-12">
          <Smartphone size={64} style={{ color: "#3b82f6", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Phone & Tablet Help
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            iPhone, Android, iPad - we fix them all
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
                    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
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
            Phone Still Acting Up?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            Let us take a look. We fix phones remotely every day.
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
