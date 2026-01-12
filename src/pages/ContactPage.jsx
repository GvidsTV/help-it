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
        alert("CONTRACT SUBMITTED. The HIT Man has received your briefing.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      alert("Comms failure. Use the direct line at 407-504-1287.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pt-24 pb-20">
      {/* Subtle Underworld Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(217,119,6,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-serif font-black mb-4 bg-gradient-to-b from-amber-400 to-amber-700 bg-clip-text text-transparent italic tracking-tighter uppercase">
            REACH THE CONSIGLIERE
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-bold uppercase tracking-[0.2em]">
            Direct Comms. <span className="text-amber-600">No Witnesses. No Paper Trail.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* SMS / Direct Line Card */}
          <a href="sms:4075041287?body=HIT" className="group bg-zinc-900/40 border-l-4 border-amber-600 p-10 transition-all hover:bg-amber-900/10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-zinc-950 border border-amber-900/30 group-hover:scale-110 transition-transform">
                <MessageSquare size={32} className="text-amber-500" />
              </div>
              <h2 className="text-sm font-black text-amber-700 uppercase tracking-widest mb-2 italic">The Direct Line</h2>
              <p className="text-4xl font-serif font-black text-zinc-100 mb-6 tracking-tighter italic group-hover:text-amber-500 transition-colors">407-504-1287</p>
              <div className="flex items-center justify-center gap-2 text-zinc-600">
                <Zap size={14} className="text-amber-600" fill="currentColor"/>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Encrypted Connection</span>
              </div>
            </div>
          </a>

          {/* Secure Email Card */}
          <a href="mailto:support@helpitapp.com" className="group bg-zinc-900/40 border-l-4 border-zinc-700 p-10 transition-all hover:bg-zinc-800/40">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-zinc-500 group-hover:text-amber-500" />
              </div>
              <h2 className="text-sm font-black text-zinc-600 uppercase tracking-widest mb-2 italic">Secure Briefing</h2>
              <p className="text-2xl font-serif font-black text-zinc-100 mb-6 italic tracking-tight group-hover:text-amber-500">support@helpitapp.com</p>
              <div className="flex justify-center gap-2">
                <span className="px-2 py-1 text-[8px] bg-zinc-950 border border-zinc-800 text-zinc-500 font-black uppercase tracking-widest">Logs</span>
                <span className="px-2 py-1 text-[8px] bg-zinc-950 border border-zinc-800 text-zinc-500 font-black uppercase tracking-widest">Manifests</span>
              </div>
            </div>
          </a>
        </div>

        {/* Secure Message Submission (The File) */}
        <div className="max-w-5xl mx-auto bg-zinc-950 border border-zinc-900 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-amber-600 p-10 text-black flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-black mb-4 italic leading-none uppercase">OFFICIAL BRIEFING</h3>
                <p className="font-bold text-sm mb-8 opacity-80 uppercase tracking-tight">Submit your report for a tactical response. The family respects discretion.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-t border-black/20 pt-4">
                  <ShieldAlert size={20}/>
                  <p className="font-black uppercase text-[10px] tracking-widest">Protocol: Classified</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-amber-700 tracking-widest ml-1">Alias</label>
                  <input required className="w-full bg-zinc-900 border border-zinc-800 p-4 text-sm focus:border-amber-600 outline-none text-white placeholder:text-zinc-700" placeholder="Required" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-amber-700 tracking-widest ml-1">Secure Channel (Email)</label>
                  <input required type="email" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-sm focus:border-amber-600 outline-none text-white placeholder:text-zinc-700" placeholder="Required" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-amber-700 tracking-widest ml-1">The Message</label>
                <textarea required rows={5} className="w-full bg-zinc-900 border border-zinc-800 p-4 text-sm focus:border-amber-600 outline-none text-white placeholder:text-zinc-700" placeholder="State your objective..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>
              <button disabled={loading} className="w-full py-5 bg-amber-600 text-black font-black text-lg hover:bg-amber-500 transition-all flex items-center justify-center gap-3 uppercase italic tracking-tighter">
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={20}/> Dispatch Report</>}
              </button>
            </form>
          </div>
        </div>

        {/* Closing Operational Hours */}
        <div className="max-w-2xl mx-auto mt-16 text-center border-t border-zinc-900 pt-8">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">24/7 Field Availability</p>
        </div>
      </div>
    </div>
  );
}