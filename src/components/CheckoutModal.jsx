import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Copy, CheckCircle2 } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, total, items }) => {
  const [copied, setCopied] = React.useState(false);
  const paymentNumber = "+8801879725901";

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const itemDetails = items.map(i => `- ${i.name} (x${i.quantity})`).join('%0A');
    const message = `Hello HMR Fragrance! %0AI would like to order: %0A${itemDetails}%0A%0ATotal: ৳${total}%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/8801879725901?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-midnight/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-brand-charcoal w-full max-w-lg rounded-[2.5rem] 
                      shadow-2xl overflow-hidden border border-brand-slate/20"
          >
            <div className="p-8 pb-4 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-black text-brand-primary dark:text-brand-parchment">Checkout</h2>
                <p className="text-brand-charcoal/60 dark:text-brand-slate/60 mt-1">Complete your order with HMR HAMID</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-mist dark:hover:bg-brand-storm/50 rounded-full transition-colors"
              >
                <X />
              </button>
            </div>

            <div className="p-8 pt-4">
              <div className="bg-brand-mist/50 dark:bg-brand-midnight/50 rounded-3xl p-6 mb-8 border border-brand-slate/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm uppercase tracking-widest font-bold opacity-50">Order Summary</span>
                  <span className="text-xl font-bold dark:text-brand-parchment">৳ {total}</span>
                </div>
                <div className="max-h-32 overflow-y-auto space-y-2 mb-4 scrollbar-hide">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="dark:text-brand-slate/80">{item.name} x{item.quantity}</span>
                      <span className="font-medium dark:text-brand-parchment text-brand-primary">৳ {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-primary/60 dark:text-brand-slate/40 mb-3 block">
                    1. Pay via bKash (Personal)
                  </label>
                  <div className="flex items-center gap-3 bg-brand-primary/5 dark:bg-brand-storm/20 p-4 rounded-2xl border border-brand-primary/20">
                    <div className="w-10 h-10 bg-[#e2136e] rounded-full flex items-center justify-center text-white shrink-0">
                      <span className="font-bold text-lg">b</span>
                    </div>
                    <span className="text-lg font-bold tracking-wider dark:text-brand-parchment">
                      {paymentNumber}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="ml-auto p-2 hover:bg-brand-primary/10 rounded-xl transition-colors"
                    >
                      {copied ? <CheckCircle2 className="text-green-500" /> : <Copy size={20} className="opacity-40" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-primary/60 dark:text-brand-slate/40 mb-3 block">
                    2. Send Details to WhatsApp
                  </label>
                  <button
                    onClick={openWhatsApp}
                    className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3
                               shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <MessageSquare size={24} /> Confirm on WhatsApp
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <p className="text-[10px] text-yellow-700 dark:text-yellow-400 font-medium">
                  After payment, please send a screenshot of the transaction and your address via WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
