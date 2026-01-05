import { Hero } from '../components/home/Hero';
import { Countdown } from '../components/home/Countdown';
import { Venue } from '../components/home/Venue';
import { SoulOfJabalpur } from '../components/home/SoulOfJabalpur';
import { PageTransition, FlowerShower, Invitation3D } from '../components/ui';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Countdown />
      <Venue />
      
      {/* Official Invitation Card Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 py-16 sm:py-20 md:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#D4AF37] rounded-full" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#800000] rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#D4AF37] rotate-45" />
        </motion.div>

        {/* Floating Background Particles */}
        <motion.div
          className="absolute top-20 left-1/4 w-4 h-4 bg-[#D4AF37]/30 rounded-full blur-sm"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-3 h-3 bg-[#800000]/30 rounded-full blur-sm"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header with 3D Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="text-center mb-12 sm:mb-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            >
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
              </motion.div>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </motion.div>
            
            <motion.h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] mb-3"
              initial={{ opacity: 0, z: -50 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ 
                transformStyle: 'preserve-3d',
                textShadow: '0 4px 8px rgba(128, 0, 0, 0.2)',
              }}
            >
              The Official Invitation
            </motion.h2>
            
            <motion.p 
              className="font-lato text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              You are cordially invited to witness the beginning of our beautiful journey
            </motion.p>
          </motion.div>

          {/* 3D Invitation Card with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20, z: -100 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              type: 'spring',
              stiffness: 80,
            }}
            className="px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Invitation3D 
              src="/images/official-invite.jpg" 
              alt="Priya & Mihir Engagement Invitation" 
            />
          </motion.div>

          {/* Decorative Bottom Accent with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30, z: -30 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            className="text-center mt-8 sm:mt-12"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#800000] via-[#6D0E0E] to-[#800000] rounded-full shadow-2xl"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(128, 0, 0, 0.4)',
              }}
              animate={{
                boxShadow: [
                  '0 10px 30px rgba(212, 175, 55, 0.3)',
                  '0 15px 40px rgba(128, 0, 0, 0.4)',
                  '0 10px 30px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <p className="font-lato text-sm sm:text-base text-[#D4AF37] font-semibold">
                ✨ Save the Date: January 9, 2026 ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SoulOfJabalpur />
      <FlowerShower />
    </PageTransition>
  );
};
