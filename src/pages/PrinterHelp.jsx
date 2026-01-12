import React from "react";
import { Printer, ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function PrinterHelp() {
  const sections = [
    {
      id: "wont-print",
      title: "Printer Won't Print",
      content: [
        { type: "header", text: "Check These First:" },
        { type: "numbered", items: ["Is printer turned on?", "Is it connected to WiFi/USB?", "Is there paper in the tray?", "Is there ink/toner?"] },
        { type: "header", text: "Common Fixes:" },
        { type: "list", items: ["Restart printer and computer", "Check printer queue for stuck jobs", "Set as default printer", "Update printer driver"] },
        { type: "text", text: "Everything looks fine but still won't print? Driver issue - we'll fix it." }
      ],
      link: "/help/printer-offline",
    },
    {
      id: "offline-status",
      title: "Printer Shows Offline",
      content: [
        { type: "header", text: "Why This Happens:" },
        { type: "list", items: ["WiFi connection dropped", "Computer can't find printer", "Printer in sleep mode", "Wrong printer selected"] },
        { type: "header", text: "Get It Back Online:" },
        { type: "numbered", items: ["Turn printer off, wait 30 seconds, turn back on", "Check WiFi connection on printer", "Remove and re-add printer on computer", "Make sure 'Use Printer Offline' is unchecked"] },
        { type: "text", text: "Shows offline but printer is on? Network config issue - contact us." }
      ],
      link: "/help/printer-offline",
    },
    {
      id: "print-quality",
      title: "Print Quality is Poor",
      content: [
        { type: "header", text: "Streaks, Lines, or Faded Prints:" },
        { type: "numbered", items: ["Run printer head cleaning utility", "Check ink/toner levels", "Use print quality settings (not draft mode)", "Replace old cartridges"] },
        { type: "header", text: "Colors Wrong:" },
        { type: "list", items: ["Check color ink levels", "Run color calibration", "Clean print heads", "Update printer settings"] },
        { type: "text", text: "Quality still bad after cleaning? Might need new cartridges or service." }
      ],
      link: "/contact",
    },
    {
      id: "paper-jams",
      title: "Paper Jams",
      content: [
        { type: "header", text: "Clear the Jam:" },
        { type: "numbered", items: ["Turn off printer", "Gently remove jammed paper", "Check for torn pieces left inside", "Make sure paper tray isn't overfilled", "Turn printer back on"] },
        { type: "header", text: "Prevent Future Jams:" },
        { type: "list", items: ["Don't overfill paper tray", "Use correct paper type", "Fan paper before loading", "Keep printer clean"] },
        { type: "text", text: "Jams constantly? Printer might need cleaning or repair." }
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / Printer Help
        </div>

        <div className="text-center mb-12">
          <Printer size={64} style={{ color: "#8b5cf6", margin: "0 auto 16px" }} />
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Printer Help
          </h1>
          <p className="text-xl" style={{ color: "#d97706" }}>
            Get your printer working again - any brand, any problem
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
                    background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
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
            Printer Still Won't Cooperate?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
            Printers are our specialty. We'll get it working or tell you if it's time for a new one.
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
