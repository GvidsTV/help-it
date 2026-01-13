import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "🕶️ **I’m The Consigliere.** State your business." }];
  const [messages, setMessages] = useState(initialState);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const downloadTranscript = () => {
    const fileContent = messages.map(msg => `[${msg.role.toUpperCase()}]: ${msg.content}\n`).join("\n---\n\n");
    const element = document.createElement("a");
    element.href = URL.createObjectURL(new Blob([fileContent], { type: 'text/plain' }));
    element.download = "HIT_MAN_BRIEFING.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
    <div className="chat-widget border-2 border-amber-600 rounded-xl bg-zinc-900 flex flex-col h-[650px] w-full max-w-md mx-auto overflow-hidden">
      <div className="p-4 bg-amber-600 flex justify-between items-center shrink-0">
        <span className="text-black font-black uppercase text-xs">Help IT - Secure</span>
        <div className="flex gap-4">
          <button onClick={downloadTranscript} className="text-black font-bold text-xs border border-black px-2 py-1 rounded hover:bg-black hover:text-amber-600 transition-colors">SAVE</button>
          <button onClick={() => window.confirm("Wipe?") && setMessages(initialState)} className="text-black font-bold text-xs border border-black px-2 py-1 rounded hover:bg-black hover:text-amber-600 transition-colors">WIPE</button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[90%] p-4 rounded-lg text-sm ${msg.role === "user" ? "bg-amber-600 text-black font-bold" : "bg-zinc-800 text-white"}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && <div className="text-amber-500 animate-pulse text-xs">⌛ Securing line...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-zinc-900 flex gap-2 border-t border-amber-900">
        <input className="flex-1 bg-black text-white p-3 rounded border border-zinc-700 outline-none" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
        <button className="bg-amber-600 px-4 rounded text-black font-bold" onClick={sendMessage} disabled={loading}>SEND</button>
      </div>
    </div>
  );
}
