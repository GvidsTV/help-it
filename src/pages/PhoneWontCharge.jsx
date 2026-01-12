import React from "react";
import { Battery, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function PhoneWontCharge() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/phone-tablet" style={{ color: "#d97706" }}>Phone & Tablet</a> / Won't Charge
        </div>

        <div className="text-center mb-12">
          <Battery size={56} style={{ color: "#ef4444", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Phone Won't Charge?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Let's figure out if it's the cable, port, or battery
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
              <li className="font-bold">1. Try a different charging cable (borrow one if needed)</li>
              <li className="font-bold">2. Try a different power outlet or USB port</li>
              <li className="font-bold">3. Clean charging port gently with toothpick (power OFF first!)</li>
              <li className="font-bold">4. Restart your phone</li>
            </ol>
            <p className="mt-4">Still not charging? Let's diagnose the problem...</p>
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
            Diagnosis Steps
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
                <p className="font-bold mb-1">Test the Cable</p>
                <ul className="ml-4 space-y-1">
                  <li>• Try charging different device with same cable</li>
                  <li>• Look for frayed wires or bent connector</li>
                  <li>• Wiggle cable while plugged in - does it connect/disconnect?</li>
                  <li>• Try another cable if available</li>
                </ul>
                <p className="mt-2"><span className="font-bold">Cable issue if:</span> Works with different cable</p>
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
                <p className="font-bold mb-1">Check Charging Port</p>
                <p className="mb-2">Look inside charging port with flashlight:</p>
                <ul className="ml-4 space-y-1">
                  <li>• See any lint, dust, or debris?</li>
                  <li>• Pins look bent or damaged?</li>
                  <li>• Port looks loose or wobbly?</li>
                </ul>
                <p className="mt-2"><span className="font-bold">To clean safely:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• Turn phone completely OFF</li>
                  <li>• Use wooden toothpick (not metal!)</li>
                  <li>• Gently scrape out lint</li>
                  <li>• Compressed air can help</li>
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
                <p className="font-bold mb-1">Test Power Source</p>
                <ul className="ml-4 space-y-1">
                  <li>• Try different wall outlet</li>
                  <li>• Try USB port on computer</li>
                  <li>• Try car charger if you have one</li>
                  <li>• Use Apple/Samsung power adapter (not cheap knockoff)</li>
                </ul>
                <p className="mt-2"><span className="font-bold">Charger issue if:</span> Works with different power source</p>
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
                <p className="font-bold mb-1">Check Battery Health</p>
                <p className="mb-2"><span className="font-bold">iPhone:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Settings → Battery → Battery Health</li>
                  <li>• If under 80%, battery might be dying</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Android:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• Settings → Battery → Battery Health (varies by brand)</li>
                  <li>• Or use app like AccuBattery</li>
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
                <p className="font-bold mb-1">Found the Problem?</p>
                <p>Replace cable/charger, clean port, or consider battery replacement</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: "rgba(239, 68, 68, 0.1)",
            border: "2px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <h3 className="font-bold text-lg mb-3" style={{ color: "#ef4444" }}>
            ⚠️ STOP if You See These
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <ul className="space-y-2 ml-4">
              <li className="font-bold">• Battery swollen/bulging - STOP USING IMMEDIATELY</li>
              <li className="font-bold">• Phone gets extremely hot while charging</li>
              <li className="font-bold">• Burning smell</li>
              <li className="font-bold">• Sparks or smoke</li>
            </ul>
            <p className="mt-4 font-bold" style={{ color: "#ef4444" }}>These are fire/explosion risks - turn off phone and contact us NOW.</p>
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
            Still Not Charging?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll diagnose if you need port repair, battery replacement, or new charger.
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
