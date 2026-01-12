import React from 'react'
import { Mail, MessageSquare, Clock, Zap } from 'lucide-react'

export default function ContactPage() {
  const gradientBg = {
    background: 'radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)'
  }
  
  const glowEffect = {
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0
  }

  return (
    <div className="min-h-screen" style={gradientBg}>
      <div style={glowEffect} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Contact The HIT Man
          </h1>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto">
            Direct access to expert support. No forms, no delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          <a
            href="sms:4075041287&body=HIT"
            className="group relative overflow-hidden bg-gradient-to-br from-amber-500/30 to-orange-700/20 backdrop-blur-sm border-3 border-amber-500/60 rounded-2xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-amber-500/30 border-3 border-amber-500/50">
                <MessageSquare size={40} className="text-amber-400" />
              </div>
              
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border-2 border-amber-500/40">
                  <Zap size={16} className="text-amber-400" />
                  <span className="text-sm font-bold text-amber-400 uppercase tracking-wide">
                    Fastest Response
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-amber-400">
                Text Us
              </h2>
              
              <p className="text-5xl font-bold mb-6 text-amber-300">
                407-504-1287
              </p>
              
              <p className="text-lg mb-4 text-gray-100">
                Text <span className="font-bold text-amber-400">HIT</span> and we'll take care of IT
              </p>

              <div className="flex items-center justify-center gap-2 text-amber-400">
                <Clock size={20} />
                <span className="text-base font-semibold">
                  Response within minutes
                </span>
              </div>
            </div>
          </a>

          <a
            href="mailto:support@helpitapp.com"
            className="group relative overflow-hidden bg-black/70 backdrop-blur-sm border-3 border-orange-700/50 rounded-2xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-orange-700/30 border-3 border-orange-600/50">
                <Mail size={40} className="text-orange-500" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-amber-400">
                Email Us
              </h2>
              
              <p className="text-2xl font-bold mb-6 text-amber-400">
                support@helpitapp.com
              </p>
              
              <p className="text-lg mb-6 text-gray-100">
                For detailed inquiries or attachments
              </p>

              <div className="flex items-center justify-center gap-2 mb-6 text-orange-500">
                <Clock size={20} />
                <span className="text-base font-semibold">
                  Response within 24 hours
                </span>
              </div>

              <div className="space-y-2 text-gray-400 text-sm">
                <p>✅ Screenshots welcome</p>
                <p>✅ Technical details</p>
                <p>✅ Complex issues</p>
              </div>
            </div>
          </a>

        </div>

        <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-br from-orange-700/20 to-amber-900/10 backdrop-blur-sm border-2 border-amber-500/40 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-amber-400">
            Response Times
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <MessageSquare size={24} className="text-amber-400" />
                <span className="font-semibold text-gray-100">Text Message</span>
              </div>
              <span className="font-bold text-lg text-amber-400">Within minutes</span>
            </div>
            
            <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm border border-orange-600/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Mail size={24} className="text-orange-500" />
                <span className="font-semibold text-gray-100">Email</span>
              </div>
              <span className="font-bold text-lg text-orange-500">Within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-16 bg-black/70 backdrop-blur-sm border-2 border-orange-700/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 text-amber-400">
            Business Hours
          </h3>
          <div className="space-y-2 mb-6 text-lg text-gray-100">
            <p>
              <span className="font-bold text-amber-400">Monday - Friday:</span>
              <span className="ml-2">8am - 8pm EST</span>
            </p>
            <p>
              <span className="font-bold text-amber-400">Saturday - Sunday:</span>
              <span className="ml-2">10am - 6pm EST</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-700/30 to-amber-600/20 border-2 border-amber-500/40 rounded-xl p-4">
            <p className="text-xl font-bold text-amber-400 mb-2">
              🚨 Emergency Support: 24/7
            </p>
            <p className="text-sm text-gray-100">
              Critical issues? We are always available.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-amber-500/30 to-orange-700/20 backdrop-blur-sm border-3 border-amber-500/50 rounded-3xl p-12 shadow-2xl shadow-amber-500/30">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold mb-4 text-amber-400">
            Got an IT Problem?
          </h3>
          <p className="text-xl mb-8 text-gray-100">
            The HIT Man is standing by.
          </p>
          <a
            href="sms:4075041287&body=HIT"
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-600 text-black px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            💬 Text HIT Now
          </a>
          <p className="text-sm mt-6 text-orange-400">
            407-504-1287 • support@helpitapp.com
          </p>
        </div>

      </div>
    </div>
  )
}

