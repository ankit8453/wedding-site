import { motion } from 'framer-motion';
import { Waves, Mountain, Castle, Sparkles } from 'lucide-react';

export const ExploreJabalpur = () => {
  const attractions = [
    {
      icon: Waves,
      title: 'Dhuandhar Falls',
      description: 'The smoky cascade of Narmada',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mountain,
      title: 'Marble Rocks (Bhedaghat)',
      description: 'A boat ride through stunning white gorges',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      color: 'from-gray-400 to-stone-300',
    },
    {
      icon: Castle,
      title: 'Madan Mahal Fort',
      description: 'The historic pride of the Gond dynasty',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
      color: 'from-amber-600 to-orange-500',
    },
  ];

  return (
    <section className="py-24 px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23800000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#800000" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
        </svg>
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
            <Sparkles className="w-10 h-10 text-[#D4AF37]" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl font-black text-[#800000] mb-4">
            Explore Jabalpur
          </h2>
          <p className="text-2xl text-gray-700 font-semibold mb-2">
            The City of Marble Rocks
          </p>
          <p className="text-lg text-gray-600 italic">
            Discover the beauty while you're here
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#D4AF37] hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${attraction.image})` }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${attraction.color} opacity-40`} />
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                      <Icon className="w-7 h-7 text-[#800000]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-white to-amber-50/30">
                    <h3 className="font-serif text-2xl font-bold text-[#800000] mb-3">
                      {attraction.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {attraction.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fun Fact Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[#800000] to-[#A00000] rounded-2xl p-8 md:p-10 border-4 border-[#D4AF37] shadow-2xl">
            {/* Sparkle decorations */}
            <div className="absolute -top-4 -left-4 text-5xl">✨</div>
            <div className="absolute -top-4 -right-4 text-5xl">✨</div>
            
            <div className="text-center text-white">
              <div className="inline-block px-6 py-2 bg-[#D4AF37] text-[#800000] rounded-full mb-4 font-bold text-sm uppercase tracking-wider">
                Did You Know?
              </div>
              
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-2">
                Jabalpur is known as the <span className="font-black text-[#D4AF37]">Cultural Capital of Madhya Pradesh</span>
              </p>
              
              <div className="w-32 h-1 bg-[#D4AF37] mx-auto my-4" />
              
              <p className="text-lg md:text-xl font-medium">
                and the birthplace of the game <span className="font-bold text-[#D4AF37]">Snooker!</span> 🎱
              </p>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Additional Info */}
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

