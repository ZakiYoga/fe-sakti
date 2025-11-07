'use client';

import { motion } from 'framer-motion';
import { Target, Check, ShoppingBag } from 'lucide-react';
import { FormSectionProps, TUJUAN_OPTIONS, PRODUK_OPTIONS } from '@/types/guestBook.type';

const VisitPurposeSection = ({ formData, onChange, fieldRefs }: FormSectionProps) => {
  const toggleProduk = (produk: string) => {
    const currentProduk = formData.produk_minat || [];
    const newProduk = currentProduk.includes(produk)
      ? currentProduk.filter((p) => p !== produk)
      : [...currentProduk, produk];
    onChange('produk_minat', newProduk);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Tujuan Kunjungan */}
      <div ref={el => { if (fieldRefs?.current) fieldRefs.current['tujuan_kunjungan'] = el; }}>
        <label className="block text-white font-medium mb-3">
          <Target className="inline w-5 h-5 mr-2" />
          Tujuan Kunjungan<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-3">
          {TUJUAN_OPTIONS.map((option) => (
            <motion.button
              key={option.value}
              type="button"
              whileHover={{ scale: 1.01, x: 4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onChange('tujuan_kunjungan', option.value)}
              className={`px-5 py-4 rounded-xl backdrop-blur-md border-2 transition-all text-left font-medium flex items-center ${
                formData.tujuan_kunjungan === option.value
                  ? 'bg-gradient-to-r from-orange-500/40 to-orange-600/40 border-orange-400/80 text-white shadow-lg'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                  formData.tujuan_kunjungan === option.value
                    ? 'border-white bg-white'
                    : 'border-white/40'
                }`}
              >
                {formData.tujuan_kunjungan === option.value && (
                  <div className="w-3 h-3 rounded-full bg-orange-600" />
                )}
              </div>
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Produk yang Diminati */}
      <div 
        className="pt-6 border-t border-white/20"
        ref={el => { if (fieldRefs?.current) fieldRefs.current['produk_minat'] = el; }}
      >
        <label className="block text-white font-medium mb-3">
          <ShoppingBag className="inline w-5 h-5 mr-2" />
          Produk yang Diminati&nbsp;
          <span className="text-white/60 text-sm">(Pilih satu atau lebih produk yang diminati)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PRODUK_OPTIONS.map((produk) => (
            <motion.button
              key={produk}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleProduk(produk)}
              className={`px-4 py-3 rounded-xl backdrop-blur-md border-2 transition-all font-medium relative overflow-hidden ${
                formData.produk_minat?.includes(produk)
                  ? 'bg-gradient-to-br from-orange-500/40 to-orange-600/40 border-orange-400/80 text-white shadow-lg'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
              }`}
            >
              {formData.produk_minat?.includes(produk) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 bg-orange-500 rounded-full p-0.5"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
              <span className="text-sm">{produk}</span>
            </motion.button>
          ))}
        </div>
        
        {formData.produk_minat && formData.produk_minat.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-sm text-orange-200"
          >
            {formData.produk_minat.length} produk dipilih
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default VisitPurposeSection;