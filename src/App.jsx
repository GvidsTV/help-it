import React, { useState, useRef, useEffect } from 'react';
import { Send, Ticket, MessageSquare, Loader2, User } from 'lucide-react';

export default function HelpIT() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to the family. I\'m the HIT man, and I\'m here to take care of all your tech problems. What\'s bothering you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState({ name: '', email: '', phone: '', issue: '', priority: 'medium' });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const assistantMessage = {
        role: 'assistant',
        content: data.message
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I hit a snag there. Try again, or if you need me to handle this personally, submit a ticket and I\'ll take care of it.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleTicketSubmit = () => {
    if (!ticketData.name || !ticketData.email || !ticketData.issue) {
      alert('Please fill in your name, email, and describe the issue');
      return;
    }
    alert(`Your ticket has been submitted.\n\nWe'll take care of it within 24 hours.\n\nName: ${ticketData.name}\nEmail: ${ticketData.email}\nPhone: ${ticketData.phone || 'Not provided'}`);
    setTicketData({ name: '', email: '', phone: '', issue: '', priority: 'medium' });
    setShowTicket(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const commonIssues = [
    'Can\'t log into my email',
    'WiFi not working',
    'Forgot my password',
    'Phone storage is full',
    'Can\'t make video calls',
    'Computer running slow',
    'Can\'t download photos',
    'Printer won\'t connect'
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)',
      position: 'relative'
    }}>
      <div style={{
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <header className="relative z-10 border-b" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)',
        borderBottomColor: 'rgba(217, 119, 6, 0.3)',
        borderBottomWidth: '2px',
        boxShadow: '0 4px 20px rgba(217, 119, 6, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex flex-col items-center" style={{flex: 1}}>
            <div className="mb-2" style={{
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 8 C12 8, 10 12, 10 14 L30 14 C30 12, 28 8, 20 8 Z" fill="#d97706" opacity="0.9"/>
                <ellipse cx="20" cy="14" rx="11" ry="2" fill="#d97706"/>
                <ellipse cx="20" cy="22" rx="6" ry="7" fill="#d97706" opacity="0.8"/>
                <path d="M14 28 L16 35 L24 35 L26 28 Z" fill="#d97706" opacity="0.7"/>
                <path d="M19 28 L18 35 L22 35 L21 28 Z" fill="#92400e" opacity="0.9"/>
              </svg>
            </div>
            
            <h1 className="text-5xl font-bold tracking-wider mb-2" style={{
              background: 'linear-gradient(180deg, #fbbf24 0%, #d97706 50%, #92400e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(251, 191, 36, 0.5)',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.1em'
            }}>
              HELP IT
            </h1>
            <p className="text-xl italic" style={{
              color: '#fbbf24',
              fontFamily: 'cursive',
              textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
            }}>
              Just Call the <span style={{fontWeight: 'bold', fontSize: '1.3em'}}>HIT Man</span>.
            </p>
            <p className="text-sm mt-1" style={{
              color: '#d97706',
              fontStyle: 'italic'
            }}>
              We'll take care of it.
            </p>
          </div>
          
          <button
            onClick={() => setShowTicket(!showTicket)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              color: '#000',
              border: '2px solid #fbbf24',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
            }}
          >
            <Ticket size={20} />
            Get Help
          </button>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl shadow-2xl flex flex-col" style={{
              height: 'calc(100vh - 240px)',
              maxHeight: '700px',
              minHeight: '500px',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)',
              boxShadow: '0 0 40px rgba(217, 119, 6, 0.2), inset 0 0 60px rgba(217, 119, 6, 0.05)'
            }}>
              <div className="px-6 py-4" style={{
                background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)',
                borderBottom: '2px solid rgba(217, 119, 6, 0.3)'
              }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                  }}>
                    <User className="text-black" size={24} />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl" style={{color: '#fbbf24'}}>The HIT Man</h2>
                    <p className="text-sm" style={{color: '#d97706'}}>Your personal tech specialist</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{
                background: 'rgba(0, 0, 0, 0.4)'
              }}>
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`} style={{
                      background: msg.role === 'user' 
                        ? 'linear-gradient(135deg, #57534e 0%, #292524 100%)'
                        : 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      boxShadow: msg.role === 'user' 
                        ? '0 0 10px rgba(87, 83, 78, 0.5)'
                        : '0 0 15px rgba(251, 191, 36, 0.6)'
                    }}>
                      <User size={20} style={{color: msg.role === 'user' ? '#fff' : '#000'}} />
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-lg`} style={{
                      background: msg.role === 'user'
                        ? 'linear-gradient(135deg, rgba(68, 64, 60, 0.8) 0%, rgba(41, 37, 36, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)',
                      border: msg.role === 'user'
                        ? '1px solid rgba(120, 113, 108, 0.5)'
                        : '1px solid rgba(217, 119, 6, 0.4)',
                      color: '#f5f5f4'
                    }}>
                      <p className="text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)'
                    }}>
                      <Loader2 size={20} className="text-black animate-spin" />
                    </div>
                    <div className="rounded-2xl px-5 py-3" style={{
                      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)',
                      border: '1px solid rgba(217, 119, 6, 0.4)'
                    }}>
                      <p className="text-base" style={{color: '#fbbf24'}}>Working on it...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4" style={{
                background: 'rgba(0, 0, 0, 0.6)',
                borderTop: '2px solid rgba(217, 119, 6, 0.3)'
              }}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tell me what's wrong..."
                    className="flex-1 px-4 py-3 rounded-xl focus:outline-none text-base"
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '2px solid rgba(217, 119, 6, 0.5)',
                      color: '#f5f5f4',
                      boxShadow: '0 0 10px rgba(217, 119, 6, 0.2)'
                    }}
                    disabled={loading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                    style={{
                      background: loading || !input.trim() 
                        ? 'rgba(120, 113, 108, 0.5)'
                        : 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      color: '#000',
                      boxShadow: loading || !input.trim()
                        ? 'none'
                        : '0 0 20px rgba(251, 191, 36, 0.4)',
                      cursor: loading || !input.trim() ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {showTicket ? (
              <div className="rounded-2xl shadow-2xl p-6" style={{
                background: 'rgba(0, 0, 0, 0.7)',
                border: '2px solid rgba(217, 119, 6, 0.4)',
                boxShadow: '0 0 40px rgba(217, 119, 6, 0.2)'
              }}>
                <h3 className="text-2xl font-bold mb-2" style={{color: '#fbbf24'}}>Request Personal Support</h3>
                <p className="text-sm mb-6" style={{color: '#d97706'}}>Fill this out and we'll handle it personally.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{color: '#fbbf24'}}>Your Name</label>
                    <input
                      type="text"
                      value={ticketData.name}
                      onChange={(e) => setTicketData({...ticketData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none text-base"
                      placeholder="John Doe"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{color: '#fbbf24'}}>Email</label>
                    <input
                      type="email"
                      value={ticketData.email}
                      onChange={(e) => setTicketData({...ticketData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none text-base"
                      placeholder="your.email@example.com"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{color: '#fbbf24'}}>Phone (Optional)</label>
                    <input
                      type="tel"
                      value={ticketData.phone}
                      onChange={(e) => setTicketData({...ticketData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none text-base"
                      placeholder="(555) 123-4567"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{color: '#fbbf24'}}>How urgent is this?</label>
                    <select
                      value={ticketData.priority}
                      onChange={(e) => setTicketData({...ticketData, priority: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none text-base"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    >
                      <option value="low">Can wait a day or two</option>
                      <option value="medium">Within 24 hours</option>
                      <option value="high">Pretty urgent</option>
                      <option value="urgent">ASAP - It's critical!</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{color: '#fbbf24'}}>What's the problem?</label>
                    <textarea
                      value={ticketData.issue}
                      onChange={(e) => setTicketData({...ticketData, issue: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none text-base"
                      placeholder="Describe what's happening..."
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    />
                  </div>
                  <button
                    onClick={handleTicketSubmit}
                    className="w-full px-4 py-4 rounded-lg font-bold text-lg transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      color: '#000',
                      boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                    }}
                  >
                    Submit Request
                  </button>
                  <button
                    onClick={() => setShowTicket(false)}
                    className="w-full px-4 py-3 font-semibold transition-colors"
                    style={{color: '#d97706'}}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-2xl shadow-2xl p-6" style={{
                  background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
                  border: '2px solid rgba(251, 191, 36, 0.5)',
                  boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
                }}>
                  <MessageSquare size={36} className="mb-3" style={{color: '#fbbf24'}} />
                  <h3 className="text-2xl font-bold mb-3" style={{color: '#fbbf24'}}>How We Work</h3>
                  <ul className="space-y-2 text-base font-medium" style={{color: '#f5f5f4'}}>
                    <li>• Tell us your tech problem</li>
                    <li>• Get instant help from the HIT man</li>
                    <li>• Still stuck? We'll handle it personally</li>
                    <li>• Your tech troubles disappear</li>
                  </ul>
                </div>

                <div className="rounded-2xl shadow-2xl p-6" style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(217, 119, 6, 0.4)',
                  boxShadow: '0 0 30px rgba(217, 119, 6, 0.2)'
                }}>
                  <h3 className="font-bold mb-4 text-xl" style={{color: '#fbbf24'}}>Common Problems We Fix</h3>
                  <div className="space-y-2">
                    {commonIssues.map((issue, idx) => (
                      <button
                        key={idx}
                        onClick={() => setInput(issue)}
                        className="w-full text-left px-4 py-3 text-base rounded-lg transition-all font-medium"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid rgba(217, 119, 6, 0.4)',
                          color: '#f5f5f4'
                        }}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl shadow-2xl p-6" style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgba(217, 119, 6, 0.3)'
                }}>
                  <h3 className="font-bold text-lg mb-2" style={{color: '#fbbf24'}}>We're Here For You</h3>
                  <p className="text-sm leading-relaxed" style={{color: '#d97706'}}>
                    No question is too simple. No problem is too small. We treat everyone like family and explain everything in plain English.
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