'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { SuccessModalProps } from '@/types/guestBook.type';
import { Button } from '@/components/ui/button';

const SuccessModal = ({ isOpen, userName, onReset }: SuccessModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onReset}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full text-center"
          >
            {/* Animated rings */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -z-10 inset-0 rounded-3xl border-2 border-orange-400/50"
            />
            
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
              className="absolute -z-10 inset-0 rounded-3xl border-2 border-orange-300/30"
            />

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
              
              {/* Sparkles */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              >
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300" />
                <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-orange-300" />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Terima Kasih!
              </h2>
              <p className="text-white/90 text-lg mb-2">
                Data Anda telah berhasil disimpan
              </p>
              <p className="text-orange-200 font-semibold text-xl mb-8">
                {userName}
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={onReset}
                className="bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 w-full py-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Isi Buku Tamu Lagi
              </Button>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-orange-400/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400/10 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;