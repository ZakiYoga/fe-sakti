'use client';

import { motion } from 'framer-motion';
import { Building, Briefcase, Check } from 'lucide-react';
import { FormSectionProps, KATEGORI_OPTIONS, BIDANG_USAHA_OPTIONS } from '@/types/guestBook.type';

const BusinessSection = ({ formData, onChange }: FormSectionProps) => {
  const needsUsahaQuestion = ['individu', 'pelajar', 'lainnya', ''].includes(formData.kategori_usaha);
  const shouldShowInstansiFields =
    !needsUsahaQuestion || (needsUsahaQuestion && formData.punya_usaha === 'punya');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Kategori Kunjungan */}
      <div>
        <label className="block text-white font-medium mb-3">
          Anda berkunjung sebagai? <span className="text-orange-300">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {KATEGORI_OPTIONS.map((option) => (
            <motion.button
              key={option.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onChange('kategori_usaha', option.value);
                if (!needsUsahaQuestion) {
                  onChange('punya_usaha', '');
                }
              }}
              className={`px-4 py-4 rounded-xl backdrop-blur-md border-2 transition-all font-medium ${
                formData.kategori_usaha === option.value
                  ? 'bg-gradient-to-br from-orange-500/40 to-orange-600/40 border-orange-400/80 text-white shadow-lg'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
              }`}
            >
              {formData.kategori_usaha === option.value && (
                <Check className="w-5 h-5 inline mr-2" />
              )}
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pertanyaan Kepemilikan Usaha */}
      {needsUsahaQuestion && formData.kategori_usaha && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <label className="block text-white font-medium mb-3">
            Apakah Anda punya usaha/bisnis? <span className="text-orange-300">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'punya', label: 'Punya' },
              { value: 'tidak', label: 'Tidak Punya' },
            ].map((option) => (
              <motion.button
                key={option.value}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onChange('punya_usaha', option.value)}
                className={`px-4 py-4 rounded-xl backdrop-blur-md border-2 transition-all font-medium ${
                  formData.punya_usaha === option.value
                    ? 'bg-gradient-to-br from-orange-500/40 to-orange-600/40 border-orange-400/80 text-white shadow-lg'
                    : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30'
                }`}
              >
                {formData.punya_usaha === option.value && (
                  <Check className="w-5 h-5 inline mr-2" />
                )}
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Fields Instansi */}
      {shouldShowInstansiFields && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mt-6 pt-6 border-t border-white/20"
        >
          {/* Instansi/Perusahaan */}
          <div>
            <label className="block text-white font-medium mb-2">
              <Building className="inline w-5 h-5 mr-2" />
              Asal Instansi/Perusahaan
            </label>
            <input
              type="text"
              value={formData.instansi}
              onChange={(e) => onChange('instansi', e.target.value)}
              className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
              placeholder="Nama instansi/perusahaan"
            />
          </div>

          {/* Jabatan */}
          <div>
            <label className="block text-white font-medium mb-2">
              <Briefcase className="inline w-5 h-5 mr-2" />
              Jabatan
            </label>
            <input
              type="text"
              value={formData.jabatan}
              onChange={(e) => onChange('jabatan', e.target.value)}
              className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
              placeholder="Jabatan Anda"
            />
          </div>

          {/* Bidang Usaha */}
          <div>
            <label className="block text-white font-medium mb-2">
              Bidang Usaha
            </label>
            <select
              value={formData.bidang_usaha}
              onChange={(e) => onChange('bidang_usaha', e.target.value)}
              className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5rem',
              }}
            >
              <option value="" className="bg-gray-900">
                Pilih bidang usaha
              </option>
              {BIDANG_USAHA_OPTIONS.map((bidang) => (
                <option key={bidang.value} value={bidang.value} className="bg-gray-900">
                  {bidang.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BusinessSection;