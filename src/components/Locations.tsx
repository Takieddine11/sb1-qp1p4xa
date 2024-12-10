import React from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury apartments in Manhattan and Brooklyn'
  },
  {
    name: 'Chicago',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=800',
    description: 'Prime locations in The Loop and River North'
  },
  {
    name: 'Montreal',
    image: 'https://images.unsplash.com/photo-1519178614-68673b201f36?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant properties in Downtown and Old Montreal'
  },
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    description: 'Sophisticated living in Le Marais and Champs-Élysées'
  },
  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    description: 'Premium residences in Mayfair and Kensington'
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious apartments in Downtown Dubai and Marina'
  },
  {
    name: 'San Antonio',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80&w=800',
    description: 'Modern living in the heart of Texas'
  },
  {
    name: 'Oklahoma City',
    image: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&q=80&w=800',
    description: 'Contemporary spaces in Bricktown and Midtown'
  },
  {
    name: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80&w=800',
    description: 'Premium residences in Downtown LA and Santa Monica'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotateX: -15
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export function Locations() {
  return (
    <div className="relative py-24 bg-[#02081d]" id="locations">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white">some Locations</h2>
          <p className="mt-4 text-lg text-gray-300">
            Secure corporate housing in prime cities across the globe
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              variants={item}
              className="relative group perspective-1000"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <motion.img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  whileHover={{ opacity: 0.9 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div 
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <MapPin className="h-5 w-5 text-[#cc73fB]" />
                  <h3 className="ml-2 text-xl font-semibold text-white">{city.name}</h3>
                </motion.div>
                <motion.p 
                  className="mt-2 text-sm text-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 * index }}
                >
                  {city.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg border border-[#cc73fB]/20 p-8"
        >
          <div className="flex items-center justify-center space-x-3">
            <Building2 className="h-6 w-6 text-[#cc73fB]" />
            <h3 className="text-xl font-semibold text-white">Expanding Our Reach</h3>
          </div>
          <p className="mt-4 text-center text-gray-300">
            We're continuously growing our presence across the globe. New locations coming soon to better serve your corporate housing needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
}