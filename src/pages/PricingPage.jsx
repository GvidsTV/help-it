import React from 'react';
import { Check, Crown, Users, Zap, Shield, Star } from 'lucide-react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Associate',
      subtitle: 'Try before you commit',
      price: 'FREE',
      period: '',
      users: '1 User',
      tickets: '2 Tickets/Month',
      response: '72-hour response',
      features: [
        'AI-powered support',
        'Email support only',
        'Basic troubleshooting',
        'Common tech issues'
      ],
      cta: 'Start Free',
      paypalLink: null,
      featured: false,
      icon: Users
    },
    {
      name: 'Made Member',
      subtitle: 'For individuals',
      price: '$24.99',
      period: '/month',
      users: '1 User',
      tickets: '8 Tickets/Month',
      response: '48-hour response',
      features: [
        'Everything in Associate',
        'Chat + email support',
        'All device types',
        'Priority over free tier',
        'Detailed step-by-step guides'
      ],
      cta: 'Join Now',
      paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8SU45405P3284570ENFKM7XQ',
      featured: false,
      icon: Star
    },
    {
      name: 'Capo',
      subtitle: 'For small teams',
      price: '$64.99',
      period: '/month',
      users: '3 Users',
      tickets: '24 Pooled Tickets',
      response: '24-hour response',
      features: [
        'Everything in Made Member',
        'Pooled ticket system',
        'Priority queue',
        'Phone support available',
        'Family discount (save $10)',
        'Team dashboard'
      ],
      cta: 'Join the Crew',
      paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9YF266645K386371BNFKNHFQ',
      featured: true,
      icon: Crown
    },
    {
      name: 'Consigliere',
      subtitle: 'For serious operations',
      price: '$149.99',
      period: '/month',
      users: '8 Users',
      tickets: '50 Pooled Tickets',
      response: '12-hour response',
      features: [
        'Everything in Capo',
        'Top priority access',
        '1 phone call per month',
        'Dedicated account rep',
        'Advanced troubleshooting',
        'Custom solutions'
      ],
      cta: 'Get VIP Treatment',
      paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6H041238EC770673UNFKNIUQ',
      featured: false,
      icon: Shield
    },
    {
      name: 'Don',
      subtitle: 'Run the operation',
      price: '$249.99',
      period: '/month',
      users: '15 Users',
      tickets: '80 Pooled Tickets',
      response: '6-hour response',
      features: [
        'Everything in Consigliere',
        'VIP priority (front of line)',
        '3 phone calls per month',
        'White-glove service',
        'Custom onboarding',
        'Business tech consulting'
      ],
      cta: 'Take Control',
      paypalLink: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-70S48949CM762134GNFKNJYA',
      featured: false,
      icon: Zap
    },
    {
      name: 'The Commission',
      subtitle: 'Enterprise solutions',
      price: 'Custom',
      period: '',
      users: 'Unlimited',
      tickets: 'Unlimited Everything',
      response: 'Custom SLA',
      features: [
        'Dedicated support team',
        'SLA guarantees',
        'Custom integrations',
        '24/7 phone support',
        'On-site visits available',
        'Whatever you need'
      ],
      cta: 'Contact Us',
      paypalLink: null,
      featured: false,
      icon: Crown
    }
  ];

  const handleSubscribe = (tier) => {
    if (tier.paypalLink) {
      window.location.href = tier.paypalLink;
    } else if (tier.name === 'Associate') {
      alert('Free tier signup coming soon! For now, just start chatting on the homepage.');
      window.location.href = '/';
    } else {
      alert('Enterprise pricing - please email us at support@helpitapp.com');
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)'
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-bold tracking-widest" style={{
              color: '#fbbf24',
              textTransform: 'uppercase',
              letterSpacing: '0.2em'
            }}>
              CHOOSE YOUR TIER
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
          
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#f5f5f4'}}>
            Every tier includes AI-powered instant support. Higher tiers get priority access to The HIT Man and the crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

                <div className="p-8">
                  <div className="mb-4">
                    <Icon size={40} style={{color: '#fbbf24'}} />
                  </div>

                  <h3 className="text-3xl font-bold mb-2" style={{color: '#fbbf24'}}>
                    {tier.name}
                  </h3>
                  
                  <p className="text-sm mb-6" style={{color: '#d97706', fontStyle: 'italic'}}>
                    {tier.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold" style={{color: '#f5f5f4'}}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-lg" style={{color: '#999'}}>
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-sm font-semibold" style={{color: '#fbbf24'}}>
                      {tier.users} • {tier.tickets}
                    </div>
                    <div className="mt-1 text-sm" style={{color: '#d97706'}}>
                      {tier.response}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="flex-shrink-0 mt-0.5" style={{color: '#fbbf24'}} />
                        <span className="text-base" style={{color: '#f5f5f4'}}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(tier)}
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all"
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
                      cursor: 'pointer'
                    }}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12" style={{
            color: '#fbbf24',
            textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
          }}>
            How The Family Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)'
            }}>
              <div className="text-5xl font-bold mb-3" style={{color: '#fbbf24'}}>1</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>You Got a Problem</h3>
              <p className="text-base" style={{color: '#f5f5f4'}}>
                Computer slow? WiFi down? Phone acting up? Tell us what's wrong.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)'
            }}>
              <div className="text-5xl font-bold mb-3" style={{color: '#fbbf24'}}>2</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>AI Takes First Shot</h3>
              <p className="text-base" style={{color: '#f5f5f4'}}>
                Our AI diagnoses and solves 70% of issues instantly with step-by-step fixes.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)'
            }}>
              <div className="text-5xl font-bold mb-3" style={{color: '#fbbf24'}}>3</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>The HIT Man Handles It</h3>
              <p className="text-base" style={{color: '#f5f5f4'}}>
                Can't solve it with AI? Our expert technicians step in personally.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(217, 119, 6, 0.4)'
            }}>
              <div className="text-5xl font-bold mb-3" style={{color: '#fbbf24'}}>4</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#fbbf24'}}>Problem Solved</h3>
              <p className="text-base" style={{color: '#f5f5f4'}}>
                We don't stop until it's handled. That's the Family guarantee.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center p-12 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
          border: '3px solid rgba(251, 191, 36, 0.5)',
          boxShadow: '0 0 60px rgba(251, 191, 36, 0.3)'
        }}>
          <h2 className="text-5xl font-bold mb-6" style={{
            color: '#fbbf24',
            textShadow: '0 0 40px rgba(251, 191, 36, 0.4)'
          }}>
            Ready to Join The Family?
          </h2>
          <p className="text-2xl mb-8" style={{color: '#f5f5f4', fontStyle: 'italic'}}>
            The phone is ringing. What's it gonna be?
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-5 rounded-lg font-bold text-xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              color: '#000',
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)',
              border: '2px solid #fbbf24'
            }}
          >
            Choose Your Tier
          </button>
        </div>
      </div>
    </div>
  );
}