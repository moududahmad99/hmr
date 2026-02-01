import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Package, Shield, ShoppingCart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, sizeOptions } from '../data/products';

// Magnetic Button Component
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.hypot(clientX - centerX, clientY - centerY);

    if (distance < 100) {
      x.set((clientX - centerX) * 0.3);
      y.set((clientY - centerY) * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

const Home = ({ addToCart }) => {
  const featuredProducts = products.slice(0, 6);
  const [selectedSizes, setSelectedSizes] = useState({});
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // 3D Rotation for Bottle
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Fragrance Cloud State
  const [showCloud, setShowCloud] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowCloud(true);
    setTimeout(() => setShowCloud(false), 2000);
  };

  const getSelectedSize = (productId) => selectedSizes[productId] || sizeOptions[0];

  const setProductSize = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const calculatePrice = (basePrice, sizeOption) => {
    return Math.round(basePrice * sizeOption.multiplier);
  };

  const handleBuyNow = (product) => {
    const size = getSelectedSize(product.id);
    const price = calculatePrice(product.basePrice, size);
    const message = `Hi! I want to order:\n\n*${product.name}*\nSize: ${size.label}\nPrice: ৳${price}\n\nPlease confirm availability.`;
    const whatsappUrl = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = (product) => {
    const size = getSelectedSize(product.id);
    const price = calculatePrice(product.basePrice, size);
    addToCart && addToCart({
      ...product,
      price,
      selectedSize: size.label,
      id: `${product.id}-${size.size}`
    });
  };

  return (
    <motion.div
      ref={containerRef}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 px-6 md:px-12 bg-gradient-to-br from-slate-200 via-zinc-100 to-slate-200 dark:from-slate-950 dark:via-black dark:to-slate-900 overflow-hidden relative transition-colors duration-500"
      onMouseMove={handleInteraction}
    >
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Layered Mist */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`mist-${i}`}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/10 dark:via-white/5 to-transparent blur-3xl"
            animate={{
              x: ['-20%', '20%'],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ top: `${i * 30}%` }}
          />
        ))}

        {/* Energy Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-50">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1="0"
              y1={100 + i * 150}
              x2="100%"
              y2={300 + i * 50}
              stroke="url(#energyGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
                x: [0, 100, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          <defs>
            <linearGradient id="energyGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Drifting Dust Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute w-1 h-1 bg-slate-400/30 dark:bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random()}px)`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Light Rays */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent blur-[100px] rotate-45"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Fragrance Cloud Interaction */}
      <AnimatePresence>
        {showCloud && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.5 }}
            exit={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute pointer-events-none rounded-full blur-[50px] bg-cyan-400/30 z-0"
            style={{
              left: mousePos.x - 50,
              top: mousePos.y - 50,
              width: 100,
              height: 100,
            }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24 gap-12">

          {/* Main Content */}
          <motion.div
            className="text-left md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full mb-6 md:mb-8 backdrop-blur-md shadow-lg shadow-cyan-900/5 dark:shadow-black/20"
            >
              <Sparkles className="text-cyan-600 dark:text-cyan-400" size={18} />
              <span className="text-cyan-700 dark:text-cyan-300 font-bold uppercase tracking-wider text-xs md:text-sm">
                Premium Attar Collection
              </span>
            </motion.div>

            {/* Main Heading with Staggered Characters (Simplified for performance) */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-slate-800 dark:text-white"
            >
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 dark:from-cyan-400 dark:via-teal-300 dark:to-cyan-400 animate-gradient-x">
                Essence of Luxury
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A symphony of rare ingredients, crafted for those who seek the extraordinary.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start md:justify-start items-start md:items-center">
              <Link to="/products" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3">
                  Explore Now
                  <ArrowRight size={20} />
                </MagneticButton>
              </Link>

              <Link to="/about" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-900/10 dark:border-white/20 text-slate-800 dark:text-white rounded-full font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  Our Story
                </MagneticButton>
              </Link>
            </div>
          </motion.div>

          {/* 3D Bottle Animation Area */}
          <motion.div
            className="md:w-1/2 relative h-[500px] flex items-center justify-center perspective-1000"
            style={{ y: yParallax }}
          >
            {/* Floating Info Cards - Fixed outside of the rotation */}
            <div className="absolute top-0 right-12 md:-top-10 md:right-16 z-30 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-slate-900/60 dark:bg-white/10 backdrop-blur-xl border-l-4 border-cyan-400 p-3 md:p-4 rounded-2xl shadow-2xl"
              >
                <p className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-cyan-400 font-black mb-1">Authentic</p>
                <p className="text-white text-[11px] md:text-sm font-bold tracking-wider leading-tight">Premium<br />Distillation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-slate-900/10 dark:border-white/10 p-2 md:p-3 px-4 md:px-6 rounded-xl flex items-center gap-2 md:gap-3 self-end shadow-xl"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-900 dark:text-white text-[9px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">Long Lasting</span>
              </motion.div>
            </div>

            {/* Spinning Product Mockup */}
            <motion.div
              className="relative w-80 md:w-[700px] h-auto aspect-[3/4] flex items-center justify-center z-10 -ml-8 md:ml-0"
              style={{ rotateY: bottleRotate }}
            >
              <img
                src="/banner-hmr-.png"
                alt="Premium Attar"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Orbiting Particles around Bottle */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-[150%] h-[150%] border border-cyan-400/30 rounded-full"
                style={{ rotateX: 60, rotateY: 30 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_20px_#22d3ee]" />
              </motion.div>
            ))}
          </motion.div>
        </div >

        {/* Featured Section with Glass Cards */}
        < div className="mt-32 pb-20 relative overflow-hidden" >
          {/* 3D Background - Round Orbit Type Design */}
          < div className="absolute inset-0 pointer-events-none opacity-20" >
            {
              [...Array(5)].map((_, i) => (
                <motion.div
                  key={`section-orbit-${i}`}
                  className="absolute w-[600px] h-[600px] border border-cyan-400/20 rounded-full"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                    rotateX: 60,
                    rotateY: 30
                  }}
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_20px_#22d3ee]" />
                </motion.div>
              ))
            }
          </div >

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200 relative z-10"
          >
            Curated <span className="text-slate-900 dark:text-cyan-400">Masterpieces</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => {
              const selectedSize = getSelectedSize(product.id);
              const currentPrice = calculatePrice(product.basePrice, selectedSize);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/40 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl mb-6 relative overflow-hidden group-hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] transition-all">
                    <motion.div
                      className="w-full h-full flex items-center justify-center text-4xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      🧪
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{product.name}</h3>
                  <div className="flex justify-between items-end mb-6">
                    <p className="text-xl text-cyan-600 dark:text-cyan-400 font-bold">৳{currentPrice}</p>
                    <div className="flex gap-1">
                      {sizeOptions.map(size => (
                        <button
                          key={size.size}
                          onClick={() => setProductSize(product.id, size)}
                          className={`text-xs px-2 py-1 rounded ${selectedSize.size === size.size ? 'bg-cyan-500 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-400'}`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => handleAddToCart(product)} className="py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity">
                      Add to Cart
                    </button>
                    <button onClick={() => handleBuyNow(product)} className="py-3 rounded-xl border-2 border-slate-200 dark:border-white/20 text-slate-800 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div >
      </div >
    </motion.div >
  );
};

export default Home;
