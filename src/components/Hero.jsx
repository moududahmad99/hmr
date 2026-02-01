import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-primary dark:text-brand-slate font-medium tracking-widest uppercase text-sm mb-4 block">
            The Essence of Purity
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] text-brand-primary dark:text-brand-parchment">
            Scented <br />
            <span className="text-brand-slate opacity-50 italic">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal dark:text-brand-slate/80 mb-8 max-w-lg leading-relaxed">
            Discover the finest collection of handcrafted Attars. Traditional scents
            reimagined for the modern connoisseur. Pure, long-lasting, and unforgettable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn-primary flex items-center gap-2">
              Explore Collection <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-outline">
              Our Heritage
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800"
              alt="Luxury Attar Bottle"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-primary/5 dark:bg-brand-storm/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-slate/10 dark:bg-brand-charcoal/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
