import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ top: '10%', right: '-10%' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"
          style={{ bottom: '10%', left: '-10%' }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles size={12} className="text-cyan-400/40" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              {/* Animated Logo */}
              <motion.div
                className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30"
                animate={{
                  rotate: [0, 3, -3, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBMMTIgOEwyMCAxMEwxMiAxMkwxMCAyMEw4IDEyTDAgMTBMOCA4eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjUpIi8+PC9zdmc+')]" />
                <span className="font-black text-2xl text-white drop-shadow-lg">H</span>
              </motion.div>
              <div>
                <span className="font-black text-2xl tracking-tight">HMR</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-cyan-400">Fragrance</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-sm mb-8 leading-relaxed"
            >
              Premium Attar collection by HMR HAMID. We keep the old ways of making perfumes alive with a modern touch. Pure, Natural, and Timeless.
            </motion.p>

            {/* Social Media Links with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {[
                { icon: <Facebook size={20} />, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                { icon: <MessageCircle size={20} />, href: '#', label: 'WhatsApp', color: 'hover:bg-green-600' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 ${social.color} transition-all duration-300 shadow-lg shadow-black/20`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-cyan-400">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-cyan-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Thakurgaon, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <span>WhatsApp Available</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Contact Us</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500"
        >
          <p>&copy; {currentYear} HMR Fragrance. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <motion.p
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Designed by{' '}
            <a
              href="https://moudud-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
            >
              Sam
              <ExternalLink size={12} />
            </a>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
