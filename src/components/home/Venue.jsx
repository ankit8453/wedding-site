import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { GlassCard } from '../ui';

export const Venue = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#800000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <MapPin className="w-10 h-10 text-[#800000]" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl font-black text-[#800000] mb-4">
            Venue Details
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Where the celebration unfolds
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="border-4 border-[#D4AF37] rounded-2xl overflow-hidden bg-white shadow-2xl">
            {/* Map Section */}
            <div className="relative h-96 bg-gradient-to-br from-amber-50 to-stone-100">
              <iframe
                title="Hotel Shri Ganesh Venue Location"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4974769!2d79.9864!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae5e3d6e3f3d%3A0x6b96e9e8e8e8e8e8!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              />
              {/* Gold border overlay */}
              <div className="absolute inset-0 pointer-events-none border-4 border-[#D4AF37]" />
            </div>

            {/* Venue Details */}
            <div className="p-10 bg-gradient-to-br from-white to-amber-50/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Side - Venue Name & Address */}
                <div>
                  <div className="inline-block px-4 py-2 bg-[#800000] text-white rounded-full mb-4">
                    <span className="font-bold text-sm uppercase tracking-wider">Engagement Venue</span>
                  </div>
                  
                  <h3 className="font-serif text-4xl md:text-5xl font-black text-[#800000] mb-4">
                    Hotel Shri Ganesh
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                          Infront of RTO Office, Patan Rd,<br />
                          Karmeta, Jabalpur, MP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Time & Details */}
                <div className="flex flex-col justify-center">
                  <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-8 h-8 text-[#800000]" />
                      <div>
                        <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
                          Event Timing
                        </p>
                        <p className="text-2xl font-bold text-[#800000]">
                          6:00 PM Onwards
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-[#D4AF37]/30">
                      <p className="text-gray-600 font-medium">
                        <span className="font-bold text-[#800000]">Date:</span> January 9, 2026
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Traditional ceremonies followed by dinner
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <a
                  href="https://maps.app.goo.gl/WSEdu86sddMBEyj37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#800000]"
                >
                  <Navigation className="w-6 h-6" />
                  <span>Get Directions</span>
                </a>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 text-sm">
                  📞 For any assistance, please contact us
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

