import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, CheckCircle, Award, Sparkles, Clock } from 'lucide-react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { BackgroundPattern } from '../components/common/BackgroundPattern';
import { GlowEffects } from '../components/common/GlowEffects';
import { useIsMobile } from '../hooks/useIsMobile';
import { PropertyListingForm } from '../components/landlords/PropertyListingForm';

// Lazy load components
const GuaranteedIncome = lazy(() => import('../components/landlords/GuaranteedIncome').then(module => ({ default: module.GuaranteedIncome })));
const Process = lazy(() => import('../components/landlords/Process').then(module => ({ default: module.Process })));
const SecuritySystem = lazy(() => import('../components/landlords/SecuritySystem').then(module => ({ default: module.SecuritySystem })));
const EasiestTenant = lazy(() => import('../components/landlords/EasiestTenant').then(module => ({ default: module.EasiestTenant })));

const features = [
  {
    icon: DollarSign,
    title: "Get Your Rent On Time",
    description: "Ensure timely rental payments every month with no delays."
  },
  {
    icon: Shield,
    title: "Guaranteed Income",
    description: "Secure monthly payments regardless of occupancy, with long-term corporate lease agreements."
  },
  {
    icon: CheckCircle,
    title: "Quality Tenants",
    description: "We work exclusively with verified corporate clients and thoroughly vetted professionals."
  },
  {
    icon: Award,
    title: "Insurance Coverage",
    description: "Protected by major platforms like Airbnb and Booking.com with comprehensive insurance coverage."
  },
  {
    icon: Sparkles,
    title: "Clean Property",
    description: "We ensure your property remains in top-notch condition, so it's ready to sell or rent at maximum value."
  },
  {
    icon: Clock,
    title: "Hassle-Free Experience",
    description: "We handle all minor maintenance under $100, ensuring you don't have to lift a finger."
  }
];

export function Landlords() {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: isMobile ? 0.3 : 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#02081d]">
      <BackgroundPattern />
      <GlowEffects />

      <div className="relative pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionProps}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Partner With GlobalStay
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join our network of premium property owners and maximize your rental income with our corporate housing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...motionProps}
                transition={{ duration: 0.4, delay: isMobile ? index * 0.05 : index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700/50 hover:border-[#cc73fB]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-[#cc73fB] mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <Suspense fallback={<LoadingSpinner />}>
            <GuaranteedIncome />
            <Process />
            <SecuritySystem />
            <EasiestTenant />
          </Suspense>

          <motion.div
            {...motionProps}
            className="text-center mt-12 md:mt-16"
          >
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#cc73fB] to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              List Your Property
            </button>
          </motion.div>
        </div>
      </div>

      <PropertyListingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}