import { motion } from 'framer-motion';
import { PageTransition, AnimatedText, GlassCard } from '../components/ui';
import { Heart, MapPin, Calendar } from 'lucide-react';

export const Story = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Heart className="w-12 h-12 text-gold fill-gold mx-auto mb-6" />
            <AnimatedText
              text="Our Story"
              delay={0.3}
              className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury"
            />
            <p className="text-lg text-charcoal/70">
              A love story written in the stars
            </p>
          </motion.div>

          <div className="space-y-8">
            <GlassCard delay={0.5}>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Where It All Began</h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Our journey started in the most unexpected way. Two souls destined to meet, 
                    brought together by fate and friendship. From that very first moment, we knew 
                    there was something special between us.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.6}>
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Growing Together</h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Through every season, every challenge, and every triumph, we've grown stronger 
                    together. Our love has been a constant source of joy, comfort, and inspiration. 
                    We've built not just a relationship, but a partnership for life.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.7}>
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">The Next Chapter</h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Now, we're ready to take the next step in our journey together. We're excited 
                    to celebrate this special moment with our loved ones and begin our forever as 
                    husband and wife. Join us as we say "I do" and start this beautiful new chapter.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12"
          >
            <a
              href="/register"
              className="inline-block px-12 py-4 bg-gradient-to-r from-gold to-yellow-600 text-white rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              RSVP Now
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

