import React, { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "🕶️ I’m The Consigliere. Tell me your IT problem." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });

      const data = await res.json();

      const botMessage = {
        role: "assistant",
        content: data.reply || "⚠️ The Consigliere is silent. Try again."
      };

      setMessages([...updatedMessages, botMessage]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "⚠️ The Consigliere is unavailable right now." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-widget">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message message-${msg.role}`}>
            <div className="message-bubble">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-wrapper">
        <textarea
          className="chat-input"
          value={input}
          placeholder="Describe your IT problem..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
        />
        <button className="chat-send-button" onClick={sendMessage} disabled={loading}>
          {loading ? "…" : "➤"}
        </button>
      </div>
    </div>
  );
}
