import React, { useState } from "react";
import { Send, Menu, X, ChevronDown, User, MessageSquare, Ticket } from "lucide-react";

export default function HomePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketLoading, setTicketLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [chatInput, setChatInput] = useState("");

  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    priority: "Standard (24h)",
    issue: ""
  });

  const faqs = [
    {
      q: "What's the 'HIT' list look like?",
      a: "PC hardware, MacBook failures, server breaches, network security, software problems, and cloud infrastructure. If it has a pulse and a power button, I can fix it."
    },
    {
      q: "How fast do you move?",
      a: "AI response is instant. For a personal 'hit,' priority tickets are reviewed within 2-4 hours. The family doesn't like to wait."
    },
    {
      q: "Is this strictly remote?",
      a: "Mostly. I handle things from the shadows, but for the right price (and the right problem), I'll show up in person."
    },
    {
      q: "What are your membership tiers?",
      a: "We run a family hierarchy: Associate ($0 - free tier), Made Man ($49/mo - most popular), and Don ($299/mo - full access). Don't need a subscription? We offer one-time jobs: Quick Hit ($69), Standard Job ($99), and Heavy Operation ($199). For elite projects, we handle Special Operations with custom pricing."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use encrypted connections, secure protocols, and strict confidentiality. Your business stays your business. That's the code."
    }
  ];

  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    setTicketLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xdaaogwb", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: ticketData.name,
          email: ticketData.email,
          priority: ticketData.priority,
          issue: ticketData.issue
        }),
      });
      
      if (response.ok) {
        alert("✅ CONTRACT SIGNED. The HIT Man is on the move.");
        setTicketData({ name: "", email: "", priority: "Standard (24h)", issue: "" });
        setShowTicketForm(false);
      } else {
        alert("❌ Comms are hot. Email support@helpitapp.com through a secure channel.");
      }
    } catch (error) {
      alert("❌ Connection failed. Email support@helpitapp.com directly.");
    } finally {
      setTicketLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Orange Alert Banner */}
      <div className="bg-orange-500 text-black py-3 px-4 text-center text-sm font-bold">
        🔥 IT PROBLEM RIGHT NOW? Text "HIT" to{" "}
        <a href="tel:407-394-1287" className="underline hover:text-white">407-394-1287</a>
        {" "}or email{" "}
        <a href="mailto:support@helpitapp.com" className="underline hover:text-white">support@helpitapp.com</a>
      </div>

      {/* Navigation */}
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-orange-500 tracking-tight">HELP IT</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-orange-500 font-semibold transition">HOME</a>
            <a href="/pricing" className="text-gray-300 hover:text-orange-500 font-semibold transition">PRICING</a>
            <a href="#setup" className="text-gray-300 hover:text-orange-500 font-semibold transition">SETUP</a>
            <a href="#help" className="text-gray-300 hover:text-orange-500 font-semibold transition">HELP</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 font-semibold transition">CONTACT</a>
            <a href="/pricing" className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded font-black transition shadow-lg">
              JOIN THE FAMILY
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a href="#help" className="text-gray-300 hover:text-orange-500 font-semibold text-sm">
              HELP
            </a>
            <a href="/pricing" className="bg-orange-500 hover:bg-orange-600 text-black px-3 py-1.5 rounded font-bold text-xs">
              JOIN
            </a>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)} 
              className="text-white ml-1"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="md:hidden bg-zinc-800 border-t border-zinc-700 px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setShowMobileMenu(false)} className="block text-gray-300 hover:text-orange-500 font-semibold py-2">HOME</a>
            <a href="/pricing" onClick={() => setShowMobileMenu(false)} className="block text-gray-300 hover:text-orange-500 font-semibold py-2">PRICING</a>
            <a href="#setup" onClick={() => setShowMobileMenu(false)} className="block text-gray-300 hover:text-orange-500 font-semibold py-2">SETUP</a>
            <a href="#help" onClick={() => setShowMobileMenu(false)} className="block text-gray-300 hover:text-orange-500 font-semibold py-2">HELP</a>
            <a href="#contact" onClick={() => setShowMobileMenu(false)} className="block text-gray-300 hover:text-orange-500 font-semibold py-2">CONTACT</a>
            <a href="/pricing" onClick={() => setShowMobileMenu(false)} className="block w-full bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded font-black mt-2 text-center">
              JOIN THE FAMILY
            </a>
          </div>
        )}
      </nav>

      {/* Priority Support Banner */}
      <div className="bg-orange-900/20 border-b border-orange-900/40 py-3 px-4 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <p className="text-sm text-orange-400">
            <span className="mr-2">⚡</span>
            <span className="font-semibold">Priority Support:</span> Submit a ticket for a 2-hour response window.
          </p>
          <button className="text-orange-500 hover:text-orange-400 text-2xl font-bold">×</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: AI Chat */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 border border-orange-900/30 rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-orange-950/30 to-zinc-900 border-b border-orange-900/30 p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <User className="text-black" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-orange-500 uppercase">The HIT Man AI</h2>
                  <p className="text-[10px] text-orange-700 uppercase tracking-widest font-bold">FIELD OPERATIVE</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 min-h-[300px] bg-black/40">
                <div className="bg-zinc-800/50 border-l-4 border-orange-600 p-4 rounded-lg">
                  <p className="text-gray-200">Welcome to the family. I'm the HIT man. What's bothering your tech today?</p>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Describe the technical failure..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-black p-3 rounded-lg transition">
                    <Send size={20} />
                  </button>
                </div>
                <button 
                  onClick={() => setShowTicketForm(!showTicketForm)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-lg font-black uppercase text-sm transition flex items-center justify-center gap-2"
                >
                  <Ticket size={18} />
                  {showTicketForm ? "CANCEL REQUEST" : "REQUEST PERSONAL HELP"}
                </button>
              </div>
            </div>

            {/* Quick Technical Questions */}
            <div className="mt-8 bg-zinc-900/50 border border-orange-900/20 rounded-2xl p-6">
              <h3 className="text-lg font-black text-orange-500 uppercase mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Common Jobs - Click to Start
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Help setting up email on my iPhone/Android",
                  "My phone storage is full",
                  "Can't download or update apps",
                  "Forgot my Apple ID or Google password",
                  "Phone battery draining too fast",
                  "Can't hear people on phone calls",
                  "Need help with video calls (FaceTime/Zoom)",
                  "Laptop is very slow and freezing"
                ].map((question, i) => (
                  <button
                    key={i}
                    onClick={() => setChatInput(question)}
                    className="text-left bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500 rounded-lg px-4 py-3 text-sm text-gray-300 hover:text-orange-400 transition group"
                  >
                    <span className="text-orange-500 mr-2 group-hover:text-orange-400">→</span>
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Section Below Chat */}
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-orange-500 uppercase mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-zinc-800 pb-4 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center text-left py-2 group"
                    >
                      <span className={`font-bold text-sm ${openFaq === i ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-500'}`}>
                        {faq.q}
                      </span>
                      <ChevronDown 
                        size={18} 
                        className={`text-orange-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openFaq === i && (
                      <p className="text-gray-400 text-sm mt-2 pl-4 border-l-2 border-orange-900">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {showTicketForm ? (
              /* Ticket Form */
              <form onSubmit={handleTicketSubmit} className="bg-zinc-900 border border-orange-600 rounded-2xl p-6 sticky top-4">
                <h3 className="text-2xl font-black text-orange-500 uppercase mb-4">Submit Contract</h3>
                <div className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Name / Alias"
                    value={ticketData.name}
                    onChange={e => setTicketData({...ticketData, name: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Secure Email"
                    value={ticketData.email}
                    onChange={e => setTicketData({...ticketData, email: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500"
                  />
                  <select
                    value={ticketData.priority}
                    onChange={e => setTicketData({...ticketData, priority: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option>Standard (24h)</option>
                    <option>High Priority (4h)</option>
                    <option>Emergency (Immediate)</option>
                  </select>
                  <textarea
                    required
                    placeholder="Describe the job in detail..."
                    value={ticketData.issue}
                    onChange={e => setTicketData({...ticketData, issue: e.target.value})}
                    rows={5}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500"
                  />
                  <button
                    disabled={ticketLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-lg font-black uppercase text-sm transition disabled:opacity-50"
                  >
                    {ticketLoading ? "SUBMITTING..." : "SIGN CONTRACT"}
                  </button>
                </div>
              </form>
            ) : (
              /* Field Procedure */
              <div className="bg-zinc-900 border border-orange-900/30 rounded-2xl p-6 sticky top-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-black" size={20} />
                  </div>
                  <h3 className="text-xl font-black text-orange-500 uppercase">Field Procedure</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-orange-500 font-black text-lg">01.</span>
                    <p className="text-gray-300 text-sm">Brief the AI on your technical issue.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-orange-500 font-black text-lg">02.</span>
                    <p className="text-gray-300 text-sm">Apply the recommended fix immediately.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-orange-500 font-black text-lg">03.</span>
                    <p className="text-gray-300 text-sm">If issue persists, deploy a Ticket for a direct HIT.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-950/20 border border-orange-900/40 rounded-lg">
                  <p className="text-xs text-orange-400 italic">
                    "We handle business quietly and efficiently. Your tech problems disappear—no questions asked."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}