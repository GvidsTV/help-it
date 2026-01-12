import React from "react";
import { Video, AlertCircle, CheckCircle, Phone, MessageSquare } from "lucide-react";

export default function ZoomCameraNotWorking() {
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
          <a href="/help" style={{ color: "#d97706" }}>Help Center</a> / <a href="/help/video-calls" style={{ color: "#d97706" }}>Video Calls</a> / Camera Not Working
        </div>

        <div className="text-center mb-12">
          <Video size={56} style={{ color: "#10b981", margin: "0 auto 16px" }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            Camera Not Working in Zoom?
          </h1>
          <p className="text-lg" style={{ color: "#d97706" }}>
            Works for Teams, Meet, and all video apps too
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
              <li className="font-bold">1. Check if camera button is turned ON in Zoom (not crossed out)</li>
              <li className="font-bold">2. Close ALL other apps that might use camera</li>
              <li className="font-bold">3. Restart Zoom completely</li>
              <li className="font-bold">4. Test camera in another app (Photo Booth/Camera app)</li>
            </ol>
            <p className="mt-4">Camera works elsewhere but not Zoom? Permission issue - keep reading...</p>
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
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff", fontWeight: "bold" }}
              >
                1
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Check Camera Permissions</p>
                <p className="mb-2"><span className="font-bold">Windows:</span></p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• Settings → Privacy → Camera</li>
                  <li>• Turn ON "Allow apps to access camera"</li>
                  <li>• Make sure Zoom is allowed</li>
                </ul>
                <p className="mb-2"><span className="font-bold">Mac:</span></p>
                <ul className="ml-4 space-y-1">
                  <li>• System Preferences → Security & Privacy → Camera</li>
                  <li>• Check the box next to Zoom</li>
                  <li>• Restart Zoom after enabling</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff", fontWeight: "bold" }}
              >
                2
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Select Correct Camera in Zoom</p>
                <ul className="ml-4 space-y-1">
                  <li>• In Zoom, click Settings (gear icon)</li>
                  <li>• Go to Video tab</li>
                  <li>• Check dropdown for "Camera"</li>
                  <li>• Try selecting different camera if multiple listed</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff", fontWeight: "bold" }}
              >
                3
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Close Other Apps Using Camera</p>
                <p className="mb-2">Only one app can use camera at a time:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Close Skype, Teams, FaceTime</li>
                  <li>• Close browser tabs with video calls</li>
                  <li>• Check if Camera/Photo Booth app is running</li>
                  <li>• Restart computer if unsure</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff", fontWeight: "bold" }}
              >
                4
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Update Zoom</p>
                <ul className="ml-4 space-y-1">
                  <li>• Click your profile picture in Zoom</li>
                  <li>• Click "Check for Updates"</li>
                  <li>• Install any available updates</li>
                  <li>• Restart Zoom</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#fff", fontWeight: "bold" }}
              >
                5
              </div>
              <div style={{ color: "#f5f5f4" }}>
                <p className="font-bold mb-1">Reinstall Camera Driver (Windows)</p>
                <ul className="ml-4 space-y-1">
                  <li>• Right-click Start → Device Manager</li>
                  <li>• Expand "Cameras" or "Imaging devices"</li>
                  <li>• Right-click your camera → Uninstall</li>
                  <li>• Restart computer (driver reinstalls automatically)</li>
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
                <p className="font-bold mb-1">Test It</p>
                <p>Join a test meeting or check video preview in Zoom settings</p>
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
            ⚠️ Camera Still Not Working?
          </h3>
          <div style={{ color: "#f5f5f4", lineHeight: "1.7" }}>
            <p className="mb-3">Possible hardware issues:</p>
            <ul className="space-y-2 ml-4">
              <li>• Camera disconnected (if external webcam)</li>
              <li>• Camera covered/blocked</li>
              <li>• Camera hardware failure</li>
              <li>• USB port issue (try different port)</li>
            </ul>
            <p className="mt-4 font-bold">We can diagnose if it's software or hardware - contact us.</p>
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
            Camera Issues Before Important Meeting?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#f5f5f4" }}>
            We'll fix it FAST - often within minutes via remote support.
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
              Get Urgent Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
