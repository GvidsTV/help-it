import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Zap } from 'lucide-react';

/**
 * THE HIT MAN - SUCCESS PROTOCOL (REFINED VERSION)
 * Professional tech help with a sophisticated, high-priority edge.
 * Paste this into: src/pages/WelcomePage.jsx
 */
const WelcomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure the user starts at the top of the page
    window.scrollTo(0, 0);
  }, []);

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
            SYSTEM <span className="text-amber-500">ACTIVATED</span>
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed">
            Payment confirmed. Your technical priority status is now live.
          </p>
        </div>

        {/* Info Card */}
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
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Access Verification</h3>
                <p className="text-zinc-400 leading-relaxed mt-1">
                  A receipt and your onboarding details have been sent to your registered email. This serves as your primary credential for all support sessions.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/20">2</div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Priority Lane</h3>
                <p className="text-zinc-400 leading-relaxed mt-1">
                  You now have top-tier clearance. Return to the Help Hub to initiate your technical request with our fastest response times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <div className="mt-10">
          <Link 
            to="/help" 
            className="flex items-center justify-between p-6 bg-amber-600 border border-amber-500 rounded-2xl hover:bg-amber-500 transition-all group shadow-lg shadow-amber-600/20"
          >
            <div className="flex items-center gap-4 text-black">
              <Zap size={24} fill="currentColor" />
              <span className="font-black uppercase tracking-widest text-lg italic">Access Help Hub</span>
            </div>
            <ArrowRight size={24} className="text-black group-hover:translate-x-2 transition-all" />
          </Link>
        </div>

        {/* Support Footer */}
        <p className="text-center mt-12 text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">
          Secure Session • THE HIT MAN © 2026
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;