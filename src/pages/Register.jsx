import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Heart } from 'lucide-react';
import { GlassCard, PageTransition, AnimatedText } from '../components/ui';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    dietary: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with actual Google Sheets integration)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        dietary: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background decoration with Indian motifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-maroon rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      {/* Decorative corner patterns */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,10 L70,30 L50,50 L30,30 Z M50,50 L70,70 L50,90 L30,70 Z" fill="#6D0E0E" />
        </svg>
      </div>

        <div className="container mx-auto max-w-2xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-6"
            >
              <svg className="w-16 h-16 text-maroon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 9L16.5 13.5L19 21L12 16L5 21L7.5 13.5L2 9L9 9L12 2Z" />
                <circle cx="12" cy="12" r="3" className="fill-gold" />
              </svg>
            </motion.div>
            
            <AnimatedText
              text="Join Our Celebration"
              delay={0.3}
              className="font-serif text-5xl md:text-6xl font-bold mb-4 text-shadow-luxury text-maroon"
            />
            <p className="text-lg text-charcoal/70 mb-2">
              We would be honored by your presence
            </p>
            <p className="text-maroon font-serif">
              आपका स्वागत है
            </p>
          </motion.div>

          {/* Form */}
          <GlassCard delay={0.5}>
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-charcoal/70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-maroon">
                      Full Name *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-charcoal/70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-maroon">
                      Email Address *
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-charcoal/70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-maroon">
                      Phone Number *
                    </label>
                  </div>

                  {/* Number of Guests */}
                  <div className="relative">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-gold">
                      Number of Guests
                    </label>
                  </div>

                  {/* Dietary Requirements */}
                  <div className="relative">
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-charcoal/70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-maroon">
                      Dietary Requirements
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-maroon/20 rounded-xl focus:border-maroon focus:outline-none transition-all duration-300 resize-none placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-cream px-2 text-sm text-charcoal/70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-maroon">
                      Special Message
                    </label>
                  </div>

                  {/* Submit Button */}
                    <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 indian-gradient text-white rounded-xl font-medium text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-gold"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Confirm Attendance
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2 
                    }}
                    className="w-20 h-20 indian-gradient rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gold"
                  >
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-3xl font-bold mb-2 text-maroon"
                  >
                    धन्यवाद!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-gold font-medium mb-3"
                  >
                    Thank You!
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-charcoal/70"
                  >
                    Your RSVP has been received. We can't wait to celebrate with you!
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-center text-sm text-charcoal/60"
          >
            <p>
              Questions? Contact us at{' '}
              <a href="mailto:priyamihir2026@example.com" className="text-maroon hover:text-gold hover:underline transition-colors">
                priyamihir2026@example.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

