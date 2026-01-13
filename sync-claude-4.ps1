# 1. Update Backend (chat.js) with Claude 4.5
Write-Host "--- Updating Backend to Claude 4.5 ---" -ForegroundColor Cyan
$chatJS = @'
const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  try {
    const { message, history } = JSON.parse(event.body);
    const conversationHistory = (history || []).map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));
    conversationHistory.push({ role: "user", content: message });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929", 
      max_tokens: 1024,
      system: "You are the 'HIT Man'. A tech-savvy Mafia Consigliere. Be helpful, firm, and solve IT problems for the family.",
      messages: conversationHistory,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: response.content[0].text }),
    };
  } catch (error) {
    console.error('Claude API Error:', error.message);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
'@
$chatJS | Out-File -FilePath "netlify/functions/chat.js" -Encoding utf8

# 2. Update Frontend (ChatWidget.jsx) with Loading Spinner
Write-Host "--- Updating Frontend UI ---" -ForegroundColor Cyan
$widgetJSX = @'
import React, { useState, useRef, useEffect } from "react";
import { Trash2, Send, Loader2 } from "lucide-react";

export default function ChatWidget() {
  const initialState = [{ role: "assistant", content: "🕶️ I’m The Consigliere. Tell me your IT problem." }];
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
      if (!res.ok) throw new Error(data.error);
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Line disconnected. The family is unreachable." }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="chat-widget shadow-2xl border border-amber-600/30 rounded-2xl bg-zinc-900 overflow-hidden flex flex-col h-[500px] w-full max-w-md mx-auto">
      <div className="p-4 bg-amber-600 flex justify-between items-center shadow-lg">
        <span className="text-black font-black uppercase text-xs tracking-widest">The Consigliere</span>
        <button onClick={() => window.confirm("Wipe the record?") && setMessages(initialState)} className="text-black hover:scale-110 transition-transform"><Trash2 size={20} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-amber-600 text-black font-bold shadow-lg" : "bg-zinc-800 text-amber-50 border border-amber-900/50"}`}>{msg.content}</div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start items-center gap-2">
            <Loader2 className="animate-spin text-amber-600" size={16} />
            <span className="text-amber-600 text-[10px] uppercase font-bold animate-pulse">Securing line...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-amber-900/30 bg-zinc-900 flex gap-2">
        <input className="flex-1 bg-black border border-zinc-800 rounded-lg p-2 text-white text-sm outline-none focus:border-amber-500" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="State your business..." />
        <button className="bg-amber-600 p-2 rounded-lg text-black disabled:opacity-50" onClick={sendMessage} disabled={loading || !input.trim()}><Send size={18} /></button>
      </div>
    </div>
  );
}
'@
$widgetJSX | Out-File -FilePath "src/components/ChatWidget.jsx" -Encoding utf8

# 3. Deploy
Write-Host "--- Pushing to GitHub/Netlify ---" -ForegroundColor Cyan
git add .
git commit -m "feat: implement Claude 4.5 with UI loading spinner"
git push origin master

Write-Host "--- Done! Wait for Netlify build to complete. ---" -ForegroundColor Green