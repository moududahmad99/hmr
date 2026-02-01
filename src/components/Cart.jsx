import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

const Cart = ({ isOpen, onClose, items, total, onRemove, onUpdateQty, onCheckout }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-mist dark:bg-brand-midnight 
                      shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-brand-slate/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-primary dark:text-brand-slate" />
                <h2 className="text-xl font-bold dark:text-brand-parchment">Shopping Bag</h2>
                <span className="bg-brand-primary/10 text-brand-primary dark:bg-brand-storm dark:text-brand-slate 
                                px-2 py-0.5 rounded-full text-xs font-bold">
                  {items.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full dark:hover:bg-white/5 transition-colors">
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full opacity-40">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-lg">Your bag is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 group bg-white/60 dark:bg-brand-royal/20 p-3 rounded-2xl backdrop-blur-sm border border-brand-slate/10"
                  >
                    {/* Product Image with Gradient */}
                    <div className={`w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br ${item.gradient || 'from-teal-900 to-emerald-700'} flex items-center justify-center relative`}>
                      {/* Islamic Pattern */}
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBMMjUgMTVMNDAgMjBMMjUgMjVMMjAgNDBMMTUgMjVMMCAgMjBMMTUgMTV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz48L3N2Zz4=')]" />
                      {/* Elegant Bottle */}
                      <div className="relative w-10 h-14">
                        <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm rounded-lg border border-white/40 shadow-lg" />
                        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[35%] h-[20%] bg-gradient-to-b from-white/50 to-white/30 rounded-t-lg border border-white/40" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18%] bg-gradient-to-b from-slate-300/80 to-slate-400/60 rounded-full border border-white/40" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold truncate dark:text-brand-parchment">{item.name}</h3>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-sm text-brand-charcoal/60 dark:text-gray-400 mb-2">
                        ৳ {item.price} {item.selectedSize && <span className="text-xs">({item.selectedSize})</span>}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-brand-slate/30 rounded-lg p-1 bg-white/50 dark:bg-brand-midnight/50">
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="p-1 hover:bg-teal-600 hover:text-white rounded-md transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold dark:text-brand-parchment">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="p-1 hover:bg-teal-600 hover:text-white rounded-md transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-bold ml-auto dark:text-brand-parchment">
                          ৳ {item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-8 border-t border-brand-slate/20 bg-brand-parchment/50 dark:bg-brand-midnight/50 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <span className="text-brand-charcoal/60 dark:text-brand-slate/60 font-medium">Subtotal</span>
                <span className="text-2xl font-bold dark:text-brand-parchment">৳ {total}</span>
              </div>
              <button
                disabled={items.length === 0}
                onClick={onCheckout}
                className="w-full py-4 text-center bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-xs mt-4 text-brand-charcoal/40 dark:text-brand-slate/40">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
