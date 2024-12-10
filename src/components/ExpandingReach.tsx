import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, TrendingUp, Building2, Users, MapPin, Rocket } from 'lucide-react';

const growthMetrics = [
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries Targeted',
    color: 'from-[#cc73fB] to-purple-600'
  },
  {
    icon: Building2,
    value: '100+',
    label: 'Properties in Pipeline',
    color: 'from-purple-600 to-blue-500'
  },
  {
    icon: Users,
    value: '50+',
    label: 'New Partners',
    color: 'from-blue-500 to-[#cc73fB]'
  },
  {
    icon: TrendingUp,
    value: '200%',
    label: 'YoY Growth',
    color: 'from-[#cc73fB] to-purple-600'
  }
];

const upcomingLocations = [
  { city: 'Cleveland', country: 'United States', quarter: 'Q1 2025' },
  { city: 'Phoenix', country: 'United States', quarter: 'Q1 2025' },
  { city: 'Newark', country: 'United States', quarter: 'Q2 2025' },
  { city: 'Miami', country: 'United States', quarter: 'Q2 2025' },
  { city: 'Riyadh', country: 'Saudi Arabia', quarter: 'Q3 2025' },
  { city: 'Seattle', country: 'United States', quarter: 'Q3 2025' }
];

export function ExpandingReach() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02081d] via-purple-900/10 to-[#02081d]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#cc73fB]/20 rounded-full blur-[128px] opacity-50 animate-pulse" />
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-[#cc73fB]/20 rounded-full blur-[120px] opacity-40 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-[#cc73fB] mr-2 animate-bounce" />
            <h2 className="text-4xl font-bold text-white">
              Expanding Our Reach
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're rapidly growing our global presence to serve you better
          </p>
        </motion.div>

        {/* Growth Metrics with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {growthMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#cc73fB]/20 to-purple-600/20 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 text-center">
                  {metric.value}
                </div>
                <div className="text-gray-300 text-center">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Upcoming Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <div className="flex items-center justify-center mb-8">
            <MapPin className="h-6 w-6 text-[#cc73fB] mr-2" />
            <h3 className="text-2xl font-semibold text-white">
              Coming Soon To
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#cc73fB] to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-[#cc73fB]/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#cc73fB] transition-colors duration-300">
                        {location.city}
                      </h4>
                      <p className="text-sm text-gray-400">{location.country}</p>
                    </div>
                    <div className="bg-[#cc73fB]/20 px-3 py-1 rounded-full">
                      <span className="text-sm text-[#cc73fB]">{location.quarter}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}