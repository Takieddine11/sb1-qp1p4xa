import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <nav className={`w-[80%] h-16 rounded-[30px] transition-all duration-300 flex items-center justify-between px-10 border-2 ${
        isScrolled 
          ? 'bg-gray-900/40 backdrop-blur-sm border-gray-700/30' 
          : 'bg-transparent border-gray-600/10'
      }`}>
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-10 text-[#cc73fB]" />
          <span className="font-bold text-2xl text-white">GlobalStay</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="/#services" className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg">
            Services
          </a>
          <a href="/#locations" className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg">
            Locations
          </a>
          <a href="/#about" className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg">
            About Us
          </a>
          <a href="/#contact" className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg">
            Contact
          </a>
          <button 
            onClick={() => navigate('/landlords')}
            className="px-6 py-2 bg-gradient-to-r from-[#cc73fB] to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            For Landlords
          </button>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-[#cc73fB] transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-700/50 shadow-xl p-6 flex flex-col space-y-4"
          >
            <button
              onClick={() => handleMobileNavigation('/#services')}
              className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg py-2"
            >
              Services
            </button>
            <button
              onClick={() => handleMobileNavigation('/#locations')}
              className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg py-2"
            >
              Locations
            </button>
            <button
              onClick={() => handleMobileNavigation('/#about')}
              className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg py-2"
            >
              About Us
            </button>
            <button
              onClick={() => handleMobileNavigation('/#contact')}
              className="text-gray-200 hover:text-[#cc73fB] transition-colors text-lg py-2"
            >
              Contact
            </button>
            <button 
              onClick={() => handleMobileNavigation('/landlords')}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#cc73fB] to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              For Landlords
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}