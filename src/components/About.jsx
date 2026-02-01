import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-brand-mist dark:bg-brand-charcoal/30 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-full border-2 border-brand-primary p-4 dark:border-brand-slate">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
              alt="HMR HAMID - Founder & CEO"
              className="w-full h-full object-cover rounded-full grayscale"
            />
          </div>
          <div className="absolute bottom-10 -right-4 bg-brand-primary text-brand-parchment p-6 rounded-2xl shadow-xl dark:bg-brand-storm">
            <p className="font-display font-bold text-2xl">HMR HAMID</p>
            <p className="text-sm opacity-80 uppercase tracking-widest">Founder & CEO</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-primary dark:text-brand-parchment">
            Visionary Behind <br />
            <span className="text-brand-slate">The Fragrance</span>
          </h2>
          <div className="space-y-6 text-brand-charcoal dark:text-brand-slate/80 text-lg leading-relaxed">
            <p>
              HMR Fragrance was born out of a deep passion for the ancestral art of perfumery.
              Our founder, **HMR HAMID**, envisioned a brand that brings the mystical
              scents of the East to the modern lifestyle without compromising on purity.
            </p>
            <p>
              "Every drop tells a story," says Hamid. With a meticulous selection of
              the finest ingredients—from Cambodian Oud to Bulgarian Roses—he has
              curated a collection that defines standard and luxury in Thakurgaon and beyond.
            </p>
            <p className="italic font-medium text-brand-primary dark:text-brand-parchment">
              "We don't just sell Attar; we provide an olfactory experience that
              lingers in the memory of those you encounter."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
