import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Invitation3D = ({ src, alt = "Invitation Card" }) => {
  const cardRef = useRef(null);
  
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to rotation values (subtle tilt)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  // Transform for shadow (moves opposite to tilt for depth)
  const shadowX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

  // Handle mouse move over the card
  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (event.clientX - rect.left - width / 2) / width;
    const y = (event.clientY - rect.top - height / 2) / height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset to center when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="flex justify-center items-center perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scale: {
            duration: 0.3,
          },
        }}
        className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl cursor-pointer"
      >
        {/* Animated shadow with 3D depth */}
        <motion.div
          style={{
            x: shadowX,
            y: shadowY,
            z: -20,
          }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#800000]/40 to-[#D4AF37]/30 blur-3xl -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary glowing layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/20 to-[#800000]/20 blur-2xl -z-10"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />

        {/* Card container with 3D depth */}
        <motion.div
          style={{
            transform: 'translateZ(50px)',
          }}
          className="relative rounded-2xl border-4 border-[#D4AF37] overflow-hidden shadow-2xl bg-white"
          animate={{
            boxShadow: [
              '0 25px 50px rgba(128, 0, 0, 0.3), 0 10px 20px rgba(212, 175, 55, 0.2)',
              '0 30px 60px rgba(128, 0, 0, 0.4), 0 15px 30px rgba(212, 175, 55, 0.3)',
              '0 25px 50px rgba(128, 0, 0, 0.3), 0 10px 20px rgba(212, 175, 55, 0.2)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Decorative corner elements with animation */}
          <motion.div 
            className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-b-4 border-r-4 border-[#D4AF37] rounded-br-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />

          {/* The invitation image with 3D pop */}
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover"
            style={{
              transform: 'translateZ(30px)',
            }}
            animate={{
              filter: [
                'brightness(1) contrast(1)',
                'brightness(1.05) contrast(1.05)',
                'brightness(1) contrast(1)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Subtle overlay gradient for premium look */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
          
          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            initial={{ x: '-100%', opacity: 0 }}
            whileHover={{ x: '100%', opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Enhanced floating particles with 3D depth */}
        <motion.div
          className="absolute -top-4 -left-4 w-3 h-3 bg-[#D4AF37] rounded-full blur-sm"
          style={{ transform: 'translateZ(80px)' }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -top-6 -right-6 w-2 h-2 bg-[#800000] rounded-full blur-sm"
          style={{ transform: 'translateZ(90px)' }}
          animate={{
            y: [12, -12, 12],
            x: [8, -8, 8],
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-3 h-3 bg-[#D4AF37] rounded-full blur-sm"
          style={{ transform: 'translateZ(70px)' }}
          animate={{
            y: [15, -15, 15],
            x: [-8, 8, -8],
            scale: [1, 1.6, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-2 h-2 bg-[#800000] rounded-full blur-sm"
          style={{ transform: 'translateZ(85px)' }}
          animate={{
            y: [-10, 10, -10],
            x: [10, -10, 10],
            scale: [1, 2, 1],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-8 w-3 h-3 bg-[#D4AF37]/70 rounded-full blur-sm"
          style={{ transform: 'translateZ(60px)' }}
          animate={{
            x: [-12, 12, -12],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-8 w-2 h-2 bg-[#800000]/70 rounded-full blur-sm"
          style={{ transform: 'translateZ(65px)' }}
          animate={{
            x: [12, -12, 12],
            scale: [1, 1.7, 1],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.5,
          }}
        />
      </motion.div>
    </div>
  );
};

