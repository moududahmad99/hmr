import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ShoppingBag, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode, cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animated Logo Component
  const Logo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 relative"
    >
      {/* Logo Container with Glow */}
      <div className="relative">
        {/* Animated Ring */}
        <motion.div
          className="absolute -inset-1 rounded-full opacity-60 blur-md bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sparkle Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: [-4, 24, 8][i],
              left: [32, -6, 42][i],
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          >
            <Sparkles size={10} className="text-cyan-400" />
          </motion.div>
        ))}

        {/* Logo Image */}
        <motion.img
          src="/logo.png"
          alt="HMR Fragrance"
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col -gap-1">
        <motion.span
          className={`font-black text-xl tracking-tight leading-none transition-colors duration-300
            ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
          animate={{
            textShadow: isDarkMode
              ? ['0 0 10px rgba(34,211,238,0)', '0 0 20px rgba(34,211,238,0.3)', '0 0 10px rgba(34,211,238,0)']
              : 'none',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          HMR
        </motion.span>
        <span className={`text-[9px] uppercase tracking-[0.2em] font-semibold
          ${isDarkMode ? 'text-cyan-400' : 'text-slate-500'}`}>
          Fragrance
        </span>
      </div>
    </motion.div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4
        ${scrolled ? 'md:py-2' : 'md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className={`relative flex items-center justify-between p-2 px-6 rounded-3xl transition-all duration-500
              ${scrolled
                ? (isDarkMode ? 'bg-slate-900/90 border-cyan-500/20' : 'bg-white/90 border-slate-200/50')
                : (isDarkMode ? 'bg-slate-900/70' : 'bg-white/70')} 
              backdrop-blur-xl border shadow-2xl ${isDarkMode ? 'shadow-cyan-500/10' : 'shadow-slate-500/10'}`}
          >
            <Link to="/">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center gap-2 p-1 rounded-2xl border
              ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100/50 border-slate-200/50'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-xl
                    ${location.pathname === link.path
                      ? 'text-white'
                      : (isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')}`}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-bg"
                      className={`absolute inset-0 z-0 rounded-xl shadow-lg
                        ${isDarkMode
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 shadow-cyan-500/30'
                          : 'bg-gradient-to-r from-slate-700 to-slate-600 shadow-slate-500/30'}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Cart Button */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onCartClick}
                className={`p-3 rounded-2xl relative transition-colors shadow-lg
                  ${isDarkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-cyan-500/30'
                    : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-slate-500/30'}`}
              >
                <ShoppingBag size={20} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className={`absolute -top-1 -right-1 text-[10px] 
                      w-5 h-5 flex items-center justify-center rounded-full font-black border-2
                      ${isDarkMode
                          ? 'bg-white text-cyan-600 border-slate-900'
                          : 'bg-cyan-400 text-slate-900 border-white'}`}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-2xl transition-colors
                ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`fixed inset-0 z-[60] p-6 pt-32 flex flex-col gap-8
                ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={32} />
              </button>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-black uppercase tracking-tighter transition-colors flex items-center gap-4 group
                      ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-slate-500'}`}
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" size={40} />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Cart Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsOpen(false);
                  onCartClick();
                }}
                className={`mt-8 p-6 rounded-2xl flex items-center justify-between text-xl font-bold
                  ${isDarkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                    : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white'}`}
              >
                <span>View Cart</span>
                {cartCount > 0 && (
                  <span className={`px-4 py-2 rounded-full
                    ${isDarkMode ? 'bg-white text-cyan-600' : 'bg-white text-slate-800'}`}>
                    {cartCount}
                  </span>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className={`fixed bottom-8 left-8 z-40 p-4 rounded-full shadow-2xl transition-all duration-300
          ${isDarkMode
            ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-cyan-500/30'
            : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-slate-500/30'}`}
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDarkMode ? 'dark' : 'light'}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Navbar;
