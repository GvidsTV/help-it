import React, { useState } from "react";
import { Send, Ticket, User, MessageSquare, ChevronDown, Loader2, Shield } from "lucide-react";

export default function HomePage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to the family. I'm the HIT Man. What's bothering your tech today? Make it quick—I've got a lot of 'jobs' to handle." }
  ]);
  const [input, setInput] = useState("");
  const [showTicket, setShowTicket] = useState(false);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    priority: "Within 24 hours",
    issue: ""
  });

  const faqs = [
    { q: "What's the 'HIT' list look like?", a: "PC hardware, MacBook failures, server breaches, and network security. If it has a pulse and a power button, I can fix it." },
    { q: "How fast do you move?", a: "AI response is instant. For a personal 'hit,' tickets are reviewed within 2-4 hours. The family doesn't like to wait." },
    { q: "Is this strictly remote?", a: "Mostly. I handle things from the shadows, but for the right price (and the right problem), I'll show up in person." }
  ];

  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    setTicketLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xnjjqdgo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });
      if (response.ok) {
        alert("✅ CONTRACT SIGNED. The HIT Man is on the move.");
        setShowTicket(false);
      }
    } catch (error) {
      alert("Comms are hot. Email support@helpitapp.com through a secure channel.");
    } finally {
      setTicketLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans pt-24 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: AI Chat & FAQ */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Chat Container */}
          <div className="bg-zinc-900/60 border-2 border-amber-900/40 rounded-3xl overflow-hidden flex flex-col h-[550px] shadow-[0_0_50px_-12px_rgba(217,119,6,0.15)]">
            <div className="p-6 border-b border-amber-900/30 bg-gradient-to-r from-amber-950/20 to-transparent flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.3)]"><User className="text-amber-500" /></div>
              <div>
                <h2 className="font-serif font-black text-2xl text-amber-500 tracking-tight italic uppercase">The HIT Man</h2>
                <p className="text-[10px] text-amber-700 uppercase tracking-[0.4em] font-black">Consigliere of IT</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 to-black/40">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-xl border-l-4 ${m.role === 'user' ? 'bg-zinc-800 border-zinc-600 rounded-tr-none' : 'bg-[#120a05] border-amber-600/60 text-amber-50 rounded-tl-none italic'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/80 border-t border-amber-900/20">
              <div className="flex gap-2 mb-3">
                <textarea 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  className="flex-1 bg-zinc-950 border border-amber-900/30 rounded-xl p-3 focus:border-amber-500 outline-none text-white placeholder:text-zinc-800" 
                  placeholder="State your business..." 
                  rows={1} 
                />
                <button className="bg-amber-600 hover:bg-amber-500 text-black px-6 rounded-xl font-black transition-all shadow-lg shadow-amber-600/10"><Send size={20}/></button>
              </div>
              <button onClick={() => setShowTicket(!showTicket)} className="w-full py-4 bg-[#1a1a1a] border border-amber-600/40 hover:bg-amber-600 hover:text-black text-amber-500 font-black rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-tighter">
                <Shield size={18}/> {showTicket ? "CLOSE THE FILE" : "HIRE THE HIT MAN"}
              </button>
            </div>
          </div>

          {/* Common Intel (FAQ) */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-amber-600" size={24} />
              <h3 className="text-xl font-serif font-black text-amber-500 uppercase italic tracking-tighter">THE INTEL</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-zinc-800/50 last:border-0 pb-4 last:pb-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                  >
                    <span className={`font-bold uppercase tracking-tight transition-colors ${openFaq === i ? 'text-amber-400' : 'text-zinc-500 group-hover:text-amber-600'}`}>{faq.q}</span>
                    <ChevronDown size={18} className={`text-amber-700 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                    <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-amber-900 pl-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Ticket Form (The Contract) */}
        <div className="lg:col-span-5">
          {showTicket ? (
            <form onSubmit={handleTicketSubmit} className="bg-[#0a0a0a] border-t-4 border-amber-600 p-8 rounded-b-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sticky top-28">
              <h3 className="text-3xl font-serif font-black text-amber-500 mb-2 uppercase italic tracking-tighter">THE CONTRACT</h3>
              <p className="text-[10px] text-zinc-600 mb-8 font-black uppercase tracking-[0.3em]">Confidential Association Agreement</p>
              
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black text-amber-700 ml-1">Alias / Name</label>
                  <input required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-amber-600 outline-none transition-all" placeholder="Enter name..." onChange={e => setTicketData({...ticketData, name: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black text-amber-700 ml-1">Secure Email</label>
                  <input required type="email" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-amber-600 outline-none" placeholder="Enter contact..." onChange={e => setTicketData({...ticketData, email: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black text-amber-700 ml-1">Urgency</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm text-zinc-500 outline-none" onChange={e => setTicketData({...ticketData, priority: e.target.value})}>
                    <option>Standard Job (24h)</option>
                    <option>High Priority (4h)</option>
                    <option>Contract Killer (Instant)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black text-amber-700 ml-1">The Job Details</label>
                  <textarea required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-amber-600 outline-none" rows={5} placeholder="Describe the technical 'hit'..." onChange={e => setTicketData({...ticketData, issue: e.target.value})} />
                </div>
                <button disabled={ticketLoading} className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-none transition-all flex items-center justify-center uppercase tracking-[0.2em] text-sm shadow-xl shadow-amber-900/20">
                  {ticketLoading ? <Loader2 className="animate-spin" /> : "SIGN CONTRACT"}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-gradient-to-b from-zinc-900/50 to-transparent border-t-2 border-amber-900/30 p-8 rounded-[2rem] sticky top-28">
              <h3 className="text-3xl font-serif font-black text-amber-600 mb-8 uppercase italic tracking-tighter">Standard Procedure</h3>
              <div className="space-y-10">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full border border-amber-600/30 flex items-center justify-center font-serif text-xl font-black text-amber-500 italic">1</div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed italic">Consult the Consigliere (AI) for immediate technical intelligence.</p>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full border border-amber-600/30 flex items-center justify-center font-serif text-xl font-black text-amber-500 italic">2</div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed italic">If the AI can't eliminate the target, sign a formal Contract (Ticket).</p>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full border border-amber-600/30 flex items-center justify-center font-serif text-xl font-black text-amber-500 italic">3</div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed italic">The HIT Man takes the job. Comms via secure text or email follow.</p>
                </div>
              </div>
              
              <div className="mt-16 p-6 border border-zinc-800 rounded-2xl bg-black/40">
                <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-amber-800">
                  <span>Status: Active</span>
                  <span>Region: Global</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}