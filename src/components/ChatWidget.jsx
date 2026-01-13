import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "Boss. State the problem. I'll provide the solution." }];
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
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Line dead." }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chat-widget border-2 border-amber-600 rounded-xl bg-zinc-900 flex flex-col h-[600px] w-full max-w-md mx-auto overflow-hidden shadow-2xl">
      <div className="p-4 bg-amber-600 flex justify-between items-center shrink-0">
        <span className="text-black font-black uppercase text-xs">Help IT - Secure Line</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-black">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[90%] p-5 rounded-lg text-base leading-relaxed ${msg.role === "user" ? "bg-amber-600 text-black font-bold" : "bg-zinc-800 text-white border border-amber-900/30"}`}>
              <div className="markdown-container">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {loading && <div className="text-amber-500 animate-pulse text-[10px] font-bold">⌛ ANALYZING...</div>}
        <div ref={messagesEndRef} />
      </div>
      <style>{`
        .markdown-container p { margin-bottom: 1.5rem; line-height: 1.8; }
        .markdown-container li { margin-bottom: 1rem; line-height: 1.6; }
        .markdown-container h3 { margin-top: 1.5rem; margin-bottom: 1rem; font-weight: bold; color: #fbbf24; }
      `}</style>
      <div className="p-4 bg-zinc-900 flex gap-2 border-t border-amber-900">
        <input className="flex-1 bg-black text-white p-3 rounded border border-zinc-700 outline-none focus:border-amber-500" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
        <button className="bg-amber-600 px-4 rounded text-black font-bold" onClick={sendMessage} disabled={loading}>GO</button>
      </div>
    </div>
  );
}
