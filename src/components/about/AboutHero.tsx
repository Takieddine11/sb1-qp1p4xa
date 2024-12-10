import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative min-h-[60vh] bg-[#02081d] flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(204, 115, 251, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(204, 115, 251, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            mask: 'radial-gradient(circle at 50% 50%, black, transparent)'
          }}
        />
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#cc73fB]/20 rounded-full blur-[128px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Building2 className="h-16 w-16 text-[#cc73fB] mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">About GlobalStay</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
         we revolutionize corporate housing by offering secure, comfortable accommodations and handling all logistics, including hotels, flights, and transportation. We provide a seamless, hassle-free experience for businesses and high-profile individuals, ensuring privacy, security, and the comfort of home, so you can focus on what matters most.
          </p>
        </motion.div>
      </div>
    </div>
  );
}