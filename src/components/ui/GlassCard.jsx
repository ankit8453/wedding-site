import { motion } from 'framer-motion';

export const GlassCard = ({ 
  children, 
  className = '',
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        glass-effect rounded-3xl p-8
        shadow-xl hover:shadow-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

