import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "🕶️ **I’m The Consigliere.** State your business, and I'll handle it." }];
  const [messages, setMessages] = useState(initialState);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const downloadTranscript = () => {
    const fileContent = messages.map(msg => {
      const role = msg.role === "user" ? "YOU" : "THE HIT MAN";
      return `[${role}]: ${msg.content}\n`;
    }).join("\n---\n\n");
    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "HIT_MAN_BRIEFING.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content, history: messages.slice(-10) })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ **The line is dead.**" }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chat-widget shadow-2xl border border-amber-600/30 rounded-2xl bg-zinc-900 overflow-hidden flex flex-col h-[650px] w-full max-w-md mx-auto">
      {/* Header with Standard Symbols */}
      <div className="p-4 bg-amber-600 flex justify-between items-center shadow-lg shrink-0">
        <span className="text-black font-black uppercase text-xs tracking-widest italic">Help IT - Secure Line</span>
        <div className="flex items-center gap-4">
          <button onClick={downloadTranscript} className="text-black text-xl hover:opacity-60 transition-opacity" title="Download Briefing">
            📥
          </button>
          <button onClick={() => window.confirm("Wipe the record?") && setMessages(initialState)} className="text-black text-xl hover:opacity-60 transition-opacity" title="Wipe Record">
            🗑️
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-black/40">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[92%] p-5 rounded-2xl text-sm leading-relaxed shadow-xl ${
              msg.role === "user" 
                ? "bg-amber-600 text-black font-bold border-b-4 border-amber-800" 
                : "bg-zinc-800 text-amber-50 border border-amber-500/20"
            }`}>
              <ReactMarkdown className="markdown-body">
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start items-center gap-3 p-2">
            <span className="text-amber-500 animate-spin text-lg">⏳</span>
            <span className="text-amber-500 text-[10px] uppercase font-black tracking-widest animate-pulse">Securing encryption...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-zinc-900 border-t border-amber-600/20">
        <div className="flex gap-2">
          <input className="flex-1 bg-black border border-zinc-700 rounded-xl p-4 text-white text-sm outline-none focus:ring-2 focus:ring-amber-500" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Describe the situation..." />
          <button className="bg-amber-600 p-4 rounded-xl text-black font-bold text-lg hover:bg-amber-500 transition-all disabled:opacity-30" onClick={sendMessage} disabled={loading}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
