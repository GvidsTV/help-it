import React from ‘react’;
import { Mail, MessageSquare, Clock, Zap } from ‘lucide-react’;

export default function ContactPage() {
return (
<div className=“min-h-screen” style={{
background: ‘radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)’
}}>
<div style={{
position: ‘fixed’,
top: ‘-50%’,
left: ‘-50%’,
width: ‘200%’,
height: ‘200%’,
background: ‘radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)’,
pointerEvents: ‘none’,
zIndex: 0
}} />

```
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
        background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
      }}>
        Contact The HIT Man
      </h1>
      
      <p className="text-2xl max-w-3xl mx-auto mb-4" style={{color: '#f5f5f4'}}>
        We're here to help. Reach out directly.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
      
      <a
        href="sms:4075041287&body=HIT"
        className="block p-10 rounded-2xl transition-all hover:transform hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.4) 0%, rgba(217, 119, 6, 0.3) 100%)',
          border: '3px solid rgba(251, 191, 36, 0.6)',
          boxShadow: '0 0 50px rgba(251, 191, 36, 0.5)',
          textDecoration: 'none'
        }}
      >
        <div className="text-center">
          <div className="inline-block p-5 rounded-full mb-6" style={{
            background: 'rgba(251, 191, 36, 0.3)',
            border: '3px solid rgba(251, 191, 36, 0.5)'
          }}>
            <MessageSquare size={48} style={{color: '#fbbf24'}} />
          </div>
          
          <div className="mb-4">
            <div className="inline-block px-4 py-2 rounded-full mb-3" style={{
              background: 'rgba(251, 191, 36, 0.2)',
              border: '2px solid rgba(251, 191, 36, 0.4)'
            }}>
              <div className="flex items-center gap-2">
                <Zap size={16} style={{color: '#fbbf24'}} />
                <span className="text-sm font-bold" style={{color: '#fbbf24'}}>
                  FASTEST RESPONSE
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4" style={{color: '#fbbf24'}}>
            Text Us
          </h2>
          
          <p className="text-5xl font-bold mb-6" style={{color: '#fbbf24'}}>
            407-504-1287
          </p>
          
          <p className="text-lg mb-4" style={{color: '#f5f5f4'}}>
            Text <strong style={{color: '#fbbf24'}}>HIT</strong> and we'll take care of IT
          </p>

          <div className="flex items-center justify-center gap-2">
            <Clock size={20} style={{color: '#fbbf24'}} />
            <span className="text-base font-semibold" style={{color: '#fbbf24'}}>
              Response within minutes
            </span>
          </div>
        </div>
      </a>

      <a
        href="mailto:support@helpitapp.com"
        className="block p-10 rounded-2xl transition-all hover:transform hover:scale-105"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          border: '3px solid rgba(217, 119, 6, 0.5)',
          boxShadow: '0 0 30px rgba(217, 119, 6, 0.3)',
          textDecoration: 'none'
        }}
      >
        <div className="text-center">
          <div className="inline-block p-5 rounded-full mb-6" style={{
            background: 'rgba(217, 119, 6, 0.2)',
            border: '3px solid rgba(217, 119, 6, 0.4)'
          }}>
            <Mail size={48} style={{color: '#d97706'}} />
          </div>

          <h2 className="text-3xl font-bold mb-4" style={{color: '#fbbf24'}}>
            Email Us
          </h2>
          
          <p className="text-2xl font-bold mb-6" style={{color: '#fbbf24'}}>
            support@helpitapp.com
          </p>
          
          <p className="text-lg mb-6" style={{color: '#f5f5f4'}}>
            For detailed inquiries or attachments
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock size={20} style={{color: '#d97706'}} />
            <span className="text-base font-semibold" style={{color: '#d97706'}}>
              Response within 24 hours
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-sm" style={{color: '#999'}}>
              Screenshots welcome
            </p>
            <p className="text-sm" style={{color: '#999'}}>
              Technical details
            </p>
            <p className="text-sm" style={{color: '#999'}}>
              Complex issues
            </p>
          </div>
        </div>
      </a>

    </div>

    <div className="max-w-3xl mx-auto mb-16 p-8 rounded-xl" style={{
      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%)',
      border: '2px solid rgba(251, 191, 36, 0.4)'
    }}>
      <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#fbbf24'}}>
        Response Times
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg" style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(251, 191, 36, 0.3)'
        }}>
          <div className="flex items-center gap-3">
            <MessageSquare size={24} style={{color: '#fbbf24'}} />
            <span className="font-semibold" style={{color: '#f5f5f4'}}>Text Message</span>
          </div>
          <span className="font-bold text-lg" style={{color: '#fbbf24'}}>Within minutes</span>
        </div>
        
        <div className="flex items-center justify-between p-4 rounded-lg" style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(146, 64, 14, 0.3)'
        }}>
          <div className="flex items-center gap-3">
            <Mail size={24} style={{color: '#92400e'}} />
            <span className="font-semibold" style={{color: '#f5f5f4'}}>Email</span>
          </div>
          <span className="font-bold text-lg" style={{color: '#92400e'}}>Within 24 hours</span>
        </div>
      </div>
    </div>

    <div className="max-w-2xl mx-auto mb-16 p-8 rounded-xl text-center" style={{
      background: 'rgba(0, 0, 0, 0.7)',
      border: '2px solid rgba(217, 119, 6, 0.3)'
    }}>
      <h3 className="text-2xl font-bold mb-6" style={{color: '#fbbf24'}}>
        Business Hours
      </h3>
      <div className="space-y-2 mb-6">
        <p className="text-lg" style={{color: '#f5f5f4'}}>
          <strong style={{color: '#fbbf24'}}>Monday - Friday:</strong> 8am - 8pm EST
        </p>
        <p className="text-lg" style={{color: '#f5f5f4'}}>
          <strong style={{color: '#fbbf24'}}>Saturday - Sunday:</strong> 10am - 6pm EST
        </p>
      </div>
      <div className="p-4 rounded-lg" style={{
        background: 'rgba(217, 119, 6, 0.2)',
        border: '2px solid rgba(251, 191, 36, 0.4)'
      }}>
        <p className="text-xl font-bold" style={{color: '#fbbf24'}}>
          Emergency Support: 24/7
        </p>
        <p className="text-sm mt-2" style={{color: '#f5f5f4'}}>
          Critical issues? We're always available.
        </p>
      </div>
    </div>

    <div className="text-center p-12 rounded-2xl" style={{
      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)',
      border: '3px solid rgba(251, 191, 36, 0.5)',
      boxShadow: '0 0 50px rgba(251, 191, 36, 0.3)'
    }}>
      <div className="text-6xl mb-4">🎯</div>
      <h3 className="text-3xl font-bold mb-4" style={{color: '#fbbf24'}}>
        Got an IT Problem?
      </h3>
      <p className="text-xl mb-8" style={{color: '#f5f5f4'}}>
        The HIT Man is standing by.
      </p>
      <a
        href="sms:4075041287&body=HIT"
        className="inline-block px-10 py-4 rounded-lg font-bold text-xl transition-all hover:transform hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
          color: '#000',
          boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)',
          border: '3px solid #fbbf24',
          textDecoration: 'none'
        }}
      >
        Text HIT Now
      </a>
      <p className="text-sm mt-6" style={{color: '#d97706'}}>
        407-504-1287 • support@helpitapp.com
      </p>
    </div>

  </div>
</div>
```

);
}