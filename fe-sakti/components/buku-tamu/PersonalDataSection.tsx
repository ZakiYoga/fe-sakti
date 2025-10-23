'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin, Globe, Camera, X } from 'lucide-react';
import { FormSectionProps } from '@/types/guestBook.type';
import WebcamCapture from '@/components/buku-tamu/WebcamCapture';

const PersonalDataSection = ({ formData, onChange, onPhotoCapture, fotoBlob }: FormSectionProps) => {
  const [showWebcam, setShowWebcam] = useState(false);

  const handlePhotoCapture = (photoBlob: Blob) => {
    if (onPhotoCapture) {
      onPhotoCapture(photoBlob);
      const previewUrl = URL.createObjectURL(photoBlob);
      onChange('foto', previewUrl);
    }
    setShowWebcam(false);
  };

  const handleRemovePhoto = () => {
    onChange('foto', null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Photo Section */}
      <div>
        <label className="block text-white font-medium mb-3 text-center">
          <Camera className="inline w-5 h-5 mr-2" />
          Foto <span className="text-white/60 text-sm">(Opsional)</span>
        </label>
        
        {formData.foto && !showWebcam ? (
          <div className="relative w-48 h-48 mx-auto group">
            <img
              src={formData.foto}
              alt="Preview"
              className="w-full h-full object-cover rounded-2xl border-4 border-white/20 shadow-lg"
            />
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full p-2 hover:from-red-600 hover:to-red-700 shadow-lg transform hover:scale-110 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all" />
          </div>
        ) : showWebcam ? (
          <WebcamCapture
            onCapture={handlePhotoCapture}
            onCancel={() => setShowWebcam(false)}
          />
        ) : (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowWebcam(true)}
              className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-2xl hover:bg-white/25 transition-all border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Camera className="w-6 h-6 inline mr-2" />
              Ambil/Upload Foto
            </button>
          </div>
        )}
      </div>

      {/* Nama Lengkap */}
      <div>
        <label className="block text-white font-medium mb-2">
          <User className="inline w-5 h-5 mr-2" />
          Nama Lengkap <span className="text-orange-300">*</span>
        </label>
        <input
          type="text"
          value={formData.nama_lengkap}
          onChange={(e) => onChange('nama_lengkap', e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      {/* Nomor HP */}
      <div>
        <label className="block text-white font-medium mb-2">
          <Phone className="inline w-5 h-5 mr-2" />
          Nomor HP <span className="text-orange-300">*</span>
        </label>
        <input
          type="tel"
          value={formData.no_hp}
          onChange={(e) => onChange('no_hp', e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
          placeholder="08xxxxxxxxxx"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-white font-medium mb-2">
          <Mail className="inline w-5 h-5 mr-2" />
          Email <span className="text-white/60 text-sm">(Opsional)</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
          placeholder="email@example.com"
        />
      </div>

      {/* Asal Kota */}
      <div>
        <label className="block text-white font-medium mb-2">
          <MapPin className="inline w-5 h-5 mr-2" />
          Asal Kota <span className="text-orange-300">*</span>
        </label>
        <input
          type="text"
          value={formData.asal_kota}
          onChange={(e) => onChange('asal_kota', e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
          placeholder="Kota Anda"
        />
      </div>

      {/* Asal Negara */}
      <div>
        <label className="block text-white font-medium mb-2">
          <Globe className="inline w-5 h-5 mr-2" />
          Asal Negara
        </label>
        <input
          type="text"
          value={formData.asal_negara}
          onChange={(e) => onChange('asal_negara', e.target.value)}
          className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400/60 focus:bg-white/15 transition-all shadow-inner"
        />
      </div>
    </motion.div>
  );
};

export default PersonalDataSection;