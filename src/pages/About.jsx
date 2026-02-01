import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users, Leaf, Trophy, Star, Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 md:pt-32 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Stars */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Star size={8 + Math.random() * 10} className="text-cyan-400/30 dark:text-cyan-400/20 fill-cyan-400/10" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"
          style={{ top: '20%', right: '-15%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-teal-400/10 blur-3xl"
          style={{ bottom: '20%', left: '-10%' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-4 md:mb-6"
          >
            <Heart className="text-cyan-500 dark:text-cyan-400" size={18} />
            <span className="text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider text-xs md:text-sm">
              Our Story
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 md:mb-8">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">Are</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
              >
                HMR Fragrance was started by <span className="font-bold text-cyan-600 dark:text-cyan-400">HMR HAMID</span>.
                We make perfume oils the old way, with heart and skill.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
              >
                We believe a good smell is more than just nice. It's part of who you are. It brings back memories. It makes you feel special.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
              >
                We pick only the best natural oils from around the world. Each bottle is made with care and love.
              </motion.p>

              {/* Social Links in About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-3 pt-4"
              >
                <span className="text-sm text-slate-500 dark:text-gray-400 mr-2">Follow us:</span>
                {[
                  { icon: <Facebook size={18} />, href: '#', color: 'hover:bg-blue-500 hover:text-white' },
                  { icon: <Instagram size={18} />, href: '#', color: 'hover:bg-pink-500 hover:text-white' },
                  { icon: <MessageCircle size={18} />, href: '#', color: 'hover:bg-green-500 hover:text-white' },
                  { icon: <Phone size={18} />, href: '#', color: 'hover:bg-cyan-500 hover:text-white' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 bg-slate-100 dark:bg-white/10 rounded-xl text-slate-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-lg shadow-black/5`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-emerald-500/20 dark:from-cyan-400/10 dark:via-teal-400/5 dark:to-emerald-400/10 rounded-2xl md:rounded-3xl overflow-hidden relative border border-cyan-400/20 dark:border-cyan-400/10 shadow-2xl shadow-cyan-500/10"
            >
              {/* Animated Pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMMjUgMTVMNDAgMjBMMjUgMjVMMjAgNDBMMTUgMjVMMCAgMjBMMTUgMTV6IiBmaWxsPSJyZ2JhKDM0LDIxMSwyMzgsMC4zKSIvPjwvc3ZnPg==")`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center p-6"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Award className="mx-auto mb-4 text-cyan-500 dark:text-cyan-400" size={60} />
                  </motion.div>
                  <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                    Top Quality
                  </p>
                  <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                    Since 2020
                  </p>
                </motion.div>
              </div>

              {/* Floating Sparkles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  <Sparkles size={16} className="text-cyan-400/60" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 md:mb-8 text-center">
            Why Pick <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">HMR Fragrance?</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Leaf size={28} />, title: "All Natural", desc: "Pure plant oils" },
              { icon: <Trophy size={28} />, title: "Best Quality", desc: "Top rated" },
              { icon: <Users size={28} />, title: "5000+ Buyers", desc: "Happy customers" },
              { icon: <Sparkles size={28} />, title: "Lasts Long", desc: "All day smell" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-4 md:p-6 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-cyan-200/50 dark:border-white/10 text-center shadow-xl shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <motion.div
                  className="text-cyan-500 dark:text-cyan-400 mb-2 md:mb-3 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 pb-16 md:pb-20"
        >
          {[
            {
              icon: <Sparkles size={32} />,
              title: "Real & Pure",
              description: "We only use natural stuff from trusted places around the world."
            },
            {
              icon: <Heart size={32} />,
              title: "Made with Love",
              description: "Every bottle is made with care to keep the old perfume ways alive."
            },
            {
              icon: <Award size={32} />,
              title: "Top Notch",
              description: "We never cut corners. Every drop is the best quality you can get."
            }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-6 md:p-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-cyan-200/50 dark:border-white/10 shadow-xl shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-teal-400/0 group-hover:from-cyan-400/5 group-hover:to-teal-400/5 transition-all duration-500" />

              <motion.div
                className="text-cyan-500 dark:text-cyan-400 mb-3 md:mb-4 relative z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 md:mb-3 relative z-10">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 relative z-10">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
