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
  const EXPIRY_TIME = 4 * 60 * 60 * 1000; // 4 Hours in milliseconds

  // --- Helpers ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const resetChat = () => {
    setMessages(initialState);
    setInput("");
    setLastActivity(Date.now());
  };

  // --- Core Logic ---
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const currentTime = Date.now();
    let currentHistory = [...messages];

    // Check for 4-hour session expiry
    if (currentTime - lastActivity > EXPIRY_TIME) {
      currentHistory = initialState;
    }

    const currentText = input.trim();
    const userMessage = { role: "user", content: currentText };
    
    // Update UI immediately
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
          // Memory optimization: only send last 10 messages to backend
          history: currentHistory.slice(-10) 
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to connect");

      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [
        ...prev, 
        { role: "assistant", content: "⚠️ The family is currently unreachable. Try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget shadow-2xl border border-amber-600/30 rounded-2xl bg-zinc-900 overflow-hidden flex flex-col h-[500px] w-full max-w-md mx-auto">
      
      {/* HEADER WITH TRASH ICON */}
      <div className="p-4 bg-amber-600 flex justify-between items-center shadow-lg relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
          <span className="text-black font-black uppercase text-xs tracking-tighter">
            The Consigliere
          </span>
        </div>
        <button 
          onClick={() => window.confirm("Wipe the record? This cannot be undone.") && resetChat()} 
          className="p-1.5 bg-black/10 hover:bg-black/20 rounded-md transition-all group"
          title="Reset Conversation"
        >
          <Trash2 size={20} className="text-black group-hover:text-amber-900" />
        </button>
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 scrollbar-thin scrollbar-thumb-amber-600">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user" 
                ? "bg-amber-600 text-black font-bold shadow-md rounded-tr-none" 
                : "bg-zinc-800 text-amber-50 border border-amber-900/50 shadow-md rounded-tl-none"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-zinc-800/50 text-amber-500 text-[10px] uppercase tracking-widest p-2 rounded-lg animate-pulse border border-amber-900/20">
               Securing line...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-4 border-t border-amber-900/30 bg-zinc-900">
        <div className="flex gap-2 bg-black/50 p-1 rounded-xl border border-amber-900/20">
          <input
            className="flex-1 bg-transparent p-2 text-white text-sm focus:outline-none placeholder:text-zinc-600"
            value={input}
            placeholder="State your business..."
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button 
            className="bg-amber-600 p-2 rounded-lg text-black hover:bg-amber-500 transition-all disabled:opacity-50 disabled:grayscale flex items-center justify-center" 
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