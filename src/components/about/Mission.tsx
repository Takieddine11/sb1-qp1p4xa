import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide exceptional corporate housing solutions that enable businesses to focus on what matters most - their growth and success.'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in transparency, security, and creating comfortable environments that feel like home for every professional.'
  },
  {
    icon: Globe,
    title: 'Our Vision',
    description: 'To become the global standard in corporate housing, known for our commitment to excellence and innovative solutions.'
  }
];

export function Mission() {
  return (
    <div className="relative bg-[#02081d] py-24">
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
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-[#cc73fB]/20 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300"
            >
              <item.icon className="h-12 w-12 text-[#cc73fB] mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}