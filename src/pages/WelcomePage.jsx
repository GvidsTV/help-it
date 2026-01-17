import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, MessageSquare, ArrowRight, Printer } from 'lucide-react';

/**
 * THE HIT MAN - SUCCESS PROTOCOL (PRODUCTION VERSION)
 * Paste this into: src/pages/WelcomePage.jsx
 */
const WelcomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure the user starts at the top of the mission brief
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden bg-black font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#d97706_0%,_transparent_50%)]" />

      <div className={`max-w-3xl w-full transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500 mb-6 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <CheckCircle size={40} className="text-amber-500" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic mb-4">
            CONTRACT <span className="text-amber-500">ACTIVATED</span>
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed">
            Payment confirmed. The technical consigliere is now at your disposal.
          </p>
        </div>

        {/* Mission Briefing Card */}
        <div className="bg-zinc-900/50 border-2 border-amber-600/30 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield size={120} className="text-amber-500" />
          </div>

          <h2 className="text-2xl font-bold text-amber-500 mb-8 flex items-center gap-2 uppercase tracking-tight italic">
            Immediate Protocols
          </h2>

          <div className="space-y-10 relative z-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/20">1</div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Check Secure Comms</h3>
                <p className="text-zinc-400 leading-relaxed mt-1">
                  A verification receipt and your onboarding credentials have been dispatched to your email address. 
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/20">2</div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Priority Clearance</h3>
                <p className="text-zinc-400 leading-relaxed mt-1">
                  Your status is now updated in our systems. Return to the Help Hub to initiate your first request with priority routing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Link 
            to="/help" 
            className="flex items-center justify-between p-6 bg-zinc-800/40 border border-zinc-700 rounded-2xl hover:border-amber-500 hover:bg-zinc-800/60 transition-all group"
          >
            <div className="flex items-center gap-4">
              <MessageSquare className="text-amber-500" size={24} />
              <span className="font-black uppercase tracking-widest text-sm italic">Enter Help Hub</span>
            </div>
            <ArrowRight size={20} className="text-zinc-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </Link>

          <button 
            onClick={handlePrint}
            className="flex items-center justify-between p-6 bg-zinc-800/40 border border-zinc-700 rounded-2xl hover:border-amber-500 hover:bg-zinc-800/60 transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <Printer className="text-amber-500" size={24} />
              <span className="font-black uppercase tracking-widest text-sm italic">Print Briefing</span>
            </div>
            <ArrowRight size={20} className="text-zinc-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Support Footer */}
        <p className="text-center mt-12 text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">
          Classified Information • THE HIT MAN © 2026
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;