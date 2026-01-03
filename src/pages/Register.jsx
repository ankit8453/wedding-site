import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Users } from 'lucide-react';
import { PageTransition } from '../components/ui';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    side: '',
    relation: '',
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

    try {
      // Simulate API call (replace with actual backend when ready)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Save to localStorage
      localStorage.setItem('registeredUser', JSON.stringify({
        name: formData.name,
        phone: formData.phone,
      }));

      setIsSubmitting(false);
      setIsSuccess(true);

      // Redirect to Home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Registration error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-stone-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #800000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative corner patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#800000" strokeWidth="2" />
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
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-6"
            >
              <Users className="w-12 h-12 text-[#800000]" />
            </motion.div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-black text-[#800000] mb-4">
              Family Connect
            </h1>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              Register for the celebration
            </p>
            <p className="text-[#800000] font-serif italic">
              हमारे साथ जुड़ें
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-md border-4 border-[#D4AF37] rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-[#800000]/20 rounded-xl focus:border-[#800000] focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#800000] font-semibold">
                      Full Name *
                    </label>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      pattern="[0-9]{10}"
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-[#800000]/20 rounded-xl focus:border-[#800000] focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#800000] font-semibold">
                      WhatsApp Number * (10 digits)
                    </label>
                    <p className="text-xs text-gray-600 mt-1 ml-1">Essential for event updates</p>
                  </div>

                  {/* Which Side? */}
                  <div className="relative">
                    <select
                      name="side"
                      value={formData.side}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-2 border-[#800000]/20 rounded-xl focus:border-[#800000] focus:outline-none transition-all duration-300 appearance-none cursor-pointer font-medium text-gray-700"
                    >
                      <option value="">Select Side *</option>
                      <option value="bride">Bride's Side (लड़की वाले)</option>
                      <option value="groom">Groom's Side (लड़के वाले)</option>
                      <option value="friend">Friend</option>
                    </select>
                    <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-[#800000] font-semibold">
                      Which Side?
                    </label>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Relation / Context */}
                  <div className="relative">
                    <input
                      type="text"
                      name="relation"
                      value={formData.relation}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-white/50 border-2 border-[#800000]/20 rounded-xl focus:border-[#800000] focus:outline-none transition-all duration-300 placeholder-transparent"
                    />
                    <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#800000] font-semibold">
                      Relation / Context *
                    </label>
                    <p className="text-xs text-gray-600 mt-1 ml-1 italic">
                      e.g. Groom's Mama ji, Bride's College Friend, Family Friend
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#800000] to-[#A00000] text-white rounded-xl font-bold text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-[#D4AF37]"
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
                          <span>Registering...</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Register Now
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Info Note */}
                  <div className="mt-4 p-4 bg-[#800000]/5 border border-[#800000]/20 rounded-lg">
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-semibold text-[#800000]">Why these details?</span><br />
                      We need to properly tag and welcome each family member at the venue.
                    </p>
                  </div>
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
                    className="w-20 h-20 bg-gradient-to-r from-[#800000] to-[#A00000] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#D4AF37]"
                  >
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-3xl font-bold mb-2 text-[#800000]"
                  >
                    स्वागत है!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-[#D4AF37] font-bold text-xl mb-3"
                  >
                    Registration Successful!
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 mb-2"
                  >
                    Thank you, <span className="font-bold text-[#800000]">{formData.name}</span>!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="text-gray-600 text-sm"
                  >
                    We'll send event updates to your WhatsApp.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-gray-500 text-sm mt-6"
                  >
                    Redirecting to home...
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            <p>
              Need help? Contact us at{' '}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[#800000] hover:text-[#D4AF37] hover:underline transition-colors font-semibold">
                WhatsApp
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
