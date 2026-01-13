import React, { useState, useRef, useEffect } from "react";
import { Trash2, Send } from "lucide-react";

export default function ChatWidget() {
  const initialState = [
    { role: "assistant", content: "🕶️ I’m The Consigliere. Tell me your IT problem." }
  ];

  // --- State ---
  const [messages, setMessages] = useState(initialState);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const messagesEndRef = useRef(null);

  // --- Constants ---
  const EXPIRY_TIME = 4 * 60 * 60 * 1000; // 4 Hours

  // --- Auto-scroll ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Core Functions ---
  const resetChat = () => {
    if (window.confirm("Wipe the record? This cannot be undone.")) {
      setMessages(initialState);
      setInput("");
      setLastActivity(Date.now());
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const currentTime = Date.now();
    let currentHistory = [...messages];

    // Auto-reset if away for more than 4 hours
    if (currentTime - lastActivity > EXPIRY_TIME) {
      currentHistory = initialState;
    }

    const currentText = input.trim();
    const userMessage = { role: "user", content: currentText };
    
    // Update UI immediately to show user's message
    const updatedMessages = [...currentHistory, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setLastActivity(currentTime);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: currentText,
          // Memory optimization: send only the last 10 messages
          history: currentHistory.slice(-10) 
        })
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      
      // Add AI reply to chat
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev, 
        { role: "assistant", content: "⚠️ Line disconnected. The family is unreachable." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget shadow-2xl border border-amber-600/30 rounded-2xl bg-zinc-900 overflow-hidden flex flex-col h-[500px] w-full max-w-md mx-auto">
      
      {/* Header */}
      <div className="p-4 bg-amber-600 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2 text-black">
          <span className="font-black uppercase text-xs tracking-widest">The Consigliere</span>
        </div>
        <button 
          onClick={resetChat} 
          className="text-black hover:scale-110 transition-transform p-1 hover:bg-black/10 rounded"
          title="Reset Chat"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user" 
                ? "bg-amber-600 text-black font-bold rounded-tr-none shadow-lg" 
                : "bg-zinc-800 text-amber-50 border border-amber-900/50 rounded-tl-none"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 text-amber-500 text-[10px] p-2 rounded-lg animate-pulse uppercase tracking-widest font-bold">
              Connecting...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="p-4 border-t border-amber-900/30 bg-zinc-900">
        <div className="flex gap-2">
          <input 
            className="flex-1 bg-black border border-zinc-800 rounded-lg p-2 text-white text-sm outline-none focus:border-amber-500 transition-colors" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={e => e.key === "Enter" && sendMessage()} 
            placeholder="State your business..." 
          />
          <button 
            className="bg-amber-600 p-2 rounded-lg text-black hover:bg-amber-500 disabled:opacity-50 transition-colors" 
            onClick={sendMessage} 
            disabled={loading || !input.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}