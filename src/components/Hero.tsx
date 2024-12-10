import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { QuoteForm } from './QuoteForm';

export function Hero() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#02081d] pt-20">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '2rem 2rem',
            mask: 'radial-gradient(circle at 50% 50%, black, transparent)'
          }}
        />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#cc73fB]/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        
        {/* Animated particles */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#cc73fB]/10 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-700/10 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight">
              Corporate housing logistics solved, short-term stays stress-free.
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Providing comfortable corporate housing solutions worldwide for relocating professionals.
            </p>
            <div className="mt-10">
              <button 
                onClick={() => setIsQuoteFormOpen(true)}
                className="group relative inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.4), rgba(204, 115, 251, 0.4), rgba(72, 52, 212, 0.4))',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 5s ease infinite',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <MapPin className="h-5 w-5 mr-2" />
                <span className="relative font-semibold tracking-wide">Get your free quote today</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Spline Animation */}
        <div className="w-full lg:w-1/2 h-[600px] mt-12 lg:mt-0 relative">
          <div className="absolute inset-0 lg:relative w-full h-full" style={{ position: 'sticky', top: '100px' }}>
            <Spline 
              scene="https://prod.spline.design/ySXoPXUb3sM260h0/scene.splinecode"
              style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0 }}
            />
          </div>
        </div>
      </div>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </div>
  );
}