import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PageTransition, AnimatedText } from '../components/ui';
import { Users, Eye, Handshake, Sparkles } from 'lucide-react';

// Kalash/Om Icon
const KalashIcon = () => (
  <svg viewBox="0 0 100 120" className="w-7 h-7" fill="currentColor">
    <path d="M50 10 L45 25 Q30 30 30 45 L30 70 Q30 80 35 85 L40 95 Q45 100 50 100 Q55 100 60 95 L65 85 Q70 80 70 70 L70 45 Q70 30 55 25 L50 10 Z" />
    <circle cx="50" cy="20" r="8" className="fill-[#D4AF37]" />
  </svg>
);

const journeyEvents = [
  {
    step: 'Chapter 1',
    title: 'The Rishta',
    subtitle: 'रिश्ता - Family Meeting',
    description: 'Destiny brought our families together. A conversation over chai that started it all. When two families met and saw the beautiful possibility of uniting two souls.',
    icon: Users,
    date: 'December 2025',
  },
  {
    step: 'Chapter 2',
    title: 'The First Meeting',
    subtitle: 'नज़र - First Glance',
    description: 'Priya & Mihir met for the first time. A few shy smiles and we knew this was meant to be. Sometimes the heart knows before words are spoken.',
    icon: Eye,
    date: 'December 2025',
  },
  {
    step: 'Chapter 3',
    title: 'The Roka',
    subtitle: 'रोका - Official Seal',
    description: 'With the blessings of our elders, we made it official. A sacred ceremony where both families blessed our union and the relationship was formalized.',
    icon: Handshake,
    date: 'January 9, 2026',
  },
  {
    step: 'Chapter 4',
    title: 'The Engagement',
    subtitle: 'सगाई - Celebration Begins',
    description: 'Jan 9, 2026 - The celebration begins! Join us as we embark on this beautiful journey together, blessed by our families and loved ones.',
    icon: Sparkles,
    date: 'January 9, 2026',
    isCurrent: true,
  },
];

export const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-stone-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #800000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#800000" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <KalashIcon />
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black text-[#800000] mb-4">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-3">
              A Beautiful Arranged Marriage
            </p>
            <p className="text-base sm:text-lg text-gray-600 italic">
              When families unite, hearts follow
            </p>
            <p className="text-[#800000] font-serif text-lg sm:text-xl mt-2">
              परिवारों का मिलन
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={containerRef} className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#D4AF37]/30 -translate-x-1/2 hidden md:block" />
            
            {/* Animated line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#800000] to-[#D4AF37] -translate-x-1/2 hidden md:block shadow-lg"
            />

            {/* Journey events */}
            <div className="space-y-16 md:space-y-32">
              {journeyEvents.map((event, index) => {
                const isLeft = index % 2 === 0;
                const Icon = event.icon;

                return (
                  <motion.div
                    key={event.step}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`
                      relative flex items-center
                      ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                      flex-col
                    `}
                  >
                    {/* Content */}
                    <div className={`
                      w-full md:w-5/12
                      ${isLeft ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}
                      text-center mb-8 md:mb-0
                    `}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`
                          bg-white border-4 border-[#D4AF37] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300
                          ${event.isCurrent ? 'ring-4 ring-[#800000]/30' : ''}
                        `}
                      >
                        <div className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-2">
                          {event.step}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-[#800000]">
                          {event.title}
                        </h3>
                        <p className="text-[#800000]/70 font-serif text-base sm:text-lg mb-4 italic">
                          {event.subtitle}
                        </p>
                        <div className={`
                          w-20 h-1 bg-[#D4AF37] mb-6
                          ${isLeft ? 'md:ml-auto' : 'md:mr-auto'} mx-auto
                        `} />
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
                          {event.description}
                        </p>
                        <div className={`
                          inline-block px-6 py-3 rounded-full font-bold text-sm
                          ${event.isCurrent 
                            ? 'bg-gradient-to-r from-[#800000] to-[#A00000] text-white border-2 border-[#D4AF37]' 
                            : 'bg-[#800000]/10 text-[#800000] border-2 border-[#800000]/20'
                          }
                        `}>
                          {event.date}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
                      className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 z-10"
                    >
                      <div className={`
                        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-3 md:border-4 border-[#D4AF37]
                        ${event.isCurrent 
                          ? 'bg-gradient-to-r from-[#800000] to-[#A00000]' 
                          : 'bg-gradient-to-br from-[#800000] to-[#600000]'
                        }
                      `}>
                        <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-[#D4AF37]" />
                      </div>
                      {/* Decorative ring around icon */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      {event.isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#800000]"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-24"
          >
            <div className="inline-block bg-white border-4 border-[#D4AF37] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
              </svg>
              
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#800000] mb-4">
                Join Our Celebration
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl mx-auto px-4">
                We would be honored to have you witness and bless our union as we begin this beautiful journey together.
              </p>
              <p className="text-[#800000] font-serif text-lg sm:text-xl mb-8 italic">
                आपका स्वागत है
              </p>
              
              <a
                href="/register"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#800000] to-[#A00000] text-white rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#D4AF37]"
              >
                Confirm Your Presence
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
