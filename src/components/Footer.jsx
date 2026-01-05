import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 py-12" style={{
      background: 'rgba(0, 0, 0, 0.95)',
      borderTop: '2px solid rgba(217, 119, 6, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#fbbf24'}}>
              GET HELP NOW
            </h3>
            
            <div className="space-y-3">
              <a
                href="sms:3214569810"
                className="flex items-center gap-3 transition-all hover:transform hover:translate-x-1"
                style={{textDecoration: 'none'}}
              >
                <Phone size={20} style={{color: '#fbbf24'}} />
                <div>
                  <p className="text-xs" style={{color: '#999'}}>
                    Text "HIT" to
                  </p>
                  <p className="text-base font-bold" style={{color: '#fbbf24'}}>
                    407-504-1287
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@helpitapp.com"
                className="flex items-center gap-3 transition-all hover:transform hover:translate-x-1"
                style={{textDecoration: 'none'}}
              >
                <Mail size={20} style={{color: '#d97706'}} />
                <div>
                  <p className="text-xs" style={{color: '#999'}}>
                    Email
                  </p>
                  <p className="text-base font-semibold" style={{color: '#fbbf24'}}>
                    support@helpitapp.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#fbbf24'}}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-base transition-all hover:transform hover:translate-x-1 inline-block"
                  style={{color: '#f5f5f4', textDecoration: 'none'}}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-base transition-all hover:transform hover:translate-x-1 inline-block"
                  style={{color: '#f5f5f4', textDecoration: 'none'}}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/setup" 
                  className="text-base transition-all hover:transform hover:translate-x-1 inline-block"
                  style={{color: '#f5f5f4', textDecoration: 'none'}}
                >
                  Setup Hub
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-base transition-all hover:transform hover:translate-x-1 inline-block"
                  style={{color: '#f5f5f4', textDecoration: 'none'}}
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#fbbf24'}}>
              POLICIES
            </h3>
            <div className="space-y-3">
              <div className="text-sm" style={{color: '#999'}}>
                <p className="mb-2">
                  <strong style={{color: '#d97706'}}>Fair-use policy applies.</strong>
                </p>
                <p className="mb-2">
                  We provide configuration, development, and optimization services only.
                </p>
                <p>
                  All infrastructure (hosting, domains, software) is owned by client.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{borderColor: 'rgba(217, 119, 6, 0.3)'}} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2" style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              HELP IT
            </div>
            <p className="text-sm" style={{color: '#999'}}>
              The HIT Man - Your Digital Concierge
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm mb-2" style={{color: '#999'}}>
              © {new Date().getFullYear()} Help IT. All rights reserved.
            </p>
            <p className="text-xs" style={{color: '#78350f'}}>
              IT problems? Text "HIT" to 407-504-1287
            </p>
          </div>
        </div>

        {/* Emergency CTA Banner */}
        <div className="mt-8 p-4 rounded-lg text-center" style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%)',
          border: '2px solid rgba(217, 119, 6, 0.3)'
        }}>
          <p className="text-sm md:text-base" style={{color: '#f5f5f4'}}>
            <strong style={{color: '#fbbf24'}}>IT Problem Right Now?</strong>{' '}
            <a href="sms:3214569810" style={{color: '#fbbf24', textDecoration: 'underline', fontWeight: 'bold'}}>
              Text "HIT" to 407-504-1287
            </a>
            {' '}for immediate diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}

