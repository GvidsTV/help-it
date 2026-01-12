import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Ticket,
  User,
  X,
  Mail,
  Image as ImageIcon,
  XCircle,
} from "lucide-react";

export default function HomePage() {
  // --- State Management ---
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to the family. I'm the HIT man, and I'm here to take care of all your tech problems. What's bothering you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const [wantsEmailUpdates, setWantsEmailUpdates] = useState(false);
  const [optionalEmail, setOptionalEmail] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    priority: "medium",
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // --- Helpers ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- Image Logic ---
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image too large! Under 5MB only.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const resultStr = String(reader.result || "");
      const base64String = resultStr.includes(",") ? resultStr.split(",")[1] : "";
      
      setSelectedImage({ 
        data: base64String, 
        type: file.type, 
        name: file.name 
      });
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // --- Core Chat Logic ---
  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim() ? input : "Please analyze this image",
      image: selectedImage,
    };

    // Store current state to send, then clear inputs for UI snappiness
    const messageToSend = input.trim() || "Please analyze this image";
    const imageToSend = selectedImage;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    clearImage();
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageToSend,
          image: imageToSend, // Now correctly sending the base64 data
          optionalEmail: wantsEmailUpdates ? optionalEmail : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Connection lost");

      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: data?.reply || "I've handled it." }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: "I hit a snag. Submit a ticket and I'll handle this personally." 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleTicketSubmit = async () => {
    if (!ticketData.name || !ticketData.email || !ticketData.issue) {
      alert("The family needs your name, email, and the problem details.");
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/submit-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });

      if (response.ok) {
        alert("✅ Ticket submitted. We'll take care of it within 24 hours.");
        setTicketData({ name: "", email: "", phone: "", issue: "", priority: "medium" });
        setShowTicket(false);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      alert("Failed to submit ticket. Reach out to us directly.");
    }
  };

  const commonIssues = [
    "Can't log into my email",
    "WiFi not working",
    "Forgot my password",
    "Computer running slow",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600 via-transparent to-transparent z-0" />

      {/* Banner */}
      {showBanner && (
        <div className="relative z-50 bg-amber-900/30 border-b border-amber-600/30 p-3 flex justify-between items-center">
          <p className="text-amber-400 text-sm flex items-center gap-2">
            <Mail size={16} /> Need follow-up? Submit a ticket for dedicated support.
          </p>
          <button onClick={() => setShowBanner(false)}><X size={16} className="text-amber-600" /></button>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 border-b-2 border-amber-600/30 bg-black/90 py-8 shadow-[0_4px_20px_rgba(217,119,6,0.2)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-5xl font-black tracking-tighter text-amber-500 uppercase italic">Help IT</h1>
           <p className="text-amber-700 font-bold tracking-widest uppercase text-xs mt-2">Just call the HIT Man</p>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Side */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/80 border-2 border-amber-600/40 rounded-3xl overflow-hidden flex flex-col h-[700px] shadow-2xl shadow-amber-900/20">
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-amber-600/20 to-transparent border-b border-amber-600/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/50">
                <User size={24} className="text-black" />
              </div>
              <div>
                <h2 className="text-amber-400 font-bold text-lg leading-tight">The HIT Man</h2>
                <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">Online & Ready</span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-700' : 'bg-amber-600'}`}>
                      <User size={16} className={msg.role === 'user' ? 'text-white' : 'text-black'} />
                   </div>
                   <div className={`max-w-[80%] p-4 rounded-2xl border ${msg.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-amber-950/30 border-amber-600/30 text-amber-50'}`}>
                      {msg.content}
                      {msg.image && (
                        <img 
                          src={msg.image.data ? `data:${msg.image.type};base64,${msg.image.data}` : msg.image} 
                          alt="Uploaded" 
                          className="mt-2 rounded-lg max-h-40 border border-amber-500/30" 
                        />
                      )}
                   </div>
                </div>
              ))}
              {loading && <div className="text-amber-500 animate-pulse text-sm font-bold">The HIT Man is thinking...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-amber-600/30 bg-zinc-900/90">
              {imagePreview && (
                <div className="mb-3 relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="rounded-lg border border-amber-500/50"
                    style={{ maxHeight: "150px", maxWidth: "100%" }}
                  />
                  <button
                    onClick={clearImage}
                    className="absolute -top-2 -right-2 bg-black rounded-full p-1 border border-amber-500"
                    type="button"
                  >
                    <XCircle size={20} className="text-amber-500" />
                  </button>
                </div>
              )}

              <div className="flex gap-2">
                 <input 
                   type="file" 
                   ref={fileInputRef} 
                   className="hidden" 
                   accept="image/*"
                   onChange={handleImageSelect} 
                 />
                 <button 
                   onClick={() => fileInputRef.current.click()} 
                   className="p-3 rounded-xl border border-amber-600/40 text-amber-500 hover:bg-amber-600/10"
                   type="button"
                 >
                   <ImageIcon size={20} />
                 </button>
                 <textarea 
                   className="flex-1 bg-black border border-amber-600/40 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
                   placeholder="Type your problem..."
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                 />
                 <button 
                   onClick={handleSend} 
                   className="bg-amber-500 text-black px-6 rounded-xl font-bold hover:bg-amber-400 disabled:opacity-50"
                   disabled={loading}
                 >
                   <Send size={20} />
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <button 
            onClick={() => setShowTicket(!showTicket)}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black p-4 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition-transform"
          >
            <Ticket /> {showTicket ? "Back to Intel" : "Request Personal Support"}
          </button>

          {showTicket ? (
            <div className="bg-zinc-900 border-2 border-amber-600/40 rounded-3xl p-6">
              <h2 className="text-amber-500 font-bold text-xl mb-4">The Contract</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-black border border-zinc-800 p-3 rounded-lg" value={ticketData.name} onChange={e => setTicketData({...ticketData, name: e.target.value})} />
                <input type="email" placeholder="Email" className="w-full bg-black border border-zinc-800 p-3 rounded-lg" value={ticketData.email} onChange={e => setTicketData({...ticketData, email: e.target.value})} />
                <textarea placeholder="The Situation..." className="w-full bg-black border border-zinc-800 p-3 rounded-lg h-32" value={ticketData.issue} onChange={e => setTicketData({...ticketData, issue: e.target.value})} />
                <button onClick={handleTicketSubmit} className="w-full bg-amber-600 text-black font-bold p-3 rounded-lg">Submit Request</button>
              </div>
            </div>
          ) : (
            <div className="bg-amber-900/10 border border-amber-600/20 rounded-3xl p-6">
              <h3 className="text-amber-500 font-bold mb-4">Common Hits</h3>
              <div className="grid gap-2">
                {commonIssues.map((issue, i) => (
                  <button key={i} onClick={() => setInput(issue)} className="text-left p-3 rounded-lg bg-black/40 border border-zinc-800 text-sm text-zinc-400 hover:border-amber-600/50 transition-colors">
                    {issue}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}