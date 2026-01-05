import React from 'react';
import { Server, DollarSign, MessageSquare, CheckCircle, Globe, Mail, Shield } from 'lucide-react';

export default function SetupHubPage() {
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
          }}>
            Activate Your Business Systems
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#f5f5f4'}}>
            Get your website, email, and infrastructure online in 10 minutes.
          </p>
        </div>

        {/* Setup Steps */}
        <div className="space-y-8 mb-16">
          
          {/* Step 1: Purchase Hosting */}
          <div className="p-8 rounded-xl" style={{
            background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
            border: '3px solid rgba(251, 191, 36, 0.5)',
            boxShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
          }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#000'
              }}>
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3" style={{color: '#fbbf24'}}>
                  Purchase Hosting
                </h2>
                <p className="text-base mb-4" style={{color: '#f5f5f4'}}>
                  You'll own the account. We'll manage it for you.
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-lg" style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}>
              <Server size={24} style={{color: '#fbbf24', marginBottom: '0.5rem'}} />
              <p className="text-sm mb-3" style={{color: '#f5f5f4'}}>
                <strong style={{color: '#fbbf24'}}>Recommended:</strong> Hostinger Business Plan
              </p>
              <ul className="text-sm space-y-1 mb-3" style={{color: '#f5f5f4'}}>
                <li>• Professional business email included</li>
                <li>• Free SSL certificate & domain</li>
                <li>• Fast SSD storage & backups</li>
                <li>• 30-day money-back guarantee</li>
              </ul>
              <p className="text-xs" style={{color: '#d97706'}}>
                Choose any Business plan. Keep your login credentials — you'll add me after checkout.
              </p>
            </div>

            <a
              href="https://hostinger.com?REFERRALCODE=FOCGVIDSTQPB"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-lg font-bold text-lg text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#000',
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)',
                border: '2px solid #fbbf24',
                textDecoration: 'none'
              }}
            >
              Start Infrastructure Setup
            </a>

            <p className="text-xs text-center mt-3" style={{color: '#999'}}>
              You purchase hosting directly from Hostinger. You will own the account. Help IT does not provide hosting.
            </p>
          </div>

          {/* Step 2: Pay Setup Fee */}
          <div className="p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(217, 119, 6, 0.4)',
            boxShadow: '0 0 30px rgba(217, 119, 6, 0.2)'
          }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
                color: '#fff'
              }}>
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3" style={{color: '#fbbf24'}}>
                  Activate Setup
                </h2>
                <p className="text-base mb-4" style={{color: '#f5f5f4'}}>
                  One-time fee covers complete configuration.
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-lg" style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(217, 119, 6, 0.3)'
            }}>
              <DollarSign size={24} style={{color: '#fbbf24', marginBottom: '0.5rem'}} />
              <p className="text-2xl font-bold mb-3" style={{color: '#fbbf24'}}>
                $79 Setup Fee
              </p>
              <p className="text-sm mb-3" style={{color: '#f5f5f4'}}>
                <strong>Includes:</strong>
              </p>
              <ul className="text-sm space-y-1" style={{color: '#f5f5f4'}}>
                <li>• Domain connection & DNS configuration</li>
                <li>• Hosting environment setup</li>
                <li>• Business email configuration (you@yourdomain.com)</li>
                <li>• SSL certificate installation</li>
                <li>• Speed & security optimization</li>
                <li>• Complete technical handoff</li>
              </ul>
            </div>

            <a
              href="https://www.paypal.com/ncp/payment/D5V2KGGLYGH3A"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-lg font-bold text-lg text-center transition-all"
              style={{
                background: 'rgba(217, 119, 6, 0.3)',
                border: '2px solid rgba(217, 119, 6, 0.5)',
                color: '#fbbf24',
                textDecoration: 'none'
              }}
            >
              Pay $79 Setup Fee
            </a>
          </div>

          {/* Step 3: Text DONE */}
          <div className="p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(217, 119, 6, 0.4)',
            boxShadow: '0 0 30px rgba(217, 119, 6, 0.2)'
          }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
                color: '#fff'
              }}>
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3" style={{color: '#fbbf24'}}>
                  Confirm Completion
                </h2>
                <p className="text-base mb-4" style={{color: '#f5f5f4'}}>
                  Let us know you're ready for activation.
                </p>
              </div>
            </div>

            <div className="mb-6 p-6 rounded-lg text-center" style={{
              background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%)',
              border: '2px solid rgba(251, 191, 36, 0.3)'
            }}>
              <MessageSquare size={32} style={{color: '#fbbf24', margin: '0 auto 1rem'}} />
              <p className="text-lg mb-3" style={{color: '#f5f5f4'}}>
                After completing both steps above, text:
              </p>
              <div className="text-4xl font-bold mb-3" style={{color: '#fbbf24'}}>
                DONE
              </div>
              <p className="text-lg mb-4" style={{color: '#f5f5f4'}}>
                to
              </p>
              <a
                href="sms:4075041287"
                className="inline-block text-3xl font-bold"
                style={{
                  color: '#fbbf24',
                  textDecoration: 'underline'
                }}
              >
                407-504-1287
              </a>
            </div>

            <div className="p-4 rounded-lg" style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(217, 119, 6, 0.3)'
            }}>
              <p className="text-sm mb-2" style={{color: '#fbbf24'}}>
                <strong>What happens next:</strong>
              </p>
              <ul className="text-sm space-y-1" style={{color: '#f5f5f4'}}>
                <li>• I'll send instructions to add me as admin</li>
                <li>• Your environment is configured within 24 hours</li>
                <li>• You receive complete access details</li>
                <li>• Your business systems are live</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Requirements Section */}
        <div className="mb-16 p-8 rounded-xl" style={{
          background: 'rgba(0, 0, 0, 0.7)',
          border: '2px solid rgba(217, 119, 6, 0.4)'
        }}>
          <h2 className="text-2xl font-bold mb-6" style={{color: '#fbbf24'}}>
            Business Identity Requirement
          </h2>
          
          <p className="text-base mb-4" style={{color: '#f5f5f4'}}>
            To complete your setup, you must have:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg text-center" style={{
              background: 'rgba(217, 119, 6, 0.1)',
              border: '1px solid rgba(217, 119, 6, 0.3)'
            }}>
              <Globe size={32} style={{color: '#fbbf24', margin: '0 auto 0.5rem'}} />
              <h3 className="text-base font-bold mb-1" style={{color: '#fbbf24'}}>
                Domain
              </h3>
              <p className="text-sm" style={{color: '#f5f5f4'}}>
                yourbusiness.com
              </p>
            </div>

            <div className="p-4 rounded-lg text-center" style={{
              background: 'rgba(217, 119, 6, 0.1)',
              border: '1px solid rgba(217, 119, 6, 0.3)'
            }}>
              <Server size={32} style={{color: '#fbbf24', margin: '0 auto 0.5rem'}} />
              <h3 className="text-base font-bold mb-1" style={{color: '#fbbf24'}}>
                Hosting
              </h3>
              <p className="text-sm" style={{color: '#f5f5f4'}}>
                Business plan
              </p>
            </div>

            <div className="p-4 rounded-lg text-center" style={{
              background: 'rgba(217, 119, 6, 0.1)',
              border: '1px solid rgba(217, 119, 6, 0.3)'
            }}>
              <Mail size={32} style={{color: '#fbbf24', margin: '0 auto 0.5rem'}} />
              <h3 className="text-base font-bold mb-1" style={{color: '#fbbf24'}}>
                Business Email
              </h3>
              <p className="text-sm" style={{color: '#f5f5f4'}}>
                you@yourdomain.com
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{
            background: 'rgba(251, 191, 36, 0.1)',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <p className="text-sm" style={{color: '#fbbf24'}}>
              <strong>Why this matters:</strong>
            </p>
            <p className="text-sm mt-2" style={{color: '#f5f5f4'}}>
              Business email improves trust, prevents spam/delivery issues, and is required for automation, AI tools, CRM, and payment systems.
            </p>
          </div>
        </div>

        {/* Boundaries Section */}
        <div className="p-8 rounded-xl" style={{
          background: 'rgba(0, 0, 0, 0.5)',
          border: '2px solid rgba(217, 119, 6, 0.3)'
        }}>
          <h2 className="text-2xl font-bold mb-4" style={{color: '#fbbf24'}}>
            Service Boundaries
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#fbbf24'}}>
                ✅ What We Provide
              </h3>
              <ul className="text-sm space-y-2" style={{color: '#f5f5f4'}}>
                <li>• Configuration & optimization</li>
                <li>• Development & integration</li>
                <li>• System management</li>
                <li>• Ongoing support</li>
                <li>• Emergency response</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#fbbf24'}}>
                ❌ What We Don't Provide
              </h3>
              <ul className="text-sm space-y-2" style={{color: '#f5f5f4'}}>
                <li>• Hardware</li>
                <li>• Hosting (you own it)</li>
                <li>• Software licenses</li>
                <li>• Email services</li>
                <li>• Domain registration</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{
            background: 'rgba(217, 119, 6, 0.1)',
            border: '1px solid rgba(217, 119, 6, 0.3)'
          }}>
            <p className="text-sm" style={{color: '#d97706'}}>
              <strong style={{color: '#fbbf24'}}>Note:</strong> Help IT provides configuration, development, and optimization services only. All third-party software, hosting, domains, APIs, and platforms are purchased and owned by the client.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-xl" style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%)',
          border: '2px solid rgba(251, 191, 36, 0.3)'
        }}>
          <h3 className="text-2xl font-bold mb-3" style={{color: '#fbbf24'}}>
            Need Help Choosing Hosting?
          </h3>
          <p className="text-base mb-6" style={{color: '#f5f5f4'}}>
            Text or email us before purchasing. We'll help you select the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="sms:4075041287"
              className="px-6 py-3 rounded-lg font-semibold text-base"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#000',
                textDecoration: 'none'
              }}
            >
              Text 407-504-1287
            </a>
            <a
              href="mailto:support@helpitapp.com"
              className="px-6 py-3 rounded-lg font-semibold text-base"
              style={{
                background: 'rgba(217, 119, 6, 0.2)',
                border: '2px solid rgba(217, 119, 6, 0.4)',
                color: '#fbbf24',
                textDecoration: 'none'
              }}
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

