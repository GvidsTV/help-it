import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Zap, Send, Loader2, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xdaaogwb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Target Acquired. The HIT Man has received your briefing.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      alert("Comms failure. Use the direct text option.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(217,119,6,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent tracking-tighter italic">
            CONTACT THE HIT MAN
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium">
            Direct access to expert support. <span className="text-amber-500">No gatekeepers, no delays.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Text Card */}
          <a href="sms:4075041287?body=HIT" className="group relative bg-zinc-900/40 backdrop-blur-md border-2 border-amber-500/30 rounded-3xl p-10 transition-all duration-500 hover:border-amber-500 hover:bg-amber-500/5 hover:-translate-y-1">
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare size={40} className="text-amber-500" />
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-widest">
                  <Zap size={14} fill="currentColor" /> Fastest Response
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white italic">Text The Line</h2>
              <p className="text-5xl font-black mb-6 text-amber-500 tracking-tighter">407-504-1287</p>
              <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-amber-400 transition-colors">
                <Clock size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">Available Now</span>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a href="mailto:support@helpitapp.com" className="group relative bg-zinc-900/40 backdrop-blur-md border-2 border-zinc-800 rounded-3xl p-10 transition-all duration-500 hover:border-orange-600/50 hover:bg-orange-600/5 hover:-translate-y-1">
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-zinc-800 border border-zinc-700 group-hover:scale-110 transition-transform duration-500">
                <Mail size={40} className="text-zinc-400 group-hover:text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white italic">Email Briefing</h2>
              <p className="text-2xl font-bold mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">support@helpitapp.com</p>
              <div className="flex flex-wrap justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                <span className="px-2 py-1 border border-zinc-800 rounded">Technical Briefs</span>
                <span className="px-2 py-1 border border-zinc-800 rounded">Log Analysis</span>
              </div>
            </div>
          </a>
        </div>

        {/* Secure Submission Form */}
        <div className="max-w-5xl mx-auto mb-20 bg-zinc-900/20 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-amber-600 to-orange-700 p-10 text-black">
              <h3 className="text-3xl font-black mb-4 italic tracking-tighter">SECURE BRIEFING</h3>
              <p className="font-medium mb-8 opacity-90">Send a full mission report. The HIT Man will review and respond with a plan of action.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center"><ShieldAlert size={20}/></div>
                  <p className="font-bold uppercase text-sm tracking-widest">End-to-End Encrypted</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required className="bg-black/50 border border-zinc-800 p-4 rounded-xl focus:border-amber-500 outline-none text-white placeholder:text-zinc-700" placeholder="Agent Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="email" className="bg-black/50 border border-zinc-800 p-4 rounded-xl focus:border-amber-500 outline-none text-white placeholder:text-zinc-700" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <textarea required rows={4} className="w-full bg-black/50 border border-zinc-800 p-4 rounded-xl focus:border-amber-500 outline-none text-white placeholder:text-zinc-700" placeholder="Describe the mission/problem..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              <button disabled={loading} className="w-full py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-amber-500 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2">
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={20}/> Send Briefing</>}
              </button>
            </form>
          </div>
        </div>

        {/* Operational Hours */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-orange-900/20 to-amber-900/20 border-2 border-amber-600/30 rounded-3xl">
            <p className="text-2xl font-black text-amber-500 mb-2 italic">🚨 EMERGENCY SUPPORT: 24/7/365</p>
            <p className="text-zinc-400 font-medium">Critical system failures? We are always on call.</p>
          </div>
        </div>
      </div>
    </div>
  );
}