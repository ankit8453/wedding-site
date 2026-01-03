import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui';

export const Countdown = () => {
  const weddingDate = new Date('2026-01-09T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = weddingDate - new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,10 Q60,30 50,50 Q40,30 50,10 M50,50 Q70,60 50,90 Q30,60 50,50" fill="#6D0E0E" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 rotate-45">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,10 Q60,30 50,50 Q40,30 50,10 M50,50 Q70,60 50,90 Q30,60 50,50" fill="#D4AF37" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <svg className="w-24 h-4 mx-auto" viewBox="0 0 100 10">
              <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="50" cy="5" r="3" fill="#6D0E0E" />
            </svg>
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury text-maroon">
            The Auspicious Day
          </h2>
          <p className="text-lg text-charcoal/70 mb-2">
            Counting down to the celebration
          </p>
          <p className="text-maroon font-serif">
            शुभ मुहूर्त
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeUnits.map((unit, index) => (
            <GlassCard key={unit.label} delay={index * 0.1} hover={false}>
              <motion.div
                key={unit.value}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.div
                  className="font-serif text-5xl md:text-6xl font-bold text-maroon mb-2"
                  style={{
                    textShadow: '0 0 20px rgba(109, 14, 14, 0.3)',
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-sm md:text-base font-medium text-gold uppercase tracking-wider">
                  {unit.label}
                </div>
                
                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="mt-4 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </motion.div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

