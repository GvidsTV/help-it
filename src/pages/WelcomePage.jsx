import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * PREVIEW MODE PLACEHOLDERS
 * The following components allow the preview to run within this environment.
 * For your local project, these are replaced by your actual file imports.
 */

const SiteHeader = () => (
  <header className="bg-zinc-950 border-b border-zinc-800 p-4 flex items-center justify-between sticky top-0 z-50">
    <Link to="/" className="text-amber-600 font-black text-xl tracking-tighter">THE HIT MAN</Link>
    <nav className="flex gap-6">
      <Link to="/pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</Link>
      <Link to="/help" className="text-zinc-400 hover:text-white transition-colors">Help Hub</Link>
    </nav>
  </header>
);

const HomePage = () => (
  <div className="bg-zinc-900 min-h-screen p-8 text-white">
    <h1 className="text-4xl font-bold text-amber-600 mb-4">Home Base</h1>
    <p className="text-zinc-400 text-lg">Technical solutions for the modern world. Your consigliere is standby.</p>
  </div>
);

const WelcomePage = () => (
  <div className="bg-zinc-950 min-h-screen flex items-center justify-center p-6 text-center">
    <div className="max-w-xl border border-amber-600/30 bg-zinc-900 p-12 rounded-2xl shadow-2xl">
      <div className="w-20 h-20 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-3xl font-black text-white mb-4 tracking-tight">CONTRACT ACTIVATED</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Welcome to the inner circle. Our specialist team has been notified. 
        You now have priority access to all technical support channels.
      </p>
      <Link to="/" className="inline-block bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
        Go to Dashboard
      </Link>
    </div>
  </div>
);

const Placeholder = ({ name }) => (
  <div className="bg-zinc-900 min-h-screen p-8 text-white">
    <h1 className="text-3xl font-bold text-amber-600 mb-4">{name}</h1>
    <p className="text-zinc-500 italic">This sector is currently being updated by technical operations.</p>
  </div>
);

/**
 * MAIN APP COMPONENT
 * This structure is identical to your production App.jsx, 
 * but uses the internal components above for the preview environment.
 */
export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      
      <Routes>
        {/* Core routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Placeholder name="Pricing & Contracts" />} />
        <Route path="/setup" element={<Placeholder name="Setup Hub" />} />
        <Route path="/help" element={<Placeholder name="Help Hub" />} />
        <Route path="/contact" element={<Placeholder name="Contact" />} />
        <Route path="/help/remote-support" element={<Placeholder name="Remote Support Guide" />} />
        
        {/* Post-Payment Redirection Route */}
        <Route path="/welcome" element={<WelcomePage />} />
        
        {/* Pillar pages */}
        <Route path="/help/email-login" element={<Placeholder name="Email Help" />} />
        <Route path="/help/phone-tablet" element={<Placeholder name="Mobile Help" />} />
        <Route path="/help/wifi-internet" element={<Placeholder name="Connectivity Help" />} />
        <Route path="/help/slow-computer" element={<Placeholder name="Performance Help" />} />
        <Route path="/help/video-calls" element={<Placeholder name="Communication Help" />} />
        <Route path="/help/printer-help" element={<Placeholder name="Hardware Help" />} />
        <Route path="/help/security-basics" element={<Placeholder name="Security Operations" />} />
        <Route path="/help/backup-files" element={<Placeholder name="Data Integrity" />} />
        
        {/* High-intent pages */}
        <Route path="/help/cant-log-into-gmail" element={<Placeholder name="Gmail Recovery" />} />
        <Route path="/help/iphone-storage-full" element={<Placeholder name="iPhone Storage" />} />
        <Route path="/help/forgot-password" element={<Placeholder name="Password Recovery" />} />
        <Route path="/help/printer-offline" element={<Placeholder name="Printer Connectivity" />} />
        <Route path="/help/zoom-camera-not-working" element={<Placeholder name="AV Troubleshooting" />} />
        <Route path="/help/email-hacked" element={<Placeholder name="Breach Containment" />} />
        <Route path="/help/phone-wont-charge" element={<Placeholder name="Power Issues" />} />
        <Route path="/help/wifi-wont-connect" element={<Placeholder name="Network Protocols" />} />
        <Route path="/help/slow-computer-fix" element={<Placeholder name="System Optimization" />} />
        <Route path="/help/cant-download-apps" element={<Placeholder name="Software Deployment" />} />

        {/* Catch-all route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}