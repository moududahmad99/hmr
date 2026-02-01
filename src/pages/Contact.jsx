import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 bg-gradient-to-br from-brand-deep via-brand-royal/40 to-brand-navy dark:from-brand-deep dark:via-brand-royal/60 dark:to-brand-navy/80 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-sage/20 border-2 border-brand-sage/30 rounded-full mb-6"
          >
            <MessageCircle className="text-brand-sage" size={20} />
            <span className="text-brand-sage font-bold uppercase tracking-wider text-sm">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Get in <span className="text-brand-sage">Touch</span>
          </h2>
          <p className="text-brand-mist/70 text-lg mb-12 leading-relaxed">
            Have questions about our blends? We're here to help you find your perfect scent.
            Reach out to us and let's start a conversation.
          </p>

          <div className="space-y-6">
            {[
              { icon: <Phone size={24} />, label: "Call Us", value: "+880 1234 567890" },
              { icon: <Mail size={24} />, label: "Email", value: "hello@hmrfragrance.com" },
              { icon: <MapPin size={24} />, label: "Visit Us", value: "Dhaka, Bangladesh" }
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-brand-royal/30 dark:bg-brand-royal/20 rounded-2xl border border-brand-sage/10 hover:border-brand-sage/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-sage/20 rounded-xl flex items-center justify-center text-brand-sage">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm text-brand-mist/50 uppercase tracking-wider font-semibold">{contact.label}</p>
                  <p className="text-lg font-bold text-brand-parchment">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-brand-royal/30 dark:bg-brand-royal/20 p-8 md:p-10 rounded-3xl border-2 border-brand-sage/10 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-black mb-6 text-brand-parchment">Send us a Message</h3>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm text-brand-mist/70 font-semibold uppercase tracking-wider">First Name</label>
              <input
                type="text"
                className="w-full bg-brand-deep/50 border-2 border-brand-sage/20 rounded-xl px-4 py-3 focus:border-brand-sage outline-none transition-colors text-white placeholder:text-brand-mist/30"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-brand-mist/70 font-semibold uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                className="w-full bg-brand-deep/50 border-2 border-brand-sage/20 rounded-xl px-4 py-3 focus:border-brand-sage outline-none transition-colors text-white placeholder:text-brand-mist/30"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-sm text-brand-mist/70 font-semibold uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              className="w-full bg-brand-deep/50 border-2 border-brand-sage/20 rounded-xl px-4 py-3 focus:border-brand-sage outline-none transition-colors text-white placeholder:text-brand-mist/30"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm text-brand-mist/70 font-semibold uppercase tracking-wider">Message</label>
            <textarea
              rows="4"
              className="w-full bg-brand-deep/50 border-2 border-brand-sage/20 rounded-xl px-4 py-3 focus:border-brand-sage outline-none transition-colors resize-none text-white placeholder:text-brand-mist/30"
              placeholder="Tell us about your fragrance preferences..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-brand-sage text-brand-deep font-black text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-brand-sage/90 transition-colors shadow-2xl hover:shadow-brand-sage/50"
          >
            <Send size={20} /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
