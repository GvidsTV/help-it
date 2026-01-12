import React from "react";
import { Download, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function CantDownloadApps() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/phone-tablet" style={{ color: "#d97706" }}>Phone & Tablet</a> / Can't Download Apps
        </div>

        <div className="text-center mb-12">
          <Download size={56} style={{ color: "#3b82f6", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Can't Download Apps?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            iPhone or Android - we'll get you downloading again
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
              Quick Fixes First
            </h2>
          </div>
          <div style={{ fontSize: "16px", color: "#f5f5f4", lineHeight: "1.7" }}>
            <ol className="ml-4 space-y-3">
              <li className="font-bold">1. Check storage space (most common cause!)</li>
              <li className="font-bold">2. Make sure connected to WiFi (not just cellular)</li>
              <li className="font-bold">3. Restart your phone</li>
              <li className="font-bold">4. Update iOS/Android to latest version</li>
            </ol>
            <p className="mt-4">Still can't download? Keep reading...</p>
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
            Solutions by Problem Type
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
                <p className="font-bold mb-1">"Not Enough Storage"</p>
                <p className="mb-2">You need to free up space:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Delete old photos/videos (back up first!)</li>
                  <li>• Delete apps you don't use</li>
                  <li>• Clear Safari/Chrome cache</li>
                  <li>• Offload unused apps (Settings → General → iPhone Storage)</li>
                  <li>• Empty "Recently Deleted" in Photos</li>
                </ul>
                <p className="mt-2"><span className="font-bold">Need:</span> At least 1-2GB free for most apps</p>
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
                <p className="font-bold mb-1">"Cannot Connect to App Store"</p>
                <p className="mb-2"><span className="font-bold">iPhone:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Make sure connected to WiFi</li>
                  <li>• Sign out of App Store and back in</li>
                  <li>• Settings → [Your Name] → Sign Out</li>
                  <li>• Wait 30 seconds, sign back in</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Android:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• Clear Play Store cache</li>
                  <li>• Settings → Apps → Google Play Store → Clear Cache</li>
                  <li>• Restart phone</li>
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
                <p className="font-bold mb-1">App Stuck on "Waiting..." or "Loading..."</p>
                <ul className="ml-4 space-y-1">
                  <li>• Tap and hold the app icon</li>
                  <li>• Tap "Pause Download"</li>
                  <li>• Wait 10 seconds</li>
                  <li>• Tap again to resume</li>
                  <li>• If still stuck, delete and redownload</li>
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
                <p className="font-bold mb-1">"Payment Method" or "Billing Problem"</p>
                <p className="mb-2">Even for free apps, need valid payment:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Update credit card expiration date</li>
                  <li>• Check if card was declined</li>
                  <li>• Verify billing address matches card</li>
                  <li>• Can use "None" for payment if downloading free apps only</li>
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
                <p className="font-bold mb-1">"This App is Not Available in Your Region"</p>
                <ul className="ml-4 space-y-1">
                  <li>• Some apps restricted by country</li>
                  <li>• Check if app available in your country</li>
                  <li>• Changing region settings often causes problems</li>
                  <li>• Look for alternative similar apps</li>
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
                <p className="font-bold mb-1">Download Working?</p>
                <p>Great! Make sure to keep some free space for future downloads</p>
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
            Parental Controls / Restrictions
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="mb-3">If restrictions are enabled, you might not be able to download:</p>
            <p className="mb-2"><span className="font-bold">iPhone:</span></p>
            <ul className="space-y-1 ml-4 mb-3">
              <li>• Settings → Screen Time → Content & Privacy</li>
              <li>• Check if "Installing Apps" is allowed</li>
            </ul>
            <p className="mb-2"><span className="font-bold">Android:</span></p>
            <ul className="space-y-1 ml-4">
              <li>• Settings → Digital Wellbeing → Parental Controls</li>
              <li>• Check Play Store restrictions</li>
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
            Still Can't Download?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll troubleshoot your phone and get downloads working again.
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
