import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      {/* Emergency Contact Strip */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.15) 0%, rgba(146, 64, 14, 0.15) 100%)',
        borderBottom: '1px solid rgba(217, 119, 6, 0.3)',
        padding: '10px 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 100
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <span className="font-bold" style={{color: '#fbbf24'}}>
              ⚡ IT PROBLEM RIGHT NOW?
            </span>
            <span style={{color: '#f5f5f4'}}>
              Text <strong style={{color: '#fbbf24'}}>"HIT"</strong> to{' '}
              <a href="sms:4075041287" style={{color: '#fbbf24', textDecoration: 'underline', fontWeight: 'bold'}}>
                407-504-1287
              </a>
              {' '}or email{' '}
              <a href="mailto:support@helpitapp.com" style={{color: '#fbbf24', textDecoration: 'underline'}}>
                support@helpitapp.com
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50" style={{
        background: 'rgba(0, 0, 0, 0.95)',
        borderBottom: '2px solid rgba(217, 119, 6, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
              }}>
                HELP IT
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/"
                className="text-base font-semibold transition-all"
                style={{
                  color: isActive('/') ? '#fbbf24' : '#f5f5f4',
                  textShadow: isActive('/') ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none'
                }}
              >
                HOME
              </Link>
              
              <Link 
                to="/pricing"
                className="text-base font-semibold transition-all"
                style={{
                  color: isActive('/pricing') ? '#fbbf24' : '#f5f5f4',
                  textShadow: isActive('/pricing') ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none'
                }}
              >
                PRICING
              </Link>

              <Link 
                to="/setup"
                className="text-base font-semibold transition-all"
                style={{
                  color: isActive('/setup') ? '#fbbf24' : '#f5f5f4',
                  textShadow: isActive('/setup') ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none'
                }}
              >
                SETUP
              </Link>

              <Link 
                to="/contact"
                className="text-base font-semibold transition-all"
                style={{
                  color: isActive('/contact') ? '#fbbf24' : '#f5f5f4',
                  textShadow: isActive('/contact') ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none'
                }}
              >
                CONTACT
              </Link>

              {/* CTA Button */}
              <Link
                to="/pricing"
                className="px-6 py-2 rounded-lg font-bold text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)',
                  border: '2px solid #fbbf24'
                }}
              >
                JOIN THE FAMILY
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-3">
              <Link
                to="/pricing"
                className="px-4 py-2 rounded-lg font-bold text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                }}
              >
                PRICING
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

