import React, { useState, useRef, useEffect } from "react";
import { Send, Ticket, User, X, Mail, Image as ImageIcon, Loader2 } from "lucide-react";

export default function HomePage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to the family. I'm the HIT man, and I'm here to take care of all your tech problems. What's bothering you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [optionalEmail, setOptionalEmail] = useState("");

  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    priority: "Within 24 hours"
  });

  // TICKET SUBMISSION - FORMSPREE FIXED
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
        alert("✅ Ticket Received! I'll be in touch.");
        setShowTicket(false);
      } else {
        throw new Error("Formspree rejected the request");
      }
    } catch (error) {
      alert("Failed to submit. Please email support@helpitapp.com directly.");
    } finally {
      setTicketLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans">
      {/* Hero Image Fix */}
      <div className="max-w-5xl mx-auto pt-10 px-4">
        <img 
          src="/hit-man-bg.png" 
          alt="The HIT Man" 
          className="w-full rounded-2xl border border-amber-900/30 shadow-2xl"
          onError={(e) => { e.target.src = "https://placehold.co/1200x400/1a0f0a/d97706?text=THE+HIT+MAN"; }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chat Section */}
        <div className="lg:col-span-7 bg-black/60 border border-amber-900/40 rounded-2xl overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-amber-950/20">
          <div className="p-4 border-b border-amber-900/30 bg-amber-950/10 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-black"><User size={20}/></div>
            <div>
              <h2 className="font-bold text-amber-500">The HIT Man</h2>
              <p className="text-[10px] uppercase tracking-widest text-amber-700">Your personal tech specialist</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl border ${m.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-[#1a0f0a] border-amber-900/50'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-black/40 border-t border-amber-900/30 space-y-3">
            {/* Follow-up Email Input + Send Button */}
            <div className="flex items-center gap-2 px-1">
               <input type="checkbox" checked={true} readOnly className="accent-amber-500" />
               <label className="text-xs text-amber-600">Need follow-up help? Submit your email.</label>
            </div>
            <div className="relative">
              <input 
                className="w-full bg-black border border-amber-900/50 rounded-lg p-2 pr-10 text-sm focus:border-amber-500 outline-none" 
                placeholder="email@example.com"
                value={optionalEmail}
                onChange={(e) => setOptionalEmail(e.target.value)}
              />
              <button className="absolute right-2 top-1.5 text-amber-600 hover:text-amber-400">
                <Send size={18} />
              </button>
            </div>

            <div className="flex gap-2 pt-2">
              <div className="flex-1 relative">
                <textarea 
                  className="w-full bg-zinc-900/50 border border-amber-900/30 rounded-lg p-3 pr-10 text-sm focus:border-amber-500 outline-none" 
                  placeholder="Tell me what's wrong..."
                  rows={2}
                />
                <button className="absolute right-3 bottom-3 text-zinc-500"><ImageIcon size={18}/></button>
              </div>
              <button className="bg-zinc-700 px-4 rounded-lg hover:bg-zinc-600 transition-colors"><Send size={20}/></button>
            </div>

            <button onClick={() => setShowTicket(true)} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg flex items-center justify-center gap-2 uppercase tracking-tighter text-sm">
              <Ticket size={18}/> Get Personal Help
            </button>
          </div>
        </div>

        {/* Sidebar / Ticket Form */}
        <div className="lg:col-span-5">
          {showTicket ? (
            <form onSubmit={handleTicketSubmit} className="bg-[#1a0f0a] border border-amber-600/50 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-amber-500 mb-2 uppercase tracking-tighter">Request Personal Support</h3>
              <p className="text-xs text-amber-700 mb-6 font-medium italic">Fill this out and we'll handle it personally.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-amber-600 ml-1">Your Name</label>
                  <input required className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-sm" placeholder="Gareth Butler" onChange={e => setTicketData({...ticketData, name: e.target.value})} />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-amber-600 ml-1">Email</label>
                  <input required type="email" className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-sm" placeholder="email@example.com" onChange={e => setTicketData({...ticketData, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-amber-600 ml-1">How urgent is this?</label>
                  <select className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-sm" onChange={e => setTicketData({...ticketData, priority: e.target.value})}>
                    <option>Within 24 hours</option>
                    <option>Urgent (Within 4 hours)</option>
                    <option>Immediate / Critical</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-amber-600 ml-1">What's the problem?</label>
                  <textarea required className="w-full bg-black border border-zinc-800 p-3 rounded-lg text-sm" rows={4} placeholder="Describe the issue..." onChange={e => setTicketData({...ticketData, issue: e.target.value})} />
                </div>
                <button disabled={ticketLoading} className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-xl transition-all">
                  {ticketLoading ? <Loader2 className="animate-spin mx-auto" /> : "SUBMIT REQUEST"}
                </button>
                <button type="button" onClick={() => setShowTicket(false)} className="w-full text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-2 hover:text-amber-600">Go Back</button>
              </div>
            </form>
          ) : (
            <div className="bg-amber-950/5 border border-amber-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-amber-600 mb-4 tracking-tighter">The Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-amber-500 font-black">01</div>
                  <p className="text-zinc-400 text-sm">Brief the AI on your technical issue for an instant solution.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-amber-500 font-black">02</div>
                  <p className="text-zinc-400 text-sm">If the AI can't resolve it, deploy a Support Ticket.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-amber-500 font-black">03</div>
                  <p className="text-zinc-400 text-sm">The HIT Man will contact you via text or email to finalize the fix.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}