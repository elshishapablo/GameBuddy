import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const NavbarLanding = ({ onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#que-hacemos', label: 'Qué hacemos' },
    { href: '#caracteristicas', label: 'Características' },
    { href: '#como-funciona', label: 'Cómo funciona' },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/[0.06] shadow-glass'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.25rem]">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/icon.png"
              alt="GameBuddy"
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-500 ease-expo group-hover:scale-105"
            />
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-light-text">
              GameBuddy
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onGetStarted}
              className="btn-primary text-sm px-5 py-2"
            >
              Comenzar
            </motion.button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-light-text hover:bg-white/5 transition-colors"
            aria-label="Menú"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/[0.06]"
            >
              <div className="flex flex-col gap-1 py-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-2 py-2.5 rounded-lg text-light-text/90 hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onGetStarted();
                  }}
                  className="btn-primary w-full mt-2"
                >
                  Comenzar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavbarLanding;
