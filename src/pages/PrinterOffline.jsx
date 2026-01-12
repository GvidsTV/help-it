import React from "react";
import { Printer, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function PrinterOffline() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/printer-help" style={{ color: "#d97706" }}>Printer Issues</a> / Printer Offline
        </div>

        <div className="text-center mb-12">
          <Printer size={56} style={{ color: "#8b5cf6", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Printer Showing Offline?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Let's get it back online in minutes
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
              Quick Fixes - Try These First
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <ol className="ml-4 space-y-3">
              <li className="font-bold">1. Turn printer OFF, wait 30 seconds, turn back ON</li>
              <li className="font-bold">2. Make sure printer is connected to WiFi (check printer screen)</li>
              <li className="font-bold">3. Restart your computer</li>
              <li className="font-bold">4. Try printing a test page directly from the printer</li>
            </ol>
            <p className="mt-4">Still showing offline? Keep reading...</p>
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
            Step-by-Step Fix
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", color: "#fff", fontWeight: "bold" }}
              >
                1
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check Printer Status</p>
                <p className="mb-2">On the printer itself:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Is it powered on?</li>
                  <li>• Any error lights blinking?</li>
                  <li>• Does the screen show "Ready"?</li>
                  <li>• Is it connected to WiFi? (check WiFi icon)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", color: "#fff", fontWeight: "bold" }}
              >
                2
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check "Use Printer Offline" Setting (Windows)</p>
                <p className="mb-2">Sometimes this gets turned on by accident:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Go to Settings → Devices → Printers</li>
                  <li>• Right-click your printer</li>
                  <li>• Make sure "Use Printer Offline" is NOT checked</li>
                  <li>• If it is checked, uncheck it!</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", color: "#fff", fontWeight: "bold" }}
              >
                3
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Remove and Re-Add Printer</p>
                <p className="mb-2">This fixes most connection issues:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Go to Settings → Devices → Printers</li>
                  <li>• Remove the offline printer</li>
                  <li>• Click "Add a printer"</li>
                  <li>• Wait for it to find your printer</li>
                  <li>• Add it back</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", color: "#fff", fontWeight: "bold" }}
              >
                4
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Update Printer Driver</p>
                <p className="mb-2">Old drivers cause offline issues:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Go to printer manufacturer's website</li>
                  <li>• Search for your printer model</li>
                  <li>• Download latest driver</li>
                  <li>• Install and restart computer</li>
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
                <p className="font-bold mb-1">Test Print</p>
                <p>Try printing something - should work now!</p>
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
            Why Printers Go Offline
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <ul className="space-y-2 ml-4">
              <li>• <span className="font-bold">WiFi connection dropped</span> - printer fell asleep or lost connection</li>
              <li>• <span className="font-bold">IP address changed</span> - router assigned new address to printer</li>
              <li>• <span className="font-bold">Driver issues</span> - outdated or corrupted printer driver</li>
              <li>• <span className="font-bold">Print spooler stuck</span> - Windows print service needs restart</li>
              <li>• <span className="font-bold">"Use Printer Offline" enabled</span> - accidental setting change</li>
            </ul>
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
            Still Showing Offline?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll diagnose the connection issue and get your printer working.
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
