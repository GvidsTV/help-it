import React from 'react';
import { Check, Crown, Users, Zap, Shield, Star, DollarSign } from 'lucide-react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Associate',
      subtitle: 'Complimentary Diagnostic Access',
      price: 'FREE',
      period: '',
      description: 'Get clarity before you commit',
      features: [
        'Unlimited AI self-service support',
        'Human diagnosis on demand',
        'Clear explanation of what\'s broken & why',
        'Options to fix (no obligation)',
        'Execution requires payment'
      ],
      cta: 'Text "HIT" to Start',
      link: 'sms:3214569810',
      featured: false,
      icon: Users,
      note: 'Diagnosis only - no execution without payment'
    },
    {
      name: 'Made Man',
      subtitle: 'Priority Operator',
      price: '$39',
      period: '/month',
      description: 'Execution starts here',
      features: [
        'Priority response (jump the queue)',
        'Discounted pay-per-fix rates',
        'Monthly system check-in',
        'Email + SMS support',
        'Fair-use execution included on minor fixes'
      ],
      cta: 'Join Made Man',
      link: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8MY58314S2792274UNFMGPGY',
      featured: false,
      icon: Star,
      note: null
    },
    {
      name: 'Capo',
      subtitle: 'Systems Architect',
      price: '$129',
      period: '/month',
      description: 'You stop reacting. You start building.',
      features: [
        'Same-day emergency response',
        'Website & web-app development (light-medium scope)',
        'AI + API integrations',
        'Automation & workflow builds',
        'System optimization & oversight',
        'Proactive recommendations'
      ],
      cta: 'Become Capo',
      link: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-5FK785876G942591JNFMGQRY',
      featured: true,
      icon: Crown,
      note: null
    },
    {
      name: 'Don',
      subtitle: 'Executive Command',
      price: '$249',
      period: '/month',
      description: 'You don\'t worry about tech anymore',
      features: [
        'Same-hour emergency access',
        'Full business system architecture',
        'Proactive infrastructure strategy',
        'Unlimited execution (fair-use)',
        'Ownership of outcomes, not tasks',
        'Strategic decision authority'
      ],
      cta: 'Request Don Access',
      link: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9CB76842GW6811206NFMGRPI',
      featured: false,
      icon: Zap,
      note: null
    }
  ];

  const payPerFix = [
    {
      name: 'Quick Hit',
      time: '15–30 minutes',
      price: '$59',
      link: 'https://www.paypal.com/ncp/payment/ABDSZQ9DUARHJ'
    },
    {
      name: 'Standard Job',
      time: '30–60 minutes',
      price: '$99',
      link: 'https://www.paypal.com/ncp/payment/WZJK7BRRRSB8W'
    },
    {
      name: 'Heavy Operation',
      time: '1–2 hours',
      price: '$149',
      link: 'https://www.paypal.com/ncp/payment/YMHWTE7XG6TPU'
    }
  ];

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
          <div className="mb-4">
            <span className="text-sm font-bold tracking-widest" style={{
              color: '#fbbf24',
              textTransform: 'uppercase',
              letterSpacing: '0.2em'
            }}>
              CHOOSE YOUR ACCESS LEVEL
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
          }}>
            Join The Family
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: '#f5f5f4'}}>
            Every tier includes AI-powered instant support. Higher tiers get priority access and deeper execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-base" style={{color: '#d97706'}}>
            <span>Questions?</span>
            <a href="sms:4075041287" style={{color: '#fbbf24', textDecoration: 'underline'}}>
              Text 407-504-1287
            </a>
            <span>or</span>
            <a href="mailto:support@helpitapp.com" style={{color: '#fbbf24', textDecoration: 'underline'}}>
              email us
            </a>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                  tier.featured ? 'transform scale-105' : 'hover:transform hover:scale-105'
                }`}
                style={{
                  background: tier.featured 
                    ? 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)'
                    : 'rgba(0, 0, 0, 0.7)',
                  border: tier.featured 
                    ? '3px solid #fbbf24' 
                    : '2px solid rgba(217, 119, 6, 0.4)',
                  boxShadow: tier.featured 
                    ? '0 0 60px rgba(251, 191, 36, 0.4)' 
                    : '0 0 40px rgba(217, 119, 6, 0.2)'
                }}
              >
                {tier.featured && (
                  <div className="text-center py-2" style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                    color: '#000'
                  }}>
                    <span className="font-bold text-sm tracking-widest">MOST POPULAR</span>
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-3">
                    <Icon size={32} style={{color: '#fbbf24'}} />
                  </div>

                  <h3 className="text-2xl font-bold mb-1" style={{color: '#fbbf24'}}>
                    {tier.name}
                  </h3>
                  
                  <p className="text-xs mb-4" style={{color: '#d97706', fontStyle: 'italic'}}>
                    {tier.subtitle}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold" style={{color: '#f5f5f4'}}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-base" style={{color: '#999'}}>
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mt-1" style={{color: '#d97706'}}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="flex-shrink-0 mt-0.5" style={{color: '#fbbf24'}} />
                        <span className="text-sm" style={{color: '#f5f5f4'}}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {tier.note && (
                    <p className="text-xs mb-4 px-3 py-2 rounded" style={{
                      background: 'rgba(217, 119, 6, 0.1)',
                      color: '#d97706',
                      border: '1px solid rgba(217, 119, 6, 0.3)'
                    }}>
                      {tier.note}
                    </p>
                  )}

                  <a
                    href={tier.link}
                    className="block w-full py-3 rounded-lg font-bold text-base text-center transition-all"
                    style={{
                      background: tier.featured 
                        ? 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
                        : 'rgba(217, 119, 6, 0.2)',
                      border: tier.featured 
                        ? '2px solid #fbbf24'
                        : '2px solid rgba(217, 119, 6, 0.4)',
                      color: tier.featured ? '#000' : '#fbbf24',
                      boxShadow: tier.featured 
                        ? '0 0 30px rgba(251, 191, 36, 0.4)'
                        : 'none',
                      textDecoration: 'none'
                    }}
                  >
                    {tier.cta}
                  </a>

                  {!tier.featured && tier.price !== 'FREE' && (
                    <p className="text-xs text-center mt-2" style={{color: '#999'}}>
                      Questions?{' '}
                      <a href="mailto:support@helpitapp.com" style={{color: '#fbbf24'}}>
                        Email us
                      </a>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pay-Per-Fix Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4" style={{
              color: '#fbbf24',
              textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
            }}>
              Pay-Per-Fix Options
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#f5f5f4'}}>
              Need one-time help? Choose based on complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {payPerFix.map((option, index) => (
              <div
                key={index}
                className="rounded-xl p-6 transition-all hover:transform hover:scale-105"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(217, 119, 6, 0.4)',
                  boxShadow: '0 0 30px rgba(217, 119, 6, 0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <DollarSign size={28} style={{color: '#fbbf24'}} />
                  <span className="text-3xl font-bold" style={{color: '#fbbf24'}}>
                    {option.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2" style={{color: '#f5f5f4'}}>
                  {option.name}
                </h3>
                
                <p className="text-sm mb-4" style={{color: '#d97706'}}>
                  {option.time}
                </p>

                <a
                  href={option.link}
                  className="block w-full py-3 rounded-lg font-semibold text-center transition-all"
                  style={{
                    background: 'rgba(217, 119, 6, 0.2)',
                    border: '2px solid rgba(217, 119, 6, 0.4)',
                    color: '#fbbf24',
                    textDecoration: 'none'
                  }}
                >
                  Pay Now
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{color: '#999'}}>
            After payment, text <a href="sms:4075041287" style={{color: '#fbbf24'}}>407-504-1287</a> with your receipt
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{
            color: '#fbbf24',
            textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
          }}>
            How The Family Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Something Breaks',
                desc: 'Website down? Email broken? System error? You\'ve got a problem.'
              },
              {
                num: '2',
                title: 'Text "HIT"',
                desc: 'Text the word "HIT" to 407-504-1287 or email support@helpitapp.com'
              },
              {
                num: '3',
                title: 'Get Diagnosis',
                desc: 'Free expert diagnosis: what\'s broken, why it happened, what it costs to fix.'
              },
              {
                num: '4',
                title: 'Choose & Proceed',
                desc: 'Pay-per-fix or upgrade to membership. Then we handle it immediately.'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(217, 119, 6, 0.4)'
                }}
              >
                <div className="text-5xl font-bold mb-3" style={{color: '#fbbf24'}}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: '#fbbf24'}}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{color: '#f5f5f4'}}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center p-12 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
          border: '3px solid rgba(251, 191, 36, 0.5)',
          boxShadow: '0 0 60px rgba(251, 191, 36, 0.3)'
        }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{
            color: '#fbbf24',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.4)'
          }}>
            Ready to Join The Family?
          </h2>
          <p className="text-xl mb-8" style={{color: '#f5f5f4'}}>
            Text "HIT" to <a href="sms:4075041287" style={{color: '#fbbf24', textDecoration: 'underline', fontWeight: 'bold'}}>407-504-1287</a> to get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:4075041287"
              className="px-10 py-4 rounded-lg font-bold text-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                color: '#000',
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)',
                border: '2px solid #fbbf24',
                textDecoration: 'none'
              }}
            >
              Text "HIT" Now
            </a>
            <a
              href="mailto:support@helpitapp.com"
              className="px-10 py-4 rounded-lg font-bold text-lg transition-all"
              style={{
                background: 'rgba(217, 119, 6, 0.2)',
                border: '2px solid rgba(217, 119, 6, 0.4)',
                color: '#fbbf24',
                textDecoration: 'none'
              }}
            >
              Or Email Us
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs max-w-3xl mx-auto" style={{color: '#999'}}>
            Fair-use policy applies. Help IT provides configuration, development, and optimization services only. 
            All third-party software, hosting, domains, APIs, and tools are purchased and owned by the client.
          </p>
        </div>

      </div>
    </div>
  );
}

