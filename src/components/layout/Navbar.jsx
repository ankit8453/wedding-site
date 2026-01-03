import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Decorative Om/Mandala Symbol
const OmSymbol = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
    <circle cx="12" cy="12" r="3" className="fill-[#D4AF37]" />
  </svg>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-[#800000] shadow-lg
        ${isScrolled ? 'py-3' : 'py-4'}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <OmSymbol />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-[#D4AF37] leading-tight">
              Priya & Mihir
            </span>
            <span className="text-xs text-[#D4AF37]/80 font-medium tracking-widest">
              The Engagement
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group"
            >
              <span className={`
                font-semibold transition-colors duration-300 text-lg
                ${location.pathname === link.path 
                  ? 'text-[#D4AF37]' 
                  : 'text-[#D4AF37]/70 hover:text-[#D4AF37]'
                }
              `}>
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#D4AF37] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#D4AF37]" />
          ) : (
            <Menu className="w-6 h-6 text-[#D4AF37]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#800000] border-t border-[#D4AF37]/30 mt-4"
          >
            <div className="py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block px-6 py-3 font-semibold transition-colors
                      ${location.pathname === link.path
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-l-4 border-[#D4AF37]'
                        : 'text-[#D4AF37]/70 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
