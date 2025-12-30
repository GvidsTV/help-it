import React, { useState, useRef, useEffect } from 'react';
import { Send, Ticket, MessageSquare, Loader2, User, X, Mail, Image as ImageIcon, XCircle } from 'lucide-react';

export default function HelpIT() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to the family. I\'m the HIT man, and I\'m here to take care of all your tech problems. What\'s bothering you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [optionalEmail, setOptionalEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [ticketData, setTicketData] = useState({ name: '', email: '', phone: '', issue: '', priority: 'medium' });
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const messageCount = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length >= 7 && !showEmailPrompt && !optionalEmail) {
      setShowEmailPrompt(true);
    }
  }, [messages]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image too large! Please select an image under 5MB.');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPG, PNG, etc.)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setSelectedImage({
          data: base64String,
          type: file.type,
          name: file.name
        });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || loading) return;

    const userMessage = {
      role: 'user',
      content: input || 'Please analyze this image',
      image: selectedImage
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setLoading(true);
    messageCount.current += 1;

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

  const handleTicketSubmit = async () => {
    if (!ticketData.name || !ticketData.email || !ticketData.issue) {
      alert('Please fill in your name, email, and describe the issue');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/submit-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData)
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ ${data.message}\n\nWe'll take care of it within 24 hours.`);
        setTicketData({ name: '', email: '', phone: '', issue: '', priority: 'medium' });
        setShowTicket(false);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert('Failed to submit ticket. Please try again or email us directly.');
    }
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

      {showBanner && (
        <div className="relative z-20" style={{
          background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.15) 0%, rgba(146, 64, 14, 0.15) 100%)',
          borderBottom: '1px solid rgba(217, 119, 6, 0.3)',
          padding: '12px 20px'
        }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail size={20} style={{color: '#fbbf24'}} />
              <p className="text-sm" style={{color: '#fbbf24'}}>
                💡 Need follow-up help? Submit a ticket for email updates and dedicated support.
              </p>
            </div>
            <button onClick={() => setShowBanner(false)} style={{color: '#d97706'}}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Header with Logo Image */}
      <header className="relative z-10 border-b" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)',
        borderBottomColor: 'rgba(217, 119, 6, 0.3)',
        borderBottomWidth: '2px',
        boxShadow: '0 4px 20px rgba(217, 119, 6, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center">
          <img 
            src="/hit-man-bg.jpg" 
            alt="Help IT - Just Call the HIT Man" 
            style={{
              maxWidth: '600px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl shadow-2xl flex flex-col" style={{
              height: 'calc(100vh - 200px)',
              maxHeight: '900px',
              minHeight: '600px',
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
                    <div className={`max-w-[85%] rounded-2xl px-5 py-3 shadow-lg`} style={{
                      background: msg.role === 'user'
                        ? 'linear-gradient(135deg, rgba(68, 64, 60, 0.8) 0%, rgba(41, 37, 36, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)',
                      border: msg.role === 'user'
                        ? '1px solid rgba(120, 113, 108, 0.5)'
                        : '1px solid rgba(217, 119, 6, 0.4)',
                      color: '#f5f5f4',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      {msg.image && (
                        <img 
                          src={`data:${msg.image.type};base64,${msg.image.data}`}
                          alt="Uploaded"
                          className="rounded-lg mb-2 max-w-full"
                          style={{maxHeight: '300px', objectFit: 'contain'}}
                        />
                      )}
                      <p className="text-base leading-relaxed whitespace-pre-wrap" style={{wordBreak: 'break-word'}}>{msg.content}</p>
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
                      <p className="text-base" style={{color: '#fbbf24'}}>Analyzing...</p>
                    </div>
                  </div>
                )}

                {showEmailPrompt && (
                  <div className="rounded-2xl p-6 shadow-2xl border-2" style={{
                    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
                    borderColor: 'rgba(251, 191, 36, 0.6)'
                  }}>
                    <h3 className="font-bold text-lg mb-2" style={{color: '#fbbf24'}}>💼 The HIT Man here...</h3>
                    <p className="text-sm mb-4" style={{color: '#f5f5f4'}}>
                      If you need me to handle this personally, submit a ticket and I'll take care of it.
                    </p>
                    <div className="mb-4 text-sm" style={{color: '#d97706'}}>
                      <p className="mb-1">✓ Email updates on your issue</p>
                      <p className="mb-1">✓ Direct line to support</p>
                      <p>✓ Track your ticket status</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setShowEmailPrompt(false);
                          setShowTicket(true);
                        }}
                        className="flex-1 px-4 py-3 rounded-lg font-bold transition-all"
                        style={{
                          background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                          color: '#000'
                        }}
                      >
                        Submit Ticket
                      </button>
                      <button
                        onClick={() => setShowEmailPrompt(false)}
                        className="px-4 py-3 rounded-lg transition-all"
                        style={{
                          background: 'rgba(120, 113, 108, 0.3)',
                          color: '#d97706'
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="p-4" style={{
                background: 'rgba(0, 0, 0, 0.6)',
                borderTop: '2px solid rgba(217, 119, 6, 0.3)'
              }}>
                <div className="mb-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="emailUpdates"
                    checked={!!optionalEmail}
                    onChange={(e) => {
                      if (!e.target.checked) setOptionalEmail('');
                    }}
                    className="w-4 h-4"
                  />
                  <label htmlFor="emailUpdates" className="text-sm" style={{color: '#fbbf24'}}>
                    Need follow-up help? Submit your email.
                  </label>
                </div>
                {optionalEmail !== null && (
                  <input
                    type="email"
                    value={optionalEmail}
                    onChange={(e) => setOptionalEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 rounded-lg mb-2 text-sm"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(217, 119, 6, 0.4)',
                      color: '#f5f5f4'
                    }}
                  />
                )}

                {imagePreview && (
                  <div className="mb-3 relative inline-block">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="rounded-lg"
                      style={{maxHeight: '150px', maxWidth: '100%'}}
                    />
                    <button
                      onClick={clearImage}
                      className="absolute top-2 right-2 rounded-full p-1"
                      style={{
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: '#fbbf24'
                      }}
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                )}

                <div className="flex gap-2 mb-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageSelect}
                    accept="image/*"
                    style={{display: 'none'}}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.3) 100%)',
                      border: '2px solid rgba(217, 119, 6, 0.5)',
                      color: '#fbbf24'
                    }}
                    disabled={loading}
                  >
                    <ImageIcon size={20} />
                  </button>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tell me what's wrong..."
                    rows={2}
                    className="flex-1 px-4 py-3 rounded-xl focus:outline-none text-base resize-none"
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
                    disabled={loading || (!input.trim() && !selectedImage)}
                    className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                    style={{
                      background: loading || (!input.trim() && !selectedImage)
                        ? 'rgba(120, 113, 108, 0.5)'
                        : 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      color: '#000',
                      boxShadow: loading || (!input.trim() && !selectedImage)
                        ? 'none'
                        : '0 0 20px rgba(251, 191, 36, 0.4)',
                      cursor: loading || (!input.trim() && !selectedImage) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Send size={20} />
                  </button>
                </div>

                <button
                  onClick={() => setShowTicket(!showTicket)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                    color: '#000',
                    border: '2px solid #fbbf24',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                  }}
                >
                  <Ticket size={20} />
                  Get Personal Help
                </button>
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
                    No question is too simple. No problem is too small. We treat everyone like family and explain everything in plain English

.
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