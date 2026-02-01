import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative pt-24 pb-12 px-6 overflow-hidden transition-colors duration-500
      ${isDarkMode
        ? 'bg-slate-900 text-white'
        : 'bg-slate-50 text-slate-800'}`}>

      {/* 3D Background - Round Orbit Type Design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`footer-orbit-${i}`}
            className={`absolute w-[600px] h-[600px] border rounded-full
              ${isDarkMode ? 'border-cyan-400/10' : 'border-slate-900/5'}`}
            style={{
              top: i % 2 === 0 ? '-10%' : 'auto',
              bottom: i % 2 !== 0 ? '-10%' : 'auto',
              left: i < 2 ? '-10%' : 'auto',
              right: i >= 2 ? '-10%' : 'auto',
              rotateX: 60,
              rotateY: 30
            }}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
          >
            <div className={`absolute top-0 left-1/2 w-4 h-4 rounded-full blur-[2px] shadow-[0_0_20px_#22d3ee]
              ${isDarkMode ? 'bg-cyan-400' : 'bg-slate-900'}`} />
          </motion.div>
        ))}
      </div>

      {/* Main Glass Card Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`p-8 md:p-12 rounded-[2.5rem] backdrop-blur-2xl border transition-all duration-500
          ${isDarkMode
            ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/40'
            : 'bg-white/60 border-slate-200 shadow-xl shadow-slate-200/50'}`}>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <img
                  src="/logo.png"
                  alt="HMR Fragrance"
                  className={`h-16 w-auto object-contain transition-all duration-300
                    ${isDarkMode ? 'brightness-0 invert' : ''}`}
                />
              </motion.div>

              <p className={`max-w-md text-lg leading-relaxed
                ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Preserving the timeless art of perfumery through rare botanical essences and modern craftsmanship. Hand-crafted in Thakurgaon for those who seek the extraordinary.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={20} />, href: '#', bg: 'hover:bg-[#1877F2]' },
                  { icon: <Instagram size={20} />, href: '#', bg: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
                  { icon: <MessageCircle size={20} />, href: '#', bg: 'hover:bg-[#25D366]' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3.5 rounded-2xl border transition-all duration-300
                      ${isDarkMode
                        ? 'bg-white/5 border-white/10 text-white hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-white'} ${social.bg}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-8
                ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Explore</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Collections', path: '/products' },
                  { name: 'The Studio', path: '/about' },
                  { name: 'Connect', path: '/contact' },
                ].map((link, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }}>
                    <Link
                      to={link.path}
                      className={`font-medium transition-colors border-b border-transparent hover:border-current
                        ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Full Location & Contact */}
            <div className="space-y-6">
              <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-8
                ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>The Base</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className={`p-2.5 rounded-xl border transition-colors
                    ${isDarkMode ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1
                      ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Location</p>
                    <p className={`font-semibold
                      ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      HMR Fragrance Studio<br />
                      Thakurgaon Sadar, Rangpur<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className={`p-2.5 rounded-xl border transition-colors
                    ${isDarkMode ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1
                      ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>WhatsApp</p>
                    <p className={`font-semibold
                      ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>+880 1234 567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8
            ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
            <div className={`flex flex-col items-center md:items-start gap-2
              ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <p className="font-medium">&copy; {currentYear} HMR Fragrance. Reserved</p>
              <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all
                ${isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 group'
                  : 'bg-slate-100 border-slate-200 hover:border-slate-400'}`}
            >
              <span className={`text-xs font-bold uppercase tracking-widest
                ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Crafted by</span>
              <a
                href="https://moudud-portfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-black tracking-tighter text-lg flex items-center gap-1
                  ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
              >
                Sam
                <Sparkles size={14} className="text-cyan-500 animate-pulse" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
