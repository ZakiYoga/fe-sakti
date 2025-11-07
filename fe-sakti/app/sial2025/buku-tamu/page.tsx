/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Building, Target, Star, Check, ChevronRight, ChevronLeft, Loader2
} from 'lucide-react';

import ProgressSidebar from '@/components/buku-tamu/ProgressSidebar';
import SuccessModal from '@/components/buku-tamu/SuccessModal';
import PersonalDataSection from '@/components/buku-tamu/PersonalDataSection';
import BusinessSection from '@/components/buku-tamu/BusinessSection';
import VisitPurposeSection from '@/components/buku-tamu/VisitPurposeSection';
import FeedbackSection from '@/components/buku-tamu/FeedbackSection';
import type { FormData as FormDataType, Section } from '@/types/guestBook.type';

// API Configuration
const API_URL = process.env.NEXT_PUBLIC_API_BUKUTAMU_URL || 'http://localhost:8000/api';

// API Service
const bukuTamuService = {
  async create(data: any, foto: Blob | null) {
    const formData = new FormData();

    const processedData = { ...data };
    if (Array.isArray(data.produk_minat)) {
      data.produk_minat.forEach((item: string) => {
        formData.append('produk_minat_list', item);
      });
      delete processedData.produk_minat;
    }

    Object.entries(processedData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, String(value));
      }
    });

    if (foto) {
      formData.append('foto', foto, 'photo.jpg');
    }

    const response = await fetch(`${API_URL}/buku-tamu/`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || error.non_field_errors?.[0] || 'Failed to create');
    }

    const result = await response.json();
    return result.data || result;
  }
};

const BukuTamuForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    nama_lengkap: '',
    no_hp: '',
    email: '',
    asal_kota: '',
    asal_negara: 'Indonesia',
    foto: null,
    kategori_usaha: '',
    punya_usaha: '',
    instansi: '',
    jabatan: '',
    bidang_usaha: '',
    tujuan_kunjungan: '',
    produk_minat: [],
    rating: 0,
    kritik_saran: '',
    follow_up: false,
    persetujuan_foto: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fotoBlob, setFotoBlob] = useState<Blob | null>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const needsUsahaQuestion = ['individu', 'pelajar', 'lainnya', ''].includes(formData.kategori_usaha);
  const shouldShowInstansiFields =
    !needsUsahaQuestion ||
    (needsUsahaQuestion && formData.punya_usaha === 'punya');

  const sections: Section[] = [
    {
      id: 0,
      title: 'Data Diri',
      icon: User,
      fields: ['nama_lengkap', 'no_hp', 'email', 'asal_kota', 'asal_negara', 'foto']
    },
    {
      id: 1,
      title: 'Instansi/Usaha',
      icon: Building,
      fields: shouldShowInstansiFields
        ? ['kategori_usaha', 'punya_usaha', 'instansi', 'jabatan', 'bidang_usaha']
        : ['kategori_usaha', 'punya_usaha']
    },
    {
      id: 2,
      title: 'Tujuan Kunjungan',
      icon: Target,
      fields: ['tujuan_kunjungan', 'produk_minat']
    },
    {
      id: 3,
      title: 'Rating & Feedback',
      icon: Star,
      fields: ['rating', 'kritik_saran', 'follow_up']
    },
  ];

  // Auto-scroll to next field
  const scrollToNextField = useCallback((currentField: string) => {
    setTimeout(() => {
      const fieldOrder: { [key: number]: string[] } = {
        0: ['persetujuan_foto', 'foto', 'nama_lengkap', 'no_hp', 'email', 'asal_kota', 'asal_negara'],
        1: ['kategori_usaha', 'punya_usaha', 'instansi', 'jabatan', 'bidang_usaha'],
        2: ['tujuan_kunjungan', 'produk_minat'],
        3: ['rating', 'kritik_saran', 'follow_up'],
      };

      const currentFields = fieldOrder[currentSection];
      if (!currentFields) return;

      const currentIndex = currentFields.indexOf(currentField);
      
      if (currentIndex >= 0 && currentIndex < currentFields.length - 1) {
        const nextField = currentFields[currentIndex + 1];
        const nextElement = fieldRefs.current[nextField];
        
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Focus if it's an input element
          if (nextElement instanceof HTMLInputElement || 
              nextElement instanceof HTMLTextAreaElement || 
              nextElement instanceof HTMLSelectElement) {
            setTimeout(() => nextElement.focus(), 300);
          }
        }
      }
    }, 150);
  }, [currentSection]);

  const handleChange = (field: keyof FormDataType, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    scrollToNextField(field);
  };

  const handlePhotoCapture = (photoBlob: Blob) => {
    setFotoBlob(photoBlob);
    const previewUrl = URL.createObjectURL(photoBlob);
    setFormData(prev => ({ ...prev, foto: previewUrl }));
    scrollToNextField('foto');
  };

  const validateSection = () => {
    switch (currentSection) {
      case 0:
        if (!formData.nama_lengkap.trim()) {
          alert('Nama lengkap wajib diisi');
          return false;
        }
        if (!formData.no_hp.trim() || formData.no_hp.length < 10) {
          alert('Nomor HP minimal 10 digit');
          return false;
        }
        if (!formData.asal_kota.trim()) {
          alert('Asal kota wajib diisi');
          return false;
        }
        break;
      case 1:
        if (!formData.kategori_usaha) {
          alert('Pilih kategori kunjungan');
          return false;
        }
        if (needsUsahaQuestion && !formData.punya_usaha) {
          alert('Jawab pertanyaan kepemilikan usaha');
          return false;
        }
        
        // NEW: Validate required fields when shouldShowInstansiFields is true
        if (shouldShowInstansiFields) {
          if (!formData.instansi.trim()) {
            alert('Asal Instansi/Perusahaan wajib diisi');
            return false;
          }
          if (!formData.jabatan.trim()) {
            alert('Jabatan wajib diisi');
            return false;
          }
          if (!formData.bidang_usaha) {
            alert('Bidang Usaha wajib dipilih');
            return false;
          }
        }
        break;
      case 2:
        if (!formData.tujuan_kunjungan) {
          alert('Pilih tujuan kunjungan');
          return false;
        }
        break;
      case 3:
        if (formData.rating === 0) {
          alert('Berikan rating untuk booth kami');
          return false;
        }
        if (formData.rating >= 1 && formData.rating <= 2 && !formData.kritik_saran.trim()) {
          alert('Masukan Anda sangat berharga. Mohon lengkapi kritik dan saran agar kami dapat meningkatkan layanan dengan lebih baik.');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateSection()) return;

    // Scroll to top when moving to next section
    if (formContainerRef.current) {
      formContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    // Scroll to top when going back
    if (formContainerRef.current) {
      formContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const dataToSubmit = {
        nama_lengkap: formData.nama_lengkap,
        no_hp: formData.no_hp,
        email: formData.email || '',
        asal_kota: formData.asal_kota,
        asal_negara: formData.asal_negara,
        kategori_usaha: formData.kategori_usaha,
        punya_usaha: formData.punya_usaha,
        instansi: formData.instansi || '',
        jabatan: formData.jabatan || '',
        bidang_usaha: formData.bidang_usaha || '',
        tujuan_kunjungan: formData.tujuan_kunjungan,
        produk_minat: formData.produk_minat,
        rating: formData.rating,
        kritik_saran: formData.kritik_saran || '',
        follow_up: formData.follow_up,
        persetujuan_foto: formData.persetujuan_foto,
      };

      await bukuTamuService.create(dataToSubmit, fotoBlob);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Gagal menyimpan data: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentSection(0);
    setFormData({
      nama_lengkap: '',
      no_hp: '',
      email: '',
      asal_kota: '',
      asal_negara: 'Indonesia',
      foto: null,
      kategori_usaha: '',
      punya_usaha: '',
      instansi: '',
      jabatan: '',
      bidang_usaha: '',
      tujuan_kunjungan: '',
      produk_minat: [],
      rating: 0,
      kritik_saran: '',
      follow_up: false,
      persetujuan_foto: false,
    });
    setFotoBlob(null);
    // Scroll to top on reset
    if (formContainerRef.current) {
      formContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <PersonalDataSection
            formData={formData}
            onChange={handleChange}
            onPhotoCapture={handlePhotoCapture}
            fotoBlob={fotoBlob}
            fieldRefs={fieldRefs}
          />
        );
      case 1:
        return (
          <BusinessSection
            formData={formData}
            onChange={handleChange}
            fieldRefs={fieldRefs}
          />
        );
      case 2:
        return (
          <VisitPurposeSection
            formData={formData}
            onChange={handleChange}
            fieldRefs={fieldRefs}
          />
        );
      case 3:
        return (
          <FeedbackSection
            formData={formData}
            onChange={handleChange}
            fieldRefs={fieldRefs}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SuccessModal
        isOpen={submitted}
        userName={formData.nama_lengkap}
        onReset={resetForm}
      />

      <div className="min-h-[70vh] flex items-start justify-center relative overflow-hidden">
        {/* Decorative Background */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl lg:min-w-6xl w-full h-full mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row w-full h-full gap-6 items-start">
            {/* Progress Sidebar */}
            <ProgressSidebar
              sections={sections}
              currentSection={currentSection}
            />

            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              layout
              className="flex-1 bg-black/20 backdrop-blur-xl border border-t-0 border-l-0 border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div 
                ref={formContainerRef}
                className="max-h-[70vh] overflow-y-auto p-6 md:p-10 custom-scrollbar"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {sections[currentSection].title}
                      </h2>
                      <p className="text-white/70 text-sm">
                        Step {currentSection + 1} dari {sections.length}
                      </p>
                    </div>

                    {renderSection()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="p-6 border-t border-white/20 bg-white/5 backdrop-blur-md">
                <div className="flex gap-3">
                  {currentSection > 0 && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBack}
                      className="flex-1 bg-white/20 backdrop-blur-md text-white py-3 px-6 rounded-full font-medium hover:bg-white/30 transition-all border border-white/20"
                    >
                      <ChevronLeft className="w-5 h-5 inline mr-2" />
                      Kembali
                    </motion.button>
                  )}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-br from-orange-500 to-amber-500 text-white py-3 px-6 rounded-full font-medium hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                        Menyimpan...
                      </>
                    ) : currentSection === sections.length - 1 ? (
                      <>
                        Kirim
                        <Check className="w-5 h-5 inline ml-2" />
                      </>
                    ) : (
                      <>
                        Lanjut
                        <ChevronRight className="w-5 h-5 inline ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
          }
        `}</style>
      </div>
    </>
  );
};

export default BukuTamuForm;