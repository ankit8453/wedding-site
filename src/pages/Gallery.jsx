import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui';
import { Camera, Clock, Sparkles } from 'lucide-react';

export const Gallery = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="container mx-auto max-w-4xl">
          
          {/* Coming Soon Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Icon Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Camera className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#800000] mx-auto" />
                </motion.div>
                
                {/* Sparkles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl font-black text-[#800000] mb-4">
                Coming Soon
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" />
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
                Our Gallery
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm border-4 border-[#D4AF37] rounded-3xl p-10 shadow-2xl">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-lato">
                  We're capturing beautiful moments from our engagement celebration!
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 font-lato">
                  The gallery will be updated with stunning photographs after <span className="font-bold text-[#800000]">January 9, 2026</span>.
                </p>
                
                {/* Decorative Date Badge */}
                <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#800000] rounded-full border-2 border-[#D4AF37] shadow-lg">
                  <p className="text-lg sm:text-xl md:text-2xl font-serif font-black text-[#D4AF37]">
                    Stay Tuned! ✨
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <p className="text-gray-600 italic font-lato">
                "The best is yet to come..."
              </p>
            </motion.div>

          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-40 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#800000]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </PageTransition>
  );
};
