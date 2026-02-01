import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-brand-primary dark:text-brand-parchment leading-tight">
              Visit Our <br />
              <span className="text-brand-slate italic underline decoration-brand-primary/20 
                               dark:decoration-brand-slate/20">Studio</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-primary/5 dark:bg-brand-storm/20 rounded-2xl flex items-center 
                              justify-center text-brand-primary dark:text-brand-slate shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 dark:text-brand-parchment">Location</h3>
                  <p className="text-brand-charcoal/60 dark:text-brand-slate/60 max-w-xs leading-relaxed">
                    Shop 2, Mordern Plaza, <br />
                    Shahid Mohammad Ali Rd, <br />
                    Thakurgaon, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-primary/5 dark:bg-brand-storm/20 rounded-2xl flex items-center 
                              justify-center text-brand-primary dark:text-brand-slate shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 dark:text-brand-parchment">Contact</h3>
                  <p className="text-brand-charcoal/60 dark:text-brand-slate/60 leading-relaxed">
                    +880 1879 725901 <br />
                    hmrfragrance@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-primary/5 dark:bg-brand-storm/20 rounded-2xl flex items-center 
                              justify-center text-brand-primary dark:text-brand-slate shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 dark:text-brand-parchment">Hours</h3>
                  <p className="text-brand-charcoal/60 dark:text-brand-slate/60 leading-relaxed">
                    Sat - Thu: 10:00 AM - 09:00 PM <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-brand-primary dark:bg-brand-storm rounded-[3rem] p-12 text-brand-parchment shadow-2xl">
              <MessageCircle size={48} className="mb-6 opacity-30" />
              <h3 className="text-3xl font-bold mb-6">Need expert advice?</h3>
              <p className="text-brand-parchment/70 text-lg mb-10 leading-relaxed">
                Reach out to us for personalized fragrance consultations or bulk order inquiries.
                Our founder **HMR HAMID** is personally involved in every major consultation.
              </p>
              <a
                href="https://wa.me/8801879725901"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand-parchment text-brand-primary px-8 py-4 
                          rounded-full font-bold hover:bg-brand-slate transition-colors"
              >
                Send Message <MessageCircle size={20} />
              </a>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand-primary/20 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-[10px] border-brand-slate/5 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
