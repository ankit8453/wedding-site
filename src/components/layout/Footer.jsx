import { motion } from 'framer-motion';
import { MapPin, Calendar, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-[#800000] text-[#D4AF37] py-16">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      
      {/* Decorative top ornament */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <svg className="w-16 h-8" viewBox="0 0 100 20">
          <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="10" r="4" fill="#D4AF37" />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="/images/pm-logo.png" 
                alt="Priya & Mihir Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold">Priya & Mihir</span>
                <span className="text-xs tracking-widest opacity-80">The Engagement</span>
              </div>
            </div>
            <p className="text-[#D4AF37]/80 text-sm leading-relaxed">
              Celebrating the union of two families.
            </p>
          </div>

          {/* Venue Details */}
          <div className="text-center">
            <h3 className="font-serif text-xl mb-4 text-[#D4AF37] font-bold flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Venue</span>
            </h3>
            <div className="space-y-2 text-[#D4AF37]/80">
              <p className="font-semibold text-[#D4AF37]">Hotel Shri Ganesh</p>
              <p className="text-sm">Karmeta, Jabalpur</p>
              <p className="text-sm">Madhya Pradesh</p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">January 9, 2026</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-xl mb-4 text-[#D4AF37] font-bold">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#800000] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-[#D4AF37]/70 text-sm mt-4">
              Share your moments with us
            </p>
          </div>
        </div>

        {/* Copyright & Developer Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-[#D4AF37]/30"
        >
          {/* Row 1: Copyright */}
          <p className="text-[#D4AF37] text-base md:text-lg font-serif mb-3">
            © 2026 The Wedding of Priya & Mihir. Celebrating Love.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom corners */}
      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <path d="M0,0 Q25,25 0,50 L0,0 Z" fill="#D4AF37" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <path d="M50,0 Q25,25 50,50 L50,0 Z" fill="#D4AF37" />
        </svg>
      </div>
    </footer>
  );
};
