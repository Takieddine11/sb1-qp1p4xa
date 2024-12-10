import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '../common/OptimizedImage';

export function EasiestTenant() {
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
            <h2 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#cc73fB] to-purple-600">
              We Are the Easiest Tenant You'll Ever Have
            </h2>
            <h3 className="text-2xl font-semibold text-white mb-6">
              The Last Tenant You'll Ever Need
            </h3>
            <div className="prose prose-lg prose-invert">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Hassle-Free, Reliable, and Committed.
              </p>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Stress-Free Partnership</h4>
                    <p>We handle all maintenance, touch-ups, and regular issues—limiting your involvement to emergencies only.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Exceptional Care</h4>
                    <p>Your property will be treated like our own, ensuring it's always in top condition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Lifetime Commitment</h4>
                    <p>With excellent rental and credit history, we're here to rent your property long-term, backed by $2M in annual revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Container (30%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30%] h-[400px]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <OptimizedImage 
                src="https://t4.ftcdn.net/jpg/08/02/19/93/360_F_802199370_kok26RpMtGANQcFYtMB9PXlge91xfKKB.jpg"
                alt="Luxury real estate"
                className="rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}