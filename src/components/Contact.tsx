import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="relative bg-[#02081d] py-24" id="contact">
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our housing specialists
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#cc73fB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center">
              <div className="p-3 bg-[#cc73fB]/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-[#cc73fB]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#cc73fB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center">
              <div className="p-3 bg-[#cc73fB]/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-[#cc73fB]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@globalstay.com</p>
            </div>
          </div>

          <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#cc73fB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center">
              <div className="p-3 bg-[#cc73fB]/10 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-[#cc73fB]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
              <p className="text-gray-300">123 Business Ave, NY 10001</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}