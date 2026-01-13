import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "👋 **Boss.** State your business. I'll handle the rest." }];
  const [messages, setMessages] = useState(initialState);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, history: messages.slice(-10) })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Line is dead." }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chat-widget border-2 border-amber-600 rounded-xl bg-zinc-900 flex flex-col h-[600px] w-full max-w-md mx-auto overflow-hidden">
      <div className="p-4 bg-amber-600 flex justify-between items-center shrink-0">
        <span className="text-black font-black uppercase text-xs">Secure IT Line</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-black">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user" ? "bg-amber-600 text-black font-bold" : "bg-zinc-800 text-white border border-amber-500/20 shadow-lg"
            }`}>
              <div className="markdown-content">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {loading && <div className="text-amber-500 animate-pulse text-[10px] ml-2">⏳ FIXER IS THINKING...</div>}
        <div ref={messagesEndRef} />
      </div>
      <style>{`
        .markdown-content p { margin-bottom: 1.2rem; }
        .markdown-content li { margin-bottom: 0.8rem; list-style-type: none; }
      `}</style>
      <div className="p-4 bg-zinc-900 flex gap-2">
        <input className="flex-1 bg-black text-white p-3 rounded-xl border border-zinc-800 outline-none focus:border-amber-600" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="What's the situation?" />
        <button className="bg-amber-600 px-6 rounded-xl text-black font-bold" onClick={sendMessage} disabled={loading}>GO</button>
      </div>
    </div>
  );
}
