import React, { useState, useRef, useEffect } from "react";
import { Send, Ticket, MessageSquare, User, X, Mail, Image as ImageIcon } from "lucide-react";

export default function HomePage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to the family. I'm the HIT man. What's bothering your tech today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittingTicket, setSubmittingTicket] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    priority: "medium",
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // CHAT LOGIC (Keeping Netlify for now as requested)
  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || loading) return;

    const userMessage = { role: "user", content: input.trim() || "Image uploaded" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data?.reply || "I'm on it." }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Comms are down. Submit a ticket for a direct response." }]);
    } finally {
      setLoading(false);
    }
  };

  // TICKET FORM LOGIC (Formspree Integrated)
  const handleTicketSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmittingTicket(true);

    try {
      const response = await fetch("https://formspree.io/f/xnjjqdgo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });

      if (response.ok) {
        alert("✅ TICKET DISPATCHED. The HIT Man will contact you shortly.");
        setTicketData({ name: "", email: "", phone: "", issue: "", priority: "medium" });
        setShowTicket(false);
      }
    } catch (error) {
      alert("Dispatch failed. Please text 407-504-1287 directly.");
    } finally {
      setSubmittingTicket(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showBanner && (
        <div className="bg-amber-900/20 border-b border-amber-600/30 p-3 flex justify-between items-center max-w-7xl mx-auto rounded-b-xl">
           <p className="text-amber-400 text-sm flex items-center gap-2"><Mail size={16}/> Priority Support: Submit a ticket for a 2-hour response window.</p>
           <button onClick={() => setShowBanner(false)}><X size={18} className="text-amber-600"/></button>
        </div>
      )}

      <div className="py-10 text-center px-4">
        <img src="/hit-man-bg.png" alt="HIT Man" className="max-w-4xl w-full mx-auto rounded-2xl border-2 border-amber-600/20 shadow-2xl shadow-amber-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        <div className="lg:col-span-2 bg-zinc-900/50 border-2 border-amber-600/30 rounded-3xl flex flex-col h-[650px] overflow-hidden">
          <div className="p-6 border-b border-amber-600/20 bg-amber-600/5 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold"><User /></div>
            <div>
              <h2 className="font-bold text-xl text-amber-400">The HIT Man AI</h2>
              <p className="text-[10px] text-amber-600 uppercase tracking-widest font-black">Field Operative</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl border ${m.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-amber-900/10 border-amber-600/30 text-amber-50'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-zinc-900/80 border-t border-amber-600/20">
            <div className="flex gap-2 mb-3">
              <textarea 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="flex-1 bg-black border border-amber-600/40 rounded-xl p-3 focus:outline-none text-white placeholder:text-zinc-600" 
                placeholder="Describe the technical failure..." 
                rows={1} 
              />
              <button onClick={handleSend} className="bg-amber-500 hover:bg-amber-400 text-black px-6 rounded-xl font-bold transition-colors"><Send size={20}/></button>
            </div>
            <button onClick={() => setShowTicket(!showTicket)} className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-xl transition-all flex items-center justify-center gap-2">
              <Ticket size={20}/> {showTicket ? "CLOSE TICKET FORM" : "REQUEST PERSONAL HELP"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {showTicket ? (
            <form onSubmit={handleTicketSubmit} className="bg-zinc-900 border-2 border-amber-500 p-6 rounded-3xl animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-black text-amber-400 mb-4 uppercase tracking-tighter">New Support Ticket</h3>
              <input required className="w-full bg-black border border-zinc-700 p-3 rounded-lg mb-3 text-white" placeholder="Client Name" onChange={e => setTicketData({...ticketData, name: e.target.value})} />
              <input required type="email" className="w-full bg-black border border-zinc-700 p-3 rounded-lg mb-3 text-white" placeholder="Email Address" onChange={e => setTicketData({...ticketData, email: e.target.value})} />
              <textarea required className="w-full bg-black border border-zinc-700 p-3 rounded-lg mb-4 text-white" rows={5} placeholder="What needs fixing?" onChange={e => setTicketData({...ticketData, issue: e.target.value})} />
              <button disabled={submittingTicket} className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-lg transition-all">
                {submittingTicket ? "DISPATCHING..." : "DEPLOY TICKET"}
              </button>
            </form>
          ) : (
            <div className="bg-amber-900/10 border border-amber-600/30 p-8 rounded-3xl">
              <MessageSquare size={40} className="text-amber-500 mb-4" />
              <h3 className="text-2xl font-black text-amber-400 mb-4 uppercase tracking-tighter">Field Procedure</h3>
              <ul className="space-y-6 text-zinc-300 font-medium">
                <li className="flex gap-3 items-start"><span className="text-amber-500 font-black">01.</span> Brief the AI on your technical issue.</li>
                <li className="flex gap-3 items-start"><span className="text-amber-500 font-black">02.</span> Apply the recommended fix immediately.</li>
                <li className="flex gap-3 items-start"><span className="text-amber-500 font-black">03.</span> If issue persists, deploy a Ticket for a direct HIT.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}