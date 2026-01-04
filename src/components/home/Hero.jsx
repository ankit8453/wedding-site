import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundAttachment: 'fixed',
            transform: 'scale(1.1)',
          }}
        />
      </motion.div>

      {/* Strong Luxurious Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6D0E0E]/85 via-[#6D0E0E]/70 to-black/60" />

      {/* Content - No Box, Just Elegant Text */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Small Decorative Element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#D4AF37] rounded-full" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl font-black text-[#D4AF37] mb-3 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            The Engagement
          </h1>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl font-black text-[#D4AF37] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Celebration
          </h2>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center space-x-4 mb-8"
        >
          <div className="w-20 h-px bg-[#D4AF37]" />
          <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
          <div className="w-20 h-px bg-[#D4AF37]" />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center space-x-8 mb-3">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-7xl font-black text-[#D4AF37] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Priya
            </h3>
            
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#800000]/80 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl">💍</span>
            </div>
            
            <h3 className="font-serif text-3xl sm:text-4xl md:text-7xl font-black text-[#D4AF37] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Mihir
            </h3>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm uppercase tracking-widest">
            <p className="text-[#D4AF37]/90 font-semibold drop-shadow-lg">The Bride</p>
            <p className="text-[#D4AF37]/90 font-semibold drop-shadow-lg">The Groom</p>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-6"
        >
          <div className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-[#D4AF37] rounded-full shadow-2xl">
            <p className="font-serif text-xl sm:text-2xl md:text-4xl font-black text-[#800000]">
              January 9th, 2026
            </p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-4"
        >
          <p className="text-lg sm:text-xl md:text-3xl text-white font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Hotel Shri Ganesh, Jabalpur
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-10"
        >
          <p className="text-lg text-[#D4AF37]/90 italic font-medium drop-shadow-lg">
            Join us as two families become one
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a
            href="/register"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-[#800000] rounded-full font-black text-base sm:text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 border-2 border-white shadow-2xl"
          >
            Confirm Your Presence
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2 font-semibold drop-shadow-lg">Scroll Down</span>
          <ChevronDown className="w-6 h-6 drop-shadow-lg" />
        </motion.div>
      </motion.button>
    </section>
  );
};
