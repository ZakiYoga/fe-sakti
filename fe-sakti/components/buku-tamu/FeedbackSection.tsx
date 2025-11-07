'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Bell, MailCheck } from 'lucide-react';
import { FormSectionProps } from '@/types/guestBook.type';

const FeedbackSection = ({ formData, onChange, fieldRefs }: FormSectionProps) => {
  const [hover, setHover] = useState(0);
  const ratingLabels = ['Buruk', 'Kurang', 'Cukup', 'Baik', 'Sangat Baik'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Rating */}
      <div 
        className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        ref={el => { if (fieldRefs?.current) fieldRefs.current['rating'] = el; }}
      >
        <label className="block text-white font-medium mb-4 text-center">
          <Star className="inline w-5 h-5 mr-2" />
          Rating Booth PT. Sakti Pangan Perkasa<span className="text-red-500">*</span>
        </label>

        <div className="py-4">
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                onClick={() => onChange('rating', star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="transition-transform focus:outline-none"
              >
                <Star
                  className={`w-12 h-12 transition-colors ${
                    star <= (hover || formData.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-transparent text-white/30'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {formData.rating > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/40">
              <span className="text-orange-200 text-sm font-medium">
                {ratingLabels[formData.rating - 1]}
              </span>
              <span className="text-white font-bold">{formData.rating}/5</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Kritik & Saran */}
      <div ref={el => { if (fieldRefs?.current) fieldRefs.current['kritik_saran'] = el; }}>
        <label className="block text-white font-medium mb-2">
          <MessageSquare className="inline w-5 h-5 mr-2" />
          Kritik & Saran{formData.rating >= 1 && formData.rating <= 3 ? (
          <span className="text-red-500">*</span>
          ) : (
            <span className="text-white/60 text-sm">(Opsional)</span>
          )}
        </label>

        <textarea
          value={formData.kritik_saran}
          onChange={(e) => onChange('kritik_saran', e.target.value)}
          rows={5}
          required={formData.rating >= 1 && formData.rating <= 2}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all resize-none shadow-inner"
          placeholder={
            formData.rating >= 1 && formData.rating <= 3
              ? "Mohon jelaskan apa yang perlu kami tingkatkan..."
              : "Berikan kritik dan saran Anda untuk membantu kami berkembang..."
          }
        />
        <p className="text-white/50 text-xs mt-2">
          {formData.kritik_saran.length}/500 karakter
        </p>
      </div>

      {/* Follow Up Checkbox */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all cursor-pointer"
        ref={el => { if (fieldRefs?.current) fieldRefs.current['follow_up'] = el; }}
      >
        <label className="flex items-start gap-4 cursor-pointer">
          <div className="flex-shrink-0 mt-1">
            <input
              type="checkbox"
              checked={formData.follow_up}
              onChange={(e) => onChange('follow_up', e.target.checked)}
              className="w-5 h-5 rounded border-2 border-white/30 bg-white/10 checked:bg-orange-500 checked:border-orange-500 focus:ring-2 focus:ring-orange-400/50 cursor-pointer transition-all"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              <MailCheck className="w-4 h-4 text-orange-400" />
              <span className="text-white font-medium text-sm">
                Follow Up
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Saya bersedia dihubungi kembali oleh PT. Sakti Pangan Perkasa melalui email
              atau WhatsApp terkait informasi produk atau kerjasama.
            </p>
          </div>
        </label>
      </motion.div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-4"
      >
        <p className="text-orange-100 text-sm text-center">
          <span className="font-semibold">Terima kasih</span> atas waktu Anda mengisi buku tamu kami! 🙏
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackSection;