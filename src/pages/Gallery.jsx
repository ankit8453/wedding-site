import { motion } from 'framer-motion';
import { PageTransition, AnimatedText, GlassCard } from '../components/ui';
import { Camera } from 'lucide-react';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500' },
  { id: 2, url: 'https://images.unsplash.com/photo-1529634597447-026e531e4da1?w=500' },
  { id: 3, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500' },
  { id: 4, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500' },
  { id: 5, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500' },
  { id: 6, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500' },
];

export const Gallery = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Camera className="w-12 h-12 text-gold mx-auto mb-6" />
            <AnimatedText
              text="Our Gallery"
              delay={0.3}
              className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury"
            />
            <p className="text-lg text-charcoal/70">
              Moments captured, memories cherished
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer
                  ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${index === 3 ? 'md:row-span-2' : ''}
                `}
              >
                <div className="aspect-square relative group">
                  <img
                    src={image.url}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <GlassCard hover={false}>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold mb-3 text-gold">
                  Share Your Moments
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Tag us on social media with <span className="font-semibold">#SisterAndGroom2026</span>
                </p>
                <p className="text-sm text-charcoal/60">
                  We'd love to see your photos from our special day!
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

