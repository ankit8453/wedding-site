import { motion } from 'framer-motion';
import { Heart, Mountain, Waves, Castle, Sparkles } from 'lucide-react';

export const SoulOfJabalpur = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#800000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black text-[#800000] mb-4">
            The Soul of Jabalpur
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2">
            The City of Marble Rocks
          </p>
          <p className="text-base sm:text-lg text-gray-600 italic">
            Discover the gems of our beloved city
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Gwarighat (Large - 2 columns span) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/80 border-2 border-amber-500/30 shadow-2xl group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: 'url("/images/gwarighat.jpg")' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#D4AF37] rounded-full mb-3 sm:mb-4">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#800000]" />
                  <span className="text-[#800000] font-bold text-xs sm:text-sm uppercase tracking-wider">Spiritual Heart</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 sm:mb-4 drop-shadow-lg">
                  Gwarighat & Narmada Aarti
                </h3>
                
                <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium drop-shadow-md max-w-2xl">
                  The spiritual lifeline of Jabalpur. Witness the divine evening Aarti on the banks of Ma Narmada.
                </p>
              </div>
              
              {/* Icon Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 sm:border-3 md:border-4 border-[#D4AF37] shadow-xl">
                <span className="text-xl sm:text-2xl md:text-3xl">🪔</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Bhedaghat & Marble Rocks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/80 border-2 border-amber-500/30 shadow-2xl group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: 'url("/images/marble-rocks.jpg")' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4AF37] rounded-full mb-3">
                  <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#800000]" />
                  <span className="text-[#800000] font-bold text-xs uppercase tracking-wider">Nature</span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 drop-shadow-lg">
                  Bhedaghat & Marble Rocks
                </h3>
                
                <p className="text-white text-sm sm:text-base leading-relaxed font-medium drop-shadow-md">
                  A boat ride through the gleaming white marble gorges.
                </p>
              </div>
              
              {/* Icon Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-xl">
                <span className="text-lg sm:text-xl md:text-2xl">⛰️</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Dhuandhar Falls */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/80 border-2 border-amber-500/30 shadow-2xl group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: 'url("/images/dhuandhar.jpg")' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4AF37] rounded-full mb-3">
                  <Waves className="w-3 h-3 sm:w-4 sm:h-4 text-[#800000]" />
                  <span className="text-[#800000] font-bold text-xs uppercase tracking-wider">Power</span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 drop-shadow-lg">
                  Dhuandhar Falls
                </h3>
                
                <p className="text-white text-sm sm:text-base leading-relaxed font-medium drop-shadow-md">
                  The spectacular 'Smoke Cascade' waterfall.
                </p>
              </div>
              
              {/* Icon Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-xl">
                <span className="text-lg sm:text-xl md:text-2xl">💧</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Madan Mahal Fort */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/80 border-2 border-amber-500/30 shadow-2xl group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: 'url("/images/madan-mahal.jpg")' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#D4AF37] rounded-full mb-3 sm:mb-4">
                  <Castle className="w-3 h-3 sm:w-4 sm:h-4 text-[#800000]" />
                  <span className="text-[#800000] font-bold text-xs sm:text-sm uppercase tracking-wider">Heritage</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 sm:mb-4 drop-shadow-lg">
                  Madan Mahal Fort
                </h3>
                
                <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed font-medium drop-shadow-md max-w-2xl">
                  The 11th-century Gond fortress perched on balancing rocks.
                </p>
              </div>
              
              {/* Icon Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 sm:border-3 md:border-4 border-[#D4AF37] shadow-xl">
                <span className="text-xl sm:text-2xl md:text-3xl">🏰</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Combined "Did You Know?" Card - All Fun Facts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#800000] via-[#8B0000] to-[#A00000] rounded-3xl p-10 md:p-12 border-4 border-[#D4AF37] shadow-2xl overflow-hidden">
            {/* Decorative Sparkles & Emojis */}
            <div className="absolute -top-4 -left-4 text-5xl">✨</div>
            <div className="absolute -top-4 -right-4 text-5xl">🍥</div>
            <div className="absolute -bottom-4 -left-4 text-5xl">🎱</div>
            <div className="absolute -bottom-4 -right-4 text-5xl">✨</div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Badge */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block px-8 py-3 bg-[#D4AF37] rounded-full shadow-xl">
                <span className="text-[#800000] font-black text-lg uppercase tracking-wider">Did You Know?</span>
              </div>
            </div>

            {/* Content - Three Fun Facts */}
            <div className="text-center text-white relative z-10 space-y-8">
              
              {/* Fact 1: Khoa Jalebi */}
              <div>
                <p className="text-lg sm:text-xl md:text-3xl font-serif leading-relaxed mb-2">
                  Jabalpur invented <span className="font-black text-[#D4AF37] text-xl sm:text-2xl md:text-4xl">Khoa Jalebi</span>! 🍥
                </p>
                <p className="text-base sm:text-lg md:text-xl font-medium text-white/90">
                  Don't leave without trying this sweet delicacy.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-20 h-1 bg-[#D4AF37]" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <div className="w-20 h-1 bg-[#D4AF37]" />
              </div>
              
              {/* Fact 2: Cultural Capital */}
              <div>
                <p className="text-lg sm:text-xl md:text-3xl font-serif leading-relaxed">
                  Known as the <span className="font-black text-[#D4AF37]">Cultural Capital</span>
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-medium">
                  of Madhya Pradesh
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 sm:w-20 h-1 bg-[#D4AF37]" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <div className="w-16 sm:w-20 h-1 bg-[#D4AF37]" />
              </div>
              
              {/* Fact 3: Snooker */}
              <div>
                <p className="text-lg sm:text-xl md:text-3xl font-serif leading-relaxed">
                  The birthplace of the game <span className="font-black text-[#D4AF37]">Snooker</span>! 🎱
                </p>
              </div>

            </div>

            {/* Decorative Corners */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-2xl" />
            <div className="absolute top-3 right-3 w-10 h-10 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-2xl" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-2xl" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-[#D4AF37] rounded-br-2xl" />
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg italic">
            Make your visit memorable by exploring these gems of Madhya Pradesh
          </p>
        </motion.div>
      </div>
    </section>
  );
};

