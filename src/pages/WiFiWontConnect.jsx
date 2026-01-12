import React from "react";
import { Wifi, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function WiFiWontConnect() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/wifi-internet" style={{ color: "#d97706" }}>WiFi & Internet</a> / Won't Connect
        </div>

        <div className="text-center mb-12">
          <Wifi size={56} style={{ color: "#3b82f6", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            WiFi Won't Connect?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Get back online in minutes
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
              The 30-Second Fix
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="font-bold mb-3">This fixes 80% of WiFi problems:</p>
            <ol className="ml-4 space-y-3">
              <li className="font-bold">1. Unplug your router from power</li>
              <li className="font-bold">2. Wait 30 seconds</li>
              <li className="font-bold">3. Plug it back in</li>
              <li className="font-bold">4. Wait 2 minutes for it to fully restart</li>
              <li className="font-bold">5. Try connecting again</li>
            </ol>
            <p className="mt-4">Still not working? Keep reading...</p>
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
            Step-by-Step Troubleshooting
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", fontWeight: "bold" }}
              >
                1
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check If It's Just Your Device</p>
                <ul className="ml-4 space-y-1">
                  <li>• Can other devices connect to WiFi?</li>
                  <li>• Can your phone connect? Laptop?</li>
                  <li>• If others work, problem is your device</li>
                  <li>• If nothing works, problem is router/internet</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", fontWeight: "bold" }}
              >
                2
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Forget and Reconnect to Network</p>
                <p className="mb-2"><span className="font-bold">Windows:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Settings → Network → WiFi → Manage known networks</li>
                  <li>• Click your network → Forget</li>
                  <li>• Reconnect and enter password again</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Mac:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• System Preferences → Network → WiFi</li>
                  <li>• Advanced → Remove network</li>
                  <li>• Reconnect with password</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Phone:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• Settings → WiFi → Tap network → Forget</li>
                  <li>• Select network again and enter password</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", fontWeight: "bold" }}
              >
                3
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Move Closer to Router</p>
                <ul className="ml-4 space-y-1">
                  <li>• WiFi has limited range</li>
                  <li>• Walls and floors block signal</li>
                  <li>• Try standing next to router</li>
                  <li>• If it works there, it's a range/signal issue</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", fontWeight: "bold" }}
              >
                4
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check WiFi Password</p>
                <ul className="ml-4 space-y-1">
                  <li>• Wrong password is #1 cause</li>
                  <li>• Check for typos (1 vs l, 0 vs O)</li>
                  <li>• Passwords are case-sensitive</li>
                  <li>• Look at router label for default password</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", fontWeight: "bold" }}
              >
                5
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Update Network Drivers (Windows)</p>
                <ul className="ml-4 space-y-1">
                  <li>• Right-click Start → Device Manager</li>
                  <li>• Expand "Network adapters"</li>
                  <li>• Right-click WiFi adapter → Update driver</li>
                  <li>• Restart computer</li>
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
                <p className="font-bold mb-1">Test Connection</p>
                <p>Try loading a website or sending a text</p>
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
            Common WiFi Problems & Causes
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <ul className="space-y-2 ml-4">
              <li>• <span className="font-bold">"Wrong password"</span> - Typo or changed password</li>
              <li>• <span className="font-bold">"Can't connect to this network"</span> - Router issue or driver problem</li>
              <li>• <span className="font-bold">"Limited connectivity"</span> - DHCP/IP address issue</li>
              <li>• <span className="font-bold">"No internet, secured"</span> - Connected but no internet service</li>
              <li>• <span className="font-bold">Can see network but can't connect</span> - Signal too weak or interference</li>
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
            Still Can't Connect?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll diagnose your network issue and get you back online.
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
