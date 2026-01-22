import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavbarLanding = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-dark-border/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/icon.png" 
              alt="GameBuddy Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text">GameBuddy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <a
              href="#que-hacemos"
              className="text-xs sm:text-sm lg:text-base text-medium-text hover:text-light-text transition-colors font-medium"
            >
              Qué hacemos
            </a>
            <a
              href="#caracteristicas"
              className="text-xs sm:text-sm lg:text-base text-medium-text hover:text-light-text transition-colors font-medium"
            >
              Características
            </a>
            <a
              href="#como-funciona"
              className="text-xs sm:text-sm lg:text-base text-medium-text hover:text-light-text transition-colors font-medium"
            >
              Cómo funciona
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="btn-primary text-xs sm:text-sm lg:text-base px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2.5"
            >
              Comenzar
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-light-text"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-dark-border"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#que-hacemos"
                className="text-light-text hover:text-medium-text transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Qué hacemos
              </a>
              <a
                href="#caracteristicas"
                className="text-light-text hover:text-medium-text transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#como-funciona"
                className="text-light-text hover:text-medium-text transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  onGetStarted();
                }}
                className="btn-primary w-full mt-2"
              >
                Comenzar
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavbarLanding;

