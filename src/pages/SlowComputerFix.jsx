import React from "react";
import { Monitor, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function SlowComputerFix() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/slow-computer" style={{ color: "#d97706" }}>Slow Computer</a> / Quick Fixes
        </div>

        <div className="text-center mb-12">
          <Monitor size={56} style={{ color: "#fbbf24", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Computer Running Slow?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Speed it up with these simple fixes
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
              The 5-Minute Speed Boost
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="font-bold mb-3">Do these NOW for instant improvement:</p>
            <ol className="ml-4 space-y-3">
              <li className="font-bold">1. Restart your computer (fixes 50% of slowness)</li>
              <li className="font-bold">2. Close programs you're not using</li>
              <li className="font-bold">3. Check if updates are running (Windows Update slows things down)</li>
              <li className="font-bold">4. Free up disk space - need at least 15% free</li>
            </ol>
            <p className="mt-4">Still slow after restart? Keep reading...</p>
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
            Deep Fixes for Slow Computers
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
                <p className="font-bold mb-1">Disable Startup Programs</p>
                <p className="mb-2">Too many programs starting automatically:</p>
                <p className="mb-2"><span className="font-bold">Windows:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Ctrl + Shift + Esc (Task Manager)</li>
                  <li>• Click "Startup" tab</li>
                  <li>• Disable programs you don't need at startup</li>
                  <li>• Keep: Antivirus, Cloud storage</li>
                  <li>• Disable: iTunes, Adobe, Spotify, etc.</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Mac:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• System Preferences → Users & Groups</li>
                  <li>• Login Items tab</li>
                  <li>• Remove unnecessary programs</li>
                </ul>
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
                <p className="font-bold mb-1">Free Up Disk Space</p>
                <p className="mb-2">Computer slows when drive is almost full:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Delete old downloads</li>
                  <li>• Empty Recycle Bin/Trash</li>
                  <li>• Uninstall programs you don't use</li>
                  <li>• Move photos/videos to external drive</li>
                  <li>• Run Disk Cleanup (Windows) or Optimize Storage (Mac)</li>
                </ul>
                <p className="mt-2 font-bold">Need: At least 15-20% free space</p>
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
                <p className="font-bold mb-1">Run Virus/Malware Scan</p>
                <ul className="ml-4 space-y-1">
                  <li>• Malware can slow computer dramatically</li>
                  <li>• Run full scan with your antivirus</li>
                  <li>• Windows: Use built-in Windows Security</li>
                  <li>• Mac: Use Malwarebytes (free version)</li>
                  <li>• Remove any threats found</li>
                </ul>
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
                <p className="font-bold mb-1">Update Everything</p>
                <ul className="ml-4 space-y-1">
                  <li>• Install Windows/Mac updates</li>
                  <li>• Update drivers (especially graphics)</li>
                  <li>• Update browsers and programs</li>
                  <li>• Restart after updates</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000", fontWeight: "bold" }}
              >
                5
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Add More RAM (If Possible)</p>
                <ul className="ml-4 space-y-1">
                  <li>• Check if you have under 8GB RAM</li>
                  <li>• Upgrading to 16GB makes HUGE difference</li>
                  <li>• We can help you buy and install</li>
                  <li>• Usually costs $50-100</li>
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
                <p className="font-bold mb-1">Test Speed</p>
                <p>Computer should feel much faster now!</p>
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
            Why Computers Slow Down
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <ul className="space-y-2 ml-4">
              <li>• <span className="font-bold">Too many startup programs</span> - slows boot time</li>
              <li>• <span className="font-bold">Disk almost full</span> - needs 15%+ free space</li>
              <li>• <span className="font-bold">Not enough RAM</span> - 8GB minimum nowadays</li>
              <li>• <span className="font-bold">Malware/viruses</span> - eating up resources</li>
              <li>• <span className="font-bold">Old hard drive</span> - mechanical drives wear out</li>
              <li>• <span className="font-bold">Dust buildup</span> - causes overheating</li>
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
            Still Running Slow?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll diagnose what's slowing it down and fix it - often remotely in minutes.
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
              Get Expert Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
