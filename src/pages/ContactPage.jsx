import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Netlify Forms automatically handles the submission
    // Just show success message
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)'
    }}>
      {/* Background Effect */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
          }}>
            Contact The HIT Man
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: '#f5f5f4'}}>
            Prefer a form? We've got you. For faster response, text or email us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Methods */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{color: '#fbbf24'}}>
              Get Help Now
            </h2>

            {/* Text Option */}
            <a
              href="sms:4075041287"
              className="block p-6 rounded-xl mb-6 transition-all hover:transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
                border: '2px solid rgba(251, 191, 36, 0.5)',
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)',
                textDecoration: 'none'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{
                  background: 'rgba(251, 191, 36, 0.2)',
                  border: '2px solid rgba(251, 191, 36, 0.4)'
                }}>
                  <Phone size={28} style={{color: '#fbbf24'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>
                    Text "HIT" (Fastest)
                  </h3>
                  <p className="text-base mb-2" style={{color: '#f5f5f4'}}>
                    Get immediate diagnosis and response
                  </p>
                  <p className="text-2xl font-bold" style={{color: '#fbbf24'}}>
                    407-504-1287
                  </p>
                </div>
              </div>
            </a>

            {/* Email Option */}
            <a
              href="mailto:support@helpitapp.com"
              className="block p-6 rounded-xl mb-6 transition-all hover:transform hover:scale-105"
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                border: '2px solid rgba(217, 119, 6, 0.4)',
                boxShadow: '0 0 20px rgba(217, 119, 6, 0.2)',
                textDecoration: 'none'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{
                  background: 'rgba(217, 119, 6, 0.2)',
                  border: '2px solid rgba(217, 119, 6, 0.4)'
                }}>
                  <Mail size={28} style={{color: '#d97706'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>
                    Email Us
                  </h3>
                  <p className="text-base mb-2" style={{color: '#f5f5f4'}}>
                    For less urgent inquiries
                  </p>
                  <p className="text-lg font-semibold" style={{color: '#fbbf24'}}>
                    support@helpitapp.com
                  </p>
                </div>
              </div>
            </a>

            {/* Response Times */}
            <div className="p-6 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(217, 119, 6, 0.3)'
            }}>
              <h3 className="text-lg font-bold mb-4" style={{color: '#fbbf24'}}>
                Response Times
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{background: '#fbbf24'}} />
                  <span style={{color: '#f5f5f4'}}>
                    <strong style={{color: '#fbbf24'}}>Text:</strong> Within minutes
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{background: '#d97706'}} />
                  <span style={{color: '#f5f5f4'}}>
                    <strong style={{color: '#fbbf24'}}>Email:</strong> Within 24 hours
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{background: '#92400e'}} />
                  <span style={{color: '#f5f5f4'}}>
                    <strong style={{color: '#fbbf24'}}>Form:</strong> Within 48 hours
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="p-8 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)',
              boxShadow: '0 0 40px rgba(217, 119, 6, 0.2)'
            }}>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} style={{color: '#fbbf24', margin: '0 auto 1rem'}} />
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#fbbf24'}}>
                    Message Sent!
                  </h3>
                  <p className="text-base mb-6" style={{color: '#f5f5f4'}}>
                    We'll get back to you within 48 hours.
                  </p>
                  <p className="text-sm" style={{color: '#d97706'}}>
                    Need faster help?{' '}
                    <a href="sms:3214569810" style={{color: '#fbbf24', textDecoration: 'underline'}}>
                      Text us now
                    </a>
                  </p>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <h2 className="text-2xl font-bold mb-6" style={{color: '#fbbf24'}}>
                    Send Us a Message
                  </h2>

                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" style={{color: '#fbbf24'}}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-base focus:outline-none"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" style={{color: '#fbbf24'}}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-base focus:outline-none"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" style={{color: '#fbbf24'}}>
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-base focus:outline-none"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" style={{color: '#fbbf24'}}>
                      Issue Category *
                    </label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-base focus:outline-none"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                    >
                      <option value="">Select a category</option>
                      <option value="website-email">Website/Email Issue</option>
                      <option value="automation">Automation/Integration</option>
                      <option value="emergency">Emergency Support Needed</option>
                      <option value="general">General Inquiry</option>
                      <option value="setup">Setup Hub Question</option>
                      <option value="billing">Billing/Membership</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2" style={{color: '#fbbf24'}}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg text-base focus:outline-none resize-none"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '2px solid rgba(217, 119, 6, 0.4)',
                        color: '#f5f5f4'
                      }}
                      placeholder="Describe your issue or question..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                      color: '#000',
                      boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)',
                      border: '2px solid #fbbf24'
                    }}
                  >
                    <Send size={20} />
                    Send to HIT Man
                  </button>

                  <p className="text-xs text-center mt-4" style={{color: '#999'}}>
                    Need faster help?{' '}
                    <a href="sms:3214569810" style={{color: '#fbbf24'}}>
                      Text 407-504-1287
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-xl" style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%)',
          border: '2px solid rgba(251, 191, 36, 0.3)'
        }}>
          <h3 className="text-2xl font-bold mb-3" style={{color: '#fbbf24'}}>
            IT Problem Right Now?
          </h3>
          <p className="text-lg mb-6" style={{color: '#f5f5f4'}}>
            Don't wait for a form response. Get immediate diagnosis.
          </p>
          <a
            href="sms:3214569810"
            className="inline-block px-8 py-3 rounded-lg font-bold text-base transition-all"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              color: '#000',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)',
              border: '2px solid #fbbf24',
              textDecoration: 'none'
            }}
          >
            Text "HIT" to 407-504-1287
          </a>
        </div>

      </div>
    </div>
  );
}

