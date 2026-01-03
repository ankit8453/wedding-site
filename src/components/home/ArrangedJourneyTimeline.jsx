import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Handshake, Sparkles } from 'lucide-react';

// Indian Hand Namaste SVG Icon
const NamasteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M12 2C11.5 2 11 2.2 10.7 2.5L6 7.2V11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11V8.8L10 6.8V16C10 16.6 10.4 17 11 17C11.6 17 12 16.6 12 16V8H12V16C12 16.6 12.4 17 13 17C13.6 17 14 16.6 14 16V6.8L16 8.8V11C16 11.6 16.4 12 17 12C17.6 12 18 11.6 18 11V7.2L13.3 2.5C13 2.2 12.5 2 12 2ZM7 13C6.4 13 6 13.4 6 14V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V14C18 13.4 17.6 13 17 13C16.4 13 16 13.4 16 14V19H8V14C8 13.4 7.6 13 7 13Z" />
  </svg>
);

// Dholak/Drum Icon
const DholakIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M12 2C8.5 2 5.5 3.5 5.5 5.5V18.5C5.5 20.5 8.5 22 12 22C15.5 22 18.5 20.5 18.5 18.5V5.5C18.5 3.5 15.5 2 12 2ZM16.5 18.5C16.5 19.3 14.7 20 12 20C9.3 20 7.5 19.3 7.5 18.5V16.8C8.8 17.5 10.3 17.8 12 17.8C13.7 17.8 15.2 17.5 16.5 16.8V18.5ZM16.5 14.5C16.5 15.3 14.7 16 12 16C9.3 16 7.5 15.3 7.5 14.5V12.8C8.8 13.5 10.3 13.8 12 13.8C13.7 13.8 15.2 13.5 16.5 12.8V14.5ZM16.5 10.5C16.5 11.3 14.7 12 12 12C9.3 12 7.5 11.3 7.5 10.5V8.8C8.8 9.5 10.3 9.8 12 9.8C13.7 9.8 15.2 9.5 16.5 8.8V10.5ZM12 8C9.3 8 7.5 7.3 7.5 6.5V5.5C7.5 4.7 9.3 4 12 4C14.7 4 16.5 4.7 16.5 5.5V6.5C16.5 7.3 14.7 8 12 8Z" />
  </svg>
);

// Ring Icon
const RingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M12 2L9 9H15L12 2ZM12 10C8.69 10 6 12.69 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12.69 15.31 10 12 10ZM12 20C9.79 20 8 18.21 8 16C8 13.79 9.79 12 12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20ZM12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z" />
  </svg>
);

const journeyEvents = [
  {
    step: 'Step 1',
    title: 'The Rishta',
    subtitle: 'रिश्ता',
    description: 'When our families first met and saw the beautiful possibility of uniting two souls destined to be together.',
    icon: Users,
    date: 'September 2025',
  },
  {
    step: 'Step 2',
    title: 'The Roka',
    subtitle: 'रोका',
    description: 'It became official! A sacred ceremony where both families blessed our union and the relationship was formalized.',
    icon: Handshake,
    date: 'November 2025',
  },
  {
    step: 'Step 3',
    title: 'The Engagement',
    subtitle: 'सगाई',
    description: 'Join us as we celebrate this joyous milestone with our loved ones. The beginning of our forever!',
    icon: RingIcon,
    date: 'January 9, 2026',
  },
];

export const ArrangedJourneyTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-cream relative overflow-hidden">
      {/* Decorative background with Indian patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-maroon rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      {/* Mandala decoration */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#6D0E0E" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#6D0E0E" strokeWidth="1" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((i * Math.PI) / 4)}
              y2={50 + 40 * Math.sin((i * Math.PI) / 4)}
              stroke="#D4AF37"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative top element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <NamasteIcon />
            <div className="mx-auto mt-2">
              <svg className="w-16 h-2 mx-auto" viewBox="0 0 100 10">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="#D4AF37" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury text-maroon">
            Our Arranged Marriage Journey
          </h2>
          <p className="text-lg text-charcoal/70 mb-2">
            A beautiful tradition of families coming together
          </p>
          <p className="text-sm text-maroon font-serif">
            परिवारों का मिलन
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold/30 -translate-x-1/2 hidden md:block" />
          
          {/* Animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-1 indian-gradient -translate-x-1/2 hidden md:block shadow-lg"
          />

          {/* Journey events */}
          <div className="space-y-16 md:space-y-24">
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
                    ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
                    text-center mb-8 md:mb-0
                  `}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-shadow border-2 border-gold/20 bg-white/40"
                    >
                      <div className="text-gold font-serif text-sm uppercase tracking-widest mb-2">
                        {event.step}
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-1 text-maroon">
                        {event.title}
                      </h3>
                      <p className="text-maroon/60 font-serif text-lg mb-3">
                        {event.subtitle}
                      </p>
                      <div className="w-16 h-px bg-gold mx-auto md:mx-0 mb-4" 
                           style={{ marginLeft: isLeft ? 'auto' : '0', marginRight: isLeft ? '0' : 'auto' }} />
                      <p className="text-charcoal/80 leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-maroon/10 rounded-full">
                        <p className="text-sm font-medium text-maroon">
                          {event.date}
                        </p>
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
                    <div className="w-20 h-20 rounded-full indian-gradient border-4 border-gold flex items-center justify-center shadow-2xl">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    {/* Decorative ring around icon */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-gold"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 glass-effect rounded-3xl border-2 border-gold/30">
            <DholakIcon />
            <p className="text-maroon font-serif text-2xl mt-4 mb-2">
              आप सभी का स्वागत है
            </p>
            <p className="text-charcoal/70 mb-4">
              You are cordially invited to bless the couple
            </p>
            <a
              href="/register"
              className="inline-block px-10 py-3 indian-gradient text-white rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gold"
            >
              Confirm Your Attendance
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

