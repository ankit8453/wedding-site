import { motion } from 'framer-motion';
import { MapPin, Train, Plane, Hotel, Car } from 'lucide-react';
import { GlassCard } from '../ui';

export const GuestGuidance = () => {
  const travelOptions = [
    {
      icon: Plane,
      title: 'By Air',
      description: 'Jabalpur Airport (JLR) is well connected to major cities',
      details: 'Direct flights from Delhi, Mumbai, Bangalore',
    },
    {
      icon: Train,
      title: 'By Train',
      description: 'Jabalpur Junction is a major railway station',
      details: 'Multiple trains from all major cities daily',
    },
    {
      icon: Car,
      title: 'By Road',
      description: 'Well-connected via National Highways',
      details: 'NH30, NH34, NH45 - Good road connectivity',
    },
  ];

  const accommodations = [
    {
      name: 'The Grand Oberoi',
      distance: '2 km from venue',
      type: '5-Star Hotel',
    },
    {
      name: 'Hotel Satya Ashoka',
      distance: '1.5 km from venue',
      type: '4-Star Hotel',
    },
    {
      name: 'Narmada Jacksons',
      distance: '3 km from venue',
      type: 'Budget Friendly',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-maroon rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <MapPin className="w-12 h-12 text-maroon mx-auto mb-4" />
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury text-maroon">
            How to Reach
          </h2>
          <p className="text-lg text-charcoal/70 mb-2">
            Join us in the heart of Madhya Pradesh
          </p>
          <p className="text-maroon font-serif text-xl">
            Jabalpur, MP
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <GlassCard hover={false}>
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/5 to-gold/5 relative">
              {/* Google Maps Embed Placeholder */}
              <iframe
                title="Venue Location"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4974769!2d79.9864!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae5e3d6e3f3d%3A0x6b96e9e8e8e8e8e8!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-gold/20 rounded-2xl" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-maroon font-serif text-xl font-semibold mb-2">
                Engagement Venue
              </p>
              <p className="text-charcoal/70 mb-4">
                Grand Celebration Hall, Civil Lines, Jabalpur
              </p>
              <a
                href="https://maps.google.com/?q=Jabalpur,Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 indian-gradient text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 border border-gold"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Travel Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-8 text-maroon">
            Travel Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {travelOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <GlassCard key={option.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 indian-gradient rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-maroon">
                      {option.title}
                    </h4>
                    <p className="text-charcoal/80 mb-2">
                      {option.description}
                    </p>
                    <div className="pt-3 border-t border-gold/20">
                      <p className="text-sm text-charcoal/60">
                        {option.details}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Accommodation Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-8 text-maroon">
            <Hotel className="w-8 h-8 inline-block mr-3 text-gold" />
            Recommended Stay
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gold/20 bg-white/40"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 indian-gradient rounded-lg flex items-center justify-center">
                    <Hotel className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs px-3 py-1 bg-maroon/10 text-maroon rounded-full font-medium">
                    {hotel.type}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold mb-2 text-maroon">
                  {hotel.name}
                </h4>
                <div className="flex items-center text-sm text-charcoal/60">
                  <MapPin className="w-4 h-4 mr-1 text-gold" />
                  {hotel.distance}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <GlassCard hover={false}>
              <div className="max-w-2xl mx-auto">
                <h4 className="font-serif text-xl font-bold mb-3 text-maroon">
                  Need Assistance?
                </h4>
                <p className="text-charcoal/70 mb-4">
                  For any travel or accommodation queries, please feel free to contact us.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+919876543210"
                    className="inline-block px-6 py-3 bg-white border-2 border-maroon text-maroon rounded-full font-medium hover:bg-maroon hover:text-white transition-all duration-300"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 indian-gradient text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 border border-gold"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

