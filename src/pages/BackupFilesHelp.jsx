import React from "react";
import { HardDrive, ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function BackupFilesHelp() {
  const sections = [
    {
      id: "cloud-backup",
      title: "Cloud Backup (Easiest)",
      content: [
        { type: "header", text: "Popular Cloud Services:" },
        { type: "list", items: ["iCloud (Apple devices)", "Google Drive (Android/Windows)", "OneDrive (Windows)", "Dropbox (cross-platform)"] },
        { type: "header", text: "Setup Steps:" },
        { type: "numbered", items: ["Sign up for cloud service", "Install app on computer/phone", "Select folders to sync", "Files automatically backed up"] },
        { type: "text", text: "Need help choosing and setting up? We'll find the best option for you." }
      ],
      link: "/contact",
    },
    {
      id: "external-backup",
      title: "External Hard Drive Backup",
      content: [
        { type: "header", text: "Why Use External Drive:" },
        { type: "list", items: ["Full control of your data", "No monthly fees", "Works without internet", "Great for large files"] },
        { type: "header", text: "How to Backup:" },
        { type: "numbered", items: ["Buy external hard drive (1TB+ recommended)", "Connect to computer", "Use built-in backup tool (Time Machine on Mac, File History on Windows)", "Set up automatic backups"] },
        { type: "text", text: "We can set up automatic backups so you never have to think about it." }
      ],
      link: "/contact",
    },
    {
      id: "what-to-backup",
      title: "What Files to Backup",
      content: [
        { type: "header", text: "Must Backup:" },
        { type: "list", items: ["Photos and videos", "Important documents", "Work files", "Passwords (use password manager)"] },
        { type: "header", text: "Can Skip:" },
        { type: "list", items: ["Installed programs (can reinstall)", "Operating system files", "Temporary files", "Browser cache"] },
        { type: "header", text: "321 Rule:" },
        { type: "numbered", items: ["3 copies of your data", "2 different types of storage", "1 copy offsite (cloud)"] },
        { type: "text", text: "Lost important files? We do data recovery too." }
      ],
      link: "/contact",
    },
    {
      id: "restore-backup",
      title: "Restoring From Backup",
      content: [
        { type: "header", text: "When You Need to Restore:" },
        { type: "list", items: ["New computer", "Hard drive failed", "Accidentally deleted files", "Computer got virus"] },
        { type: "header", text: "How to Restore:" },
        { type: "numbered", items: ["Connect backup drive or log into cloud", "Use restore tool (Time Machine, File History)", "Select files/dates to restore", "Wait for files to copy back"] },
        { type: "text", text: "Restore process confusing? We'll do it for you remotely." }
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Backup & Files
        </div>

        <div className="text-center mb-12">
          <HardDrive size={64} style={{ color: "#06b6d4", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Backup & Files
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Never lose your files again - we'll show you how
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
                    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
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
            Need Backup Setup Help?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            We'll set up automatic backups so your files are always safe.
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
