import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export function SecuritySystem() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content (70%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[70%]"
          >
            <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#cc73fB] to-purple-600">
              SECURITY SYSTEM
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-xl text-gray-300 leading-relaxed">
                To ensure the safety of the property, proper occupancy, and appropriate noise levels, we use a security suite of noise monitoring, smart locks, and cameras.
              </p>
              <div className="mt-6 space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>Comprehensive security monitoring system</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>Advanced noise level detection technology</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>Smart access control for enhanced security</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>In addition to this, our Housing Coordinators and managers are available in person to handle any questions and concerns.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animation Container (30%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30%] h-[400px]"
          >
            <div className="relative w-full h-full">
              <Spline 
                scene="https://prod.spline.design/lr4B5Pcx4mNFK7Gq/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}