import React, { useState, useRef, useEffect } from "react";
import { Trash2, Send } from "lucide-react";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "ðŸ•¶ï¸ Iâ€™m The Consigliere. Tell me your IT problem." }];
  const [messages, setMessages] = useState(initialState);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const messagesEndRef = useRef(null);
  const EXPIRY_TIME = 4 * 60 * 60 * 1000;

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const currentTime = Date.now();
    let currentHistory = (currentTime - lastActivity > EXPIRY_TIME) ? initialState : [...messages];
    const userMessage = { role: "user", content: input.trim() };
    setMessages([...currentHistory, userMessage]);
    setInput("");
    setLoading(true);
    setLastActivity(currentTime);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content, history: currentHistory.slice(-10) })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "âš ï¸ Line disconnected." }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chat-widget shadow-2xl border border-amber-600/30 rounded-2xl bg-zinc-900 overflow-hidden flex flex-col h-[500px] w-full max-w-md mx-auto">
      <div className="p-4 bg-amber-600 flex justify-between items-center">
        <span className="text-black font-black uppercase text-xs tracking-widest">The Consigliere</span>
        <button onClick={() => window.confirm("Wipe the record?") && setMessages(initialState)} className="text-black hover:scale-110 transition-transform"><Trash2 size={20} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-amber-600 text-black font-bold" : "bg-zinc-800 text-amber-50 border border-amber-900/50"}`}>{msg.content}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-amber-900/30 bg-zinc-900 flex gap-2">
        <input className="flex-1 bg-black border border-zinc-800 rounded-lg p-2 text-white text-sm outline-none" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="State your business..." />
        <button className="bg-amber-600 p-2 rounded-lg text-black" onClick={sendMessage} disabled={loading}><Send size={18} /></button>
      </div>
    </div>
  );
}
