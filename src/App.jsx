import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CORE COMPONENTS
import SiteHeader from "./components/SiteHeader";

// CORE PAGES
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import HelpHub from "./pages/HelpHub";
import SetupHubPage from "./pages/SetupHubPage";
import RemoteSupportGuide from "./pages/RemoteSupportGuide";
import WelcomePage from "./pages/WelcomePage"; 

// PILLAR PAGES
import EmailLoginHelp from "./pages/EmailLoginHelp";
import PhoneTabletHelp from "./pages/PhoneTabletHelp";
import WiFiInternetHelp from "./pages/WiFiInternetHelp";
import SlowComputerHelp from "./pages/SlowComputerHelp";
import VideoCallsHelp from "./pages/VideoCallsHelp";
import PrinterHelp from "./pages/PrinterHelp";
import SecurityBasicsHelp from "./pages/SecurityBasicsHelp";
import BackupFilesHelp from "./pages/BackupFilesHelp";

// TROUBLESHOOTING PAGES
import CantLoginGmail from "./pages/CantLoginGmail";
import IPhoneStorageFull from "./pages/iPhoneStorageFull";
import ForgotPassword from "./pages/ForgotPassword";
import PrinterOffline from "./pages/PrinterOffline";
import ZoomCameraNotWorking from "./pages/ZoomCameraNotWorking";
import EmailHacked from "./pages/EmailHacked";
import PhoneWontCharge from "./pages/PhoneWontCharge";
import WiFiWontConnect from "./pages/WiFiWontConnect";
import SlowComputerFix from "./pages/SlowComputerFix";
import CantDownloadApps from "./pages/CantDownloadApps";

export default function App() {
  useEffect(() => {
    console.log("THE HIT MAN: Systems Online.");
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-amber-600/30 selection:text-amber-500">
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          {/* Main Entry Points */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/setup" element={<SetupHubPage />} />
          <Route path="/help" element={<HelpHub />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help/remote-support" element={<RemoteSupportGuide />} />
          
          {/* Success Redirect from PayPal */}
          <Route path="/welcome" element={<WelcomePage />} />
          
          {/* Help Pillar Routes */}
          <Route path="/help/email-login" element={<EmailLoginHelp />} />
          <Route path="/help/phone-tablet" element={<PhoneTabletHelp />} />
          <Route path="/help/wifi-internet" element={<WiFiInternetHelp />} />
          <Route path="/help/slow-computer" element={<SlowComputerHelp />} />
          <Route path="/help/video-calls" element={<VideoCallsHelp />} />
          <Route path="/help/printer-help" element={<PrinterHelp />} />
          <Route path="/help/security-basics" element={<SecurityBasicsHelp />} />
          <Route path="/help/backup-files" element={<BackupFilesHelp />} />
          
          {/* Troubleshooting Routes */}
          <Route path="/help/cant-log-into-gmail" element={<CantLoginGmail />} />
          <Route path="/help/iphone-storage-full" element={<IPhoneStorageFull />} />
          <Route path="/help/forgot-password" element={<ForgotPassword />} />
          <Route path="/help/printer-offline" element={<PrinterOffline />} />
          <Route path="/help/zoom-camera-not-working" element={<ZoomCameraNotWorking />} />
          <Route path="/help/email-hacked" element={<EmailHacked />} />
          <Route path="/help/phone-wont-charge" element={<PhoneWontCharge />} />
          <Route path="/help/wifi-wont-connect" element={<WiFiWontConnect />} />
          <Route path="/help/slow-computer-fix" element={<SlowComputerFix />} />
          <Route path="/help/cant-download-apps" element={<CantDownloadApps />} />

          {/* Catch-all: Redirects home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}