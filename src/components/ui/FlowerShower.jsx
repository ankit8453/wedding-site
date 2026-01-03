import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const FlowerShower = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerFlowerShower = () => {
    setIsAnimating(true);

    // Rose petal colors
    const colors = ['#FF1744', '#C62828', '#D81B60', '#E91E63', '#F06292'];

    // First burst
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.8,
      ticks: 200,
    });

    // Second burst
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.8,
      ticks: 200,
    });

    // Center burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 360,
        origin: { y: 0.4 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.5,
        gravity: 1,
        ticks: 250,
      });
    }, 200);

    // Additional continuous petals
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: colors,
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setIsAnimating(false);
        return clearInterval(interval);
      }

      const particleCount = 20 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        scalar: randomInRange(0.8, 1.5),
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        scalar: randomInRange(0.8, 1.5),
      });
    }, 250);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-0 mb-3 bg-[#800000] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            <span className="font-semibold">Shower Blessings! 🌹</span>
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#800000]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={triggerFlowerShower}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        disabled={isAnimating}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isAnimating ? {
          rotate: [0, -10, 10, -10, 10, 0],
          transition: { duration: 0.5, repeat: 5 }
        } : {}}
        className={`
          w-16 h-16 rounded-full 
          bg-gradient-to-r from-[#800000] to-[#A00000]
          text-white shadow-2xl
          flex items-center justify-center
          border-4 border-[#D4AF37]
          hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
          transition-all duration-300
          ${isAnimating ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        `}
      >
        <motion.span
          animate={isAnimating ? {
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            transition: { duration: 0.6, repeat: 4 }
          } : {}}
          className="text-3xl"
        >
          🌹
        </motion.span>
      </motion.button>

      {/* Pulsing ring effect */}
      {!isAnimating && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#800000]"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

