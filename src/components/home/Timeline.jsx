import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles, Calendar, Home } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'First Meeting',
    description: 'Our paths crossed at a mutual friend\'s gathering, and sparks flew instantly.',
    icon: Sparkles,
  },
  {
    year: '2021',
    title: 'First Date',
    description: 'A magical evening under the stars that marked the beginning of our journey.',
    icon: Heart,
  },
  {
    year: '2023',
    title: 'Moving In Together',
    description: 'We decided to build our home and start creating memories together.',
    icon: Home,
  },
  {
    year: '2025',
    title: 'The Proposal',
    description: 'A beautiful moment that led to our forever. She said yes!',
    icon: Heart,
  },
  {
    year: '2026',
    title: 'Our Wedding Day',
    description: 'The day we become one. Join us in celebrating our love.',
    icon: Calendar,
  },
];

export const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-olive rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury">
            Our Love Story
          </h2>
          <p className="text-lg text-charcoal/70">
            The journey that brought us here
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
          
          {/* Animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px bg-gold -translate-x-1/2 hidden md:block"
          />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.year}
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
                      className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="text-gold font-serif text-3xl font-bold mb-3">
                        {event.year}
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-cream border-4 border-gold flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="/register"
            className="inline-block px-12 py-4 bg-gradient-to-r from-gold to-yellow-600 text-white rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Join Our Celebration
          </a>
        </motion.div>
      </div>
    </section>
  );
};

