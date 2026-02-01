import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { products } from '../data/products';

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-brand-primary dark:text-brand-parchment">
          Fragrant <span className="text-brand-slate">Gallery</span>
        </h2>
        <div className="w-24 h-1 bg-brand-primary dark:bg-brand-slate mx-auto mb-6 rounded-full" />
        <p className="text-brand-charcoal dark:text-brand-slate/70 max-w-2xl mx-auto text-lg">
          Explore our exclusive collection of 100% natural Attars, bottled with love
          and precision. Each scent is a masterpiece of tradition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index % 4 * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl
                       border border-white/70 dark:border-brand-slate/20 hover:border-teal-400/50 dark:hover:border-brand-slate/50
                       hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-teal-50/40 dark:from-brand-storm/20 dark:via-transparent dark:to-brand-royal/20 pointer-events-none z-10" />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>

            {/* Product Image Area */}
            <div className={`aspect-square overflow-hidden relative bg-gradient-to-br ${product.gradient}`}>
              {/* Islamic Pattern Overlay */}
              <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMMjUgMTVMNDAgMjBMMjUgMjVMMjAgNDBMMTUgMjVMMCAgMjBMMTUgMTV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48L3N2Zz4=')]" />

              {/* Elegant Bottle Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-20 h-28"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Bottle Body */}
                  <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-b from-white/45 via-white/30 to-white/15 backdrop-blur-sm rounded-lg border border-white/50 shadow-xl" />
                  {/* Bottle Neck */}
                  <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[35%] h-[20%] bg-gradient-to-b from-white/55 to-white/35 rounded-t-lg border border-white/50" />
                  {/* Bottle Cap */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18%] bg-gradient-to-b from-slate-300/90 to-slate-400/70 rounded-full border border-white/50 shadow-md" />
                  {/* Bottle Label */}
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[25%] bg-white/25 backdrop-blur-sm rounded border border-white/40" />
                </motion.div>
              </div>

              <div className="absolute top-4 right-4 bg-white/95 dark:bg-brand-midnight/95 backdrop-blur-md shadow-lg px-3 py-1.5 
                            rounded-full text-brand-primary dark:text-brand-sage font-bold text-sm border border-white/60 z-30">
                ৳ {product.price}
              </div>
              <div className="absolute top-4 left-4 z-30">
                <span className="px-2.5 py-1 bg-white/90 dark:bg-brand-royal/90 backdrop-blur-sm text-brand-royal dark:text-brand-sage text-xs font-semibold rounded-full border border-white/50">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="p-5 relative z-20">
              <h3 className="font-bold text-xl mb-2 dark:text-brand-parchment">{product.name}</h3>
              <p className="text-sm text-brand-charcoal/70 dark:text-brand-slate/60 mb-4 line-clamp-2">
                {product.description || "Premium quality attar with long-lasting fragrance."}
              </p>

              {/* Action Buttons - Always Visible */}
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-teal-500/30"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-primary/10 dark:bg-brand-slate/20 hover:bg-brand-primary/20 dark:hover:bg-brand-slate/30 text-brand-primary dark:text-brand-slate rounded-xl font-semibold text-sm transition-all duration-300 border border-brand-primary/20 dark:border-brand-slate/30"
                >
                  Buy Now <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
