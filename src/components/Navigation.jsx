import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50" style={{
      background: 'rgba(0, 0, 0, 0.95)',
      borderBottom: '2px solid rgba(217, 119, 6, 0.3)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <div className="md:hidden">
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
  );
}