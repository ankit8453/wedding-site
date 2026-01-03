import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-maroon-dark text-cream py-16">
      {/* Decorative top border with Indian motif */}
      <div className="absolute top-0 left-0 right-0 h-1 indian-gradient" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <svg className="w-16 h-8" viewBox="0 0 100 20">
          <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#D4AF37" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold">Priya & Mihir</span>
                <span className="text-xs text-gold tracking-wider">शुभ विवाह</span>
              </div>
            </div>
            <p className="text-cream/70 text-sm">
              Celebrating the union of two families.
            </p>
            <p className="text-cream/50 text-xs mt-1 font-serif">
              परिवारों का मिलन
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-serif text-lg mb-4 text-gold flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span>Quick Links</span>
            </h3>
            <div className="space-y-2">
              <a href="/" className="block text-cream/70 hover:text-gold transition-colors">
                Home
              </a>
              <a href="/story" className="block text-cream/70 hover:text-gold transition-colors">
                Our Story
              </a>
              <a href="/gallery" className="block text-cream/70 hover:text-gold transition-colors">
                Gallery
              </a>
              <a href="/register" className="block text-cream/70 hover:text-gold transition-colors">
                Register
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-lg mb-4 text-gold">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-cream hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-cream/10"
        >
          <p className="text-cream/50 text-sm mb-2">
            © 2026 Priya & Mihir. Made with{' '}
            <svg className="inline w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
            </svg>
            {' '}for a blessed union.
          </p>
          <p className="text-cream/40 text-xs font-serif">
            आपका स्वागत है
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

