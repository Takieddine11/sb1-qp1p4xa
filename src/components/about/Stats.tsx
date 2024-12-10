import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, Globe2, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '65+',
    label: 'Properties Managed'
  },
  {
    icon: Users2,
    value: '500+',
    label: 'Corporate Clients'
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Cities Covered'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction'
  }
];

export function Stats() {
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-10 w-10 text-[#cc73fB] mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}