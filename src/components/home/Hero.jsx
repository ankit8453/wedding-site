import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '../ui';

// Decorative Indian Kalash/Pot SVG
const KalashIcon = () => (
  <svg viewBox="0 0 100 120" className="w-16 h-16 mx-auto fill-gold">
    <path d="M50 10 L45 25 Q30 30 30 45 L30 70 Q30 80 35 85 L40 95 Q45 100 50 100 Q55 100 60 95 L65 85 Q70 80 70 70 L70 45 Q70 30 55 25 L50 10 Z" />
    <circle cx="50" cy="20" r="8" className="fill-maroon" />
    <path d="M35 45 Q50 40 65 45" stroke="currentColor" strokeWidth="2" fill="none" className="text-maroon" />
    <path d="M35 55 Q50 50 65 55" stroke="currentColor" strokeWidth="2" fill="none" className="text-maroon" />
  </svg>
);

export const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden paisley-bg">
      {/* Background with Ken Burns effect - Indian wedding imagery */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cream via-maroon/10 to-gold/20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/30 via-transparent to-maroon/40" />
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0,0 Q50,50 0,100 Q50,50 100,100 Q50,50 100,0 Z" fill="#D4AF37" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0,0 Q50,50 0,100 Q50,50 100,100 Q50,50 100,0 Z" fill="#D4AF37" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Kalash Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <KalashIcon />
        </motion.div>

        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-4"
        >
          <p className="text-maroon font-serif text-xl md:text-2xl tracking-wider uppercase">
            शुभ विवाह
          </p>
        </motion.div>

        {/* Main Title - Indian style */}
        <AnimatedText
          text="The Union of Two Families"
          type="words"
          delay={1}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-luxury text-maroon"
        />

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-maroon mb-2">
                Priya
              </p>
              <p className="text-sm uppercase tracking-widest text-maroon/70">The Bride</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center mb-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <p className="text-gold font-serif text-2xl">∞</p>
            </div>
            
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-bold text-maroon mb-2">
                Mihir
              </p>
              <p className="text-sm uppercase tracking-widest text-maroon/70">The Groom</p>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
            </svg>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="space-y-2 mb-8"
        >
          <p className="text-2xl md:text-3xl font-serif text-maroon font-semibold">
            Engagement Ceremony
          </p>
          <p className="text-lg md:text-xl text-charcoal/80">
            January 9th, 2026
          </p>
          <p className="text-lg text-charcoal/70 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Jabalpur, Madhya Pradesh</span>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-12"
        >
          <a
            href="/register"
            className="inline-block px-12 py-4 indian-gradient text-white rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gold"
          >
            Confirm Your Presence
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-maroon hover:text-gold transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2 font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Floating decorative elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`,
            background: i % 2 === 0 ? '#D4AF37' : '#6D0E0E',
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </section>
  );
};
