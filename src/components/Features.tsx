import React from 'react';
import { Home, Car, Shield, CheckCircle } from 'lucide-react';
import { SecurityFeatures } from './SecurityFeatures';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Premium Security',
    description: 'State-of-the-art security systems and strict vetting processes for your safety.'
  },
  {
    icon: CheckCircle,
    title: 'Qualified Companies Only',
    description: 'We exclusively partner with verified corporate clients and thoroughly vetted tenants.'
  },
  {
    icon: Home,
    title: 'Premium Locations',
    description: 'Carefully selected properties in prime locations near corporate offices.'
  },
  {
    icon: Car,
    title: 'Transportation Service',
    description: 'Complimentary airport pickup and drop-off to your rental location.'
  }
];

export function Features() {
  return (
    <div className="relative py-24 bg-[#02081d]" id="services">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Setting the highest standards in corporate housing security and comfort
          </p>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-[#cc73fB]/20 hover:border-[#cc73fB]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#cc73fB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <feature.icon className="h-12 w-12 text-[#cc73fB]" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="group relative px-8 py-3 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#cc73fB] to-purple-600 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative text-white font-semibold">
              Learn More About Our Security
            </span>
          </button>
        </motion.div>
      </div>
      <SecurityFeatures />
    </div>
  );
}