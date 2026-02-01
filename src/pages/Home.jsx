import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Package, Shield, ShoppingCart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, sizeOptions } from '../data/products';

const Home = ({ addToCart }) => {
  const featuredProducts = products.slice(0, 6);
  const [selectedSizes, setSelectedSizes] = useState({});

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
    <div className="min-h-screen pt-24 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-cyan-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden relative transition-colors duration-500">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-60 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400/10 via-teal-300/5 to-emerald-400/10 blur-3xl"
            style={{ top: '-10%', left: '-10%' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/10 via-purple-400/5 to-indigo-500/10 blur-3xl"
            style={{ top: '30%', right: '-15%' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-400/10 via-cyan-300/5 to-sky-400/10 blur-3xl"
            style={{ bottom: '10%', left: '20%' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          />
        </div>

        {/* Premium Pattern Overlay with Reduced Opacity */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZjZDUiIGZpbGwtb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTEwIDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-drift transition-opacity duration-500"></div>

        {/* Floating Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${10 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360],
              y: [0, -20, 0], // Added vertical movement
            }}
            transition={{
              duration: 2 + Math.random() * 3, // Faster
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Star
              size={8 + Math.random() * 12}
              className="text-cyan-600/40 dark:text-cyan-400/40 fill-cyan-400/20"
            />
          </motion.div>
        ))}

        {/* Floating Sparkle Particles - Increased Count */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              y: [0, -30, 0], // More movement
            }}
            transition={{
              duration: 2, // Faster
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Premium Corner Decoration */}
        <div className="absolute top-20 right-4 md:right-12 opacity-80 dark:opacity-100">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Star size={48} className="text-cyan-500 dark:text-cyan-400 fill-cyan-400/20 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Star size={32} className="text-teal-400/60 dark:text-teal-300/60" />
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Animation - Cyan/Teal Theme */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10 dark:opacity-20 transition-opacity duration-500" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="url(#mainGradient)"
            animate={{
              d: [
                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,202.7C672,192,768,192,864,202.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan-500 */}
              <stop offset="50%" stopColor="#14b8a6" /> {/* Teal-500 */}
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Second Wave */}
        <svg className="absolute bottom-0 left-0 w-full opacity-5 dark:opacity-15 transition-opacity duration-500" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#22d3ee" // Cyan-400
            animate={{
              d: [
                "M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,181.3C672,192,768,224,864,213.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left py-12 md:py-28"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/20 dark:border-cyan-400/30 rounded-full mb-6 md:mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/5 transition-colors duration-300"
          >
            <Sparkles className="text-cyan-600 dark:text-cyan-400" size={18} />
            <span className="text-cyan-700 dark:text-cyan-300 font-bold uppercase tracking-wider text-xs md:text-sm">
              Premium Attar Collection
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-slate-900 dark:text-white transition-colors duration-300"
          >
            <span>Discover the Essence of</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 dark:from-cyan-400 dark:via-teal-300 dark:to-cyan-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Authentic Attars
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-xl mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0 transition-colors duration-300"
          >
            HMR Fragrance brings you the finest collection of concentrated perfume oils,
            crafted with passion and tradition. Experience luxury in every drop.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start mb-12 md:mb-0"
          >
            <Link to="/products" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group w-full px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 dark:from-cyan-500 dark:via-teal-400 dark:to-cyan-500 text-white dark:text-slate-900 rounded-full font-bold text-base md:text-lg uppercase tracking-wider shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                Explore Collection
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </motion.button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-cyan-600/30 dark:border-cyan-400/50 text-cyan-700 dark:text-cyan-400 rounded-full font-bold text-base md:text-lg uppercase tracking-wider hover:bg-cyan-500/5 hover:border-cyan-600 dark:hover:border-cyan-400 transition-all duration-300"
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-2xl mx-auto md:mx-0"
          >
            {[
              { value: "24+", label: "Premium Attars" },
              { value: "100%", label: "Natural Oils" },
              { value: "5★", label: "Customer Rating" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center md:text-left bg-white/60 dark:bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-cyan-200/50 dark:border-cyan-400/20 shadow-xl shadow-cyan-900/5 dark:shadow-black/20 transition-all duration-300"
              >
                <div className="text-2xl md:text-4xl font-black text-cyan-600 dark:text-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-24 pb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-4"
            >
              <Star size={14} className="text-cyan-600 dark:text-cyan-400 fill-cyan-400/30" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">Best Sellers</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">Collection</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 dark:text-gray-400 transition-colors duration-300">
              Discover our most popular attars
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {featuredProducts.map((product, idx) => {
              const selectedSize = getSelectedSize(product.id);
              const currentPrice = calculatePrice(product.basePrice, selectedSize);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 md:p-5 rounded-2xl md:rounded-3xl border border-cyan-100 dark:border-white/10 hover:border-cyan-400/40 shadow-xl shadow-cyan-900/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-50/20 dark:from-white/5 dark:via-transparent dark:to-cyan-500/5 pointer-events-none" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-100/20 dark:via-white/20 to-transparent" />
                  </div>

                  {/* Product Image */}
                  <div className={`aspect-square bg-gradient-to-br ${product.gradient} rounded-xl md:rounded-2xl mb-3 md:mb-4 flex items-center justify-center relative overflow-hidden shadow-inner`}>
                    {/* Islamic Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMMjUgMTVMNDAgMjBMMjUgMjVMMjAgNDBMMTUgMjVMMCAgMjBMMTUgMTV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48L3N2Zz4=')]" />

                    {/* Bottle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="relative w-14 h-20 md:w-18 md:h-26"
                    >
                      <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-b from-white/45 via-white/30 to-white/15 backdrop-blur-sm rounded-lg border border-white/50 shadow-xl" />
                      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[35%] h-[20%] bg-gradient-to-b from-white/55 to-white/35 rounded-t-lg border border-white/50" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18%] bg-gradient-to-b from-slate-300/90 to-slate-400/70 rounded-full border border-white/50 shadow-md" />
                      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-white/25 backdrop-blur-sm rounded border border-white/40" />
                    </motion.div>

                    {/* Category Badge */}
                    <span className="absolute top-2 left-2 text-[9px] md:text-xs px-2 py-0.5 bg-white/90 dark:bg-black/50 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 rounded-full font-semibold border border-cyan-100 dark:border-cyan-400/30">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="relative text-sm md:text-base font-bold text-slate-800 dark:text-white mb-1 truncate transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Size Selection */}
                  <div className="relative mb-2">
                    <div className="grid grid-cols-4 gap-1">
                      {sizeOptions.map((size) => (
                        <button
                          key={size.size}
                          onClick={() => setProductSize(product.id, size)}
                          className={`py-1 px-0.5 rounded-md text-[9px] md:text-[10px] font-bold transition-all duration-300
                            ${selectedSize.size === size.size
                              ? 'bg-gradient-to-r from-cyan-600 to-teal-500 text-white shadow-sm shadow-cyan-500/30'
                              : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-white/20'
                            }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="relative flex items-center justify-between mb-2">
                    <p className="text-lg md:text-xl font-black text-cyan-600 dark:text-cyan-400">
                      ৳{currentPrice}
                    </p>
                    <span className="text-[10px] text-slate-500 dark:text-gray-500">{selectedSize.label}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 flex items-center justify-center gap-1 py-2 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 text-white rounded-xl font-semibold text-xs transition-all duration-300 shadow-lg shadow-cyan-500/20"
                    >
                      <ShoppingCart size={12} />
                      <span className="hidden sm:inline">Add</span>
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="flex-1 flex items-center justify-center gap-1 py-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-xl font-semibold text-xs transition-all duration-300 border border-slate-200 dark:border-white/20"
                    >
                      <ExternalLink size={12} />
                      <span>Buy</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-full font-bold uppercase tracking-wider shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/40"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-16 md:pb-20"
        >
          {[
            { icon: <Star size={28} className="fill-cyan-400/30" />, title: "Premium Quality", desc: "Handpicked ingredients" },
            { icon: <Package size={28} />, title: "Fast Delivery", desc: "Nationwide shipping" },
            { icon: <Shield size={28} />, title: "100% Authentic", desc: "Guaranteed purity" }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-4 p-4 md:p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-100 dark:border-white/10 hover:border-cyan-400/30 shadow-xl shadow-cyan-900/5 dark:shadow-black/20 transition-all duration-300"
            >
              <div className="text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base mb-0.5">
                  {badge.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400">
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
