import React from 'react';
import { ShieldCheck, Camera, Volume2, FileCheck } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Corporate Vetting',
    description: 'Thorough verification of all corporate clients before property access.'
  },
  {
    icon: Camera,
    title: 'Security Monitoring',
    description: 'External security cameras for 24/7 property monitoring and safety.'
  },
  {
    icon: Volume2,
    title: 'Noise Monitoring',
    description: 'Advanced decibel detection systems to ensure peaceful environment.'
  },
  {
    icon: FileCheck,
    title: 'Background Checks',
    description: 'Comprehensive background screening for all short-term tenants.'
  }
];

export function SecurityFeatures() {
  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 opacity-30">
        <Spline 
          scene="https://prod.spline.design/jp85ritsMwrULpTA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Security First Approach</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your safety and peace of mind are our top priorities
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="h-12 w-12 text-[#cc73fB]" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Security Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our comprehensive security measures ensure a safe and comfortable environment for all our corporate clients and their employees.
          </p>
        </motion.div>
      </div>
    </div>
  );
}