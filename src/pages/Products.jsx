import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, sizeOptions } from '../data/products';
import { Filter, ShoppingCart, ExternalLink, Star, Sparkles } from 'lucide-react';

const Products = ({ addToCart }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState({});

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 16);

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
      id: `${product.id}-${size.size}` // Unique ID for each size
    });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 px-4 md:px-12 bg-gradient-to-br from-brand-mist/20 via-white to-brand-sage/10 dark:from-brand-deep dark:via-brand-midnight dark:to-brand-royal/20 relative overflow-hidden">
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
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <Star size={8 + Math.random() * 12} className="text-teal-400/40 dark:text-brand-sage/30 fill-teal-400/20 dark:fill-brand-sage/10" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20 blur-3xl"
          style={{ top: '20%', right: '-10%' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-violet-400/15 to-purple-400/15 blur-3xl"
          style={{ bottom: '10%', left: '-5%' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        {/* Sparkle Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-teal-400/50 dark:bg-brand-sage/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 dark:bg-brand-sage/10 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-teal-600 dark:text-brand-sage" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-brand-sage">Premium Collection</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-royal dark:text-white mb-3 md:mb-4">
            Our Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-brand-sage dark:to-teal-400">Collection</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-navy/70 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Discover the finest attars, crafted with passion and tradition. Each fragrance tells a unique story.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Filter size={18} className="text-teal-600 dark:text-brand-sage" />
            <span className="text-sm md:text-base font-bold text-brand-deep dark:text-white">
              Filter by Category
            </span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-brand-sage dark:to-teal-500 text-white dark:text-brand-deep shadow-lg shadow-teal-500/30'
                    : 'bg-white/80 dark:bg-white/10 text-brand-navy dark:text-gray-200 border border-teal-200/50 dark:border-brand-sage/20 hover:border-teal-400 dark:hover:border-brand-sage/50'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => {
              const selectedSize = getSelectedSize(product.id);
              const currentPrice = calculatePrice(product.basePrice, selectedSize);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.03, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 md:p-5 rounded-2xl md:rounded-3xl 
                           border border-white/60 dark:border-white/10 hover:border-teal-400/50 dark:hover:border-brand-sage/40 
                           transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden"
                >
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-teal-50/30 dark:from-white/5 dark:via-transparent dark:to-brand-sage/5 pointer-events-none" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>

                  {/* Product Image */}
                  <div className={`aspect-square bg-gradient-to-br ${product.gradient} rounded-xl md:rounded-2xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden relative shadow-inner`}>
                    {/* Islamic Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMMjUgMTVMNDAgMjBMMjUgMjVMMjAgNDBMMTUgMjVMMCAgMjBMMTUgMTV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48L3N2Zz4=')]" />

                    {/* Bottle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="relative w-16 h-24 md:w-20 md:h-28"
                    >
                      <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-b from-white/45 via-white/30 to-white/15 backdrop-blur-sm rounded-lg border border-white/50 shadow-xl" />
                      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[35%] h-[20%] bg-gradient-to-b from-white/55 to-white/35 rounded-t-lg border border-white/50" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18%] bg-gradient-to-b from-slate-300/90 to-slate-400/70 rounded-full border border-white/50 shadow-md" />
                      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-white/25 backdrop-blur-sm rounded border border-white/40" />
                    </motion.div>

                    {/* Category Badge */}
                    <span className="absolute top-2 left-2 text-[10px] md:text-xs px-2 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm text-teal-700 dark:text-white rounded-full font-semibold border border-white/50">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-brand-deep dark:text-white line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-navy/60 dark:text-gray-400 line-clamp-2 min-h-[2.5rem]">
                      {product.description}
                    </p>

                    {/* Size Selection */}
                    <div className="pt-2">
                      <p className="text-[10px] md:text-xs font-semibold text-brand-navy/50 dark:text-gray-500 mb-1.5 uppercase tracking-wider">Select Size</p>
                      <div className="grid grid-cols-4 gap-1">
                        {sizeOptions.map((size) => (
                          <button
                            key={size.size}
                            onClick={() => setProductSize(product.id, size)}
                            className={`py-1.5 px-1 rounded-lg text-[10px] md:text-xs font-bold transition-all duration-300
                              ${selectedSize.size === size.size
                                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-500/30'
                                : 'bg-gray-100 dark:bg-white/10 text-brand-navy dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-white/20'
                              }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-xl md:text-2xl font-black text-teal-600 dark:text-brand-sage">
                        ৳{currentPrice}
                      </span>
                      <span className="text-xs text-brand-navy/50 dark:text-gray-500">for {selectedSize.label}</span>
                    </div>

                    {/* Action Buttons - Always Visible */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-teal-500/30"
                      >
                        <ShoppingCart size={14} />
                        <span>Add</span>
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-brand-royal/10 dark:bg-white/10 hover:bg-brand-royal/20 dark:hover:bg-white/20 text-brand-royal dark:text-white rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 border border-brand-royal/20 dark:border-white/20"
                      >
                        <ExternalLink size={14} />
                        <span>Buy</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {!showAll && filteredProducts.length > 16 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pb-16 md:pb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-brand-sage dark:to-teal-500 text-white dark:text-brand-deep rounded-full font-bold text-sm md:text-lg uppercase tracking-wider shadow-2xl hover:shadow-teal-500/30 transition-all duration-300"
            >
              View More Products ({filteredProducts.length - 16} more)
            </motion.button>
          </motion.div>
        )}

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center pb-8"
        >
          <p className="text-sm text-brand-navy/50 dark:text-gray-500">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
