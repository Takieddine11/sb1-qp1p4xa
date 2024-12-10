import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export function Process() {
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
              THE PROCESS
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-xl text-gray-300 leading-relaxed">
                When a reservation request is received, an email is automatically sent to our clients, requiring them to verify their identification and submit their information for a criminal background check.
              </p>
              <div className="mt-6 space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>The link provided takes them to our screening tool, TransUnion Smart Move.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>Clients are asked to provide their full legal name, previous addresses, social security number, and date of birth.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#cc73fB] mt-2.5"></span>
                  <p>Once completed, the full report is sent to HS Properties, where our compliance team reviews the results and makes a decision in accordance with our screening policy.</p>
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
                scene="https://prod.spline.design/3Z64V-Liv5ox-Q4A/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}