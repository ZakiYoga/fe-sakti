'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Target, Gift } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface SuccessModalProps {
  isOpen: boolean;
  userName: string;
  onReset: () => void;
}

const SuccessModal = ({ isOpen, userName, onReset }: SuccessModalProps) => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/sakt1_id/', '_blank', 'noopener,noreferrer');
  };

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

            {/* Success Icon - Fixed Container */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="relative mx-auto mb-6 lottie-container"
            >
              <DotLottieReact
                src="/animations/Complete.lottie"
                className="lottie-animation"
                loop={true}
                autoplay
              />
            </motion.div>

            <style jsx>{`
              .lottie-container {
                width: 192px;
                height: 192px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
              }
              
              .lottie-animation {
                width: 192px !important;
                height: 192px !important;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              
              .lottie-animation > div {
                width: 192px !important;
                height: 192px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                line-height: 0 !important;
              }
              
              .lottie-animation canvas {
                width: auto !important;
                height: auto !important;
                max-width: 192px !important;
                max-height: 192px !important;
                display: block !important;
                margin: 0 auto !important;
              }
            `}</style>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Berhasil!
              </h2>
              <p className="text-white/90 text-lg mb-2">
                Terima kasih {userName}, telah berkunjung ke booth SaktiFood.
              </p>
            </motion.div>

            {/* Instagram CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-4"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-amber-400 animate-bounce" />
              </div>
              <p className="text-white text-sm leading-relaxed">
                <span className="font-bold text-pink-200">Follow Instagram kami</span> untuk ikuti{' '}
                <span className="font-semibold text-yellow-200">Game Dart</span> dan menangkan{' '}
                <span className="font-semibold text-green-200">hadiah menarik!</span> 🎯🎁
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="space-y-3">
              {/* Instagram Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleInstagramClick}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Follow @sakt1_id</span>
              </motion.button>

              {/* Reset Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={onReset}
                className="w-full bg-white/90 hover:bg-white text-orange-600 hover:text-orange-700 py-4 px-6 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Isi Buku Tamu Lagi
              </motion.button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-orange-400/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-400/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-4 w-12 h-12 bg-purple-400/10 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;