'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Webcam from 'react-webcam';
import { Camera, RotateCcw, Check, X, Upload, FlipHorizontal2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';

interface WebcamCaptureProps {
  onCapture: (blob: Blob) => void;
  onCancel: () => void;
}

const WebcamCapture = ({ onCapture, onCancel }: WebcamCaptureProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [mirrored, setMirrored] = useState(true);
  const [mode, setMode] = useState<'choose' | 'webcam'>('choose');
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ensure we're mounted on client side
  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImgSrc(imageSrc);
      }
    }
  }, [webcamRef]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
        setMode('webcam');
      };
      reader.readAsDataURL(file);
    }
  };

  const base64ToBlob = (base64: string): Blob => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  const handleConfirm = () => {
    if (imgSrc) {
      onCapture(base64ToBlob(imgSrc));
    }
  };

  const retake = () => {
    setImgSrc(null);
  };

  if (!mounted) return null;

  // Video constraints - let browser choose best resolution
  const videoConstraints = {
    facingMode,
    aspectRatio: isMobile ? 3/4 : 16/9,
  };

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ zIndex: 99999 }}
      >
        {mode === 'choose' ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
          >
            <Camera className="w-16 h-16 text-orange-400 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold text-center mb-6">
              Pilih Metode Foto
            </h3>
            <div className="space-y-3">
              <Button
                onClick={() => setMode('webcam')}
                className="w-full py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 rounded-xl font-medium flex items-center justify-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Ambil Foto
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-white/10 hover:bg-white/20 text-white p-6 rounded-xl font-medium border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Foto
              </Button>
              <Button
                onClick={onCancel}
                variant="destructive"
                className="w-full text-white py-3 mt-2"
              >
                Batal
              </Button>
            </div>
            <input 
              ref={fileInputRef} 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileUpload} 
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 w-full border border-white/20 shadow-2xl max-w-md sm:max-w-2xl"
          >
            <div className="relative aspect-[3/4] sm:aspect-video bg-black rounded-2xl overflow-hidden mb-4">
              {!imgSrc ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    mirrored={mirrored}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                    <button
                      onClick={() => setMirrored(!mirrored)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                        mirrored ? 'bg-orange-500' : 'bg-white'
                      }`}
                    >
                      <FlipHorizontal2 className={`w-4 h-4 ${mirrored ? 'text-white' : 'text-orange-600'}`} />
                    </button>
                    <button
                      onClick={capture}
                      className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center shadow-2xl border-4 border-white/30 transition-all hover:scale-105"
                    >
                      <Camera className="w-8 h-8 text-white" />
                    </button>
                    <button
                      onClick={() => {
                        const newMode = facingMode === 'user' ? 'environment' : 'user';
                        setFacingMode(newMode);
                        setMirrored(newMode === 'user');
                      }}
                      className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center shadow-2xl border-2 border-orange-500 transition-all"
                    >
                      <RotateCcw className="w-4 h-4 text-orange-600" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <p className="text-white text-xs">
                      {facingMode === 'user' ? '🤳 Front Camera' : '📷 Back Camera'}
                      {mirrored && ' (mirrored)'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <img src={imgSrc} alt="Captured" className="w-full h-full object-contain" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                    <button
                      onClick={handleConfirm}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
                    >
                      <Check className="w-5 h-5" />
                      Gunakan
                    </button>
                    <button
                      onClick={retake}
                      className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Ulangi
                    </button>
                  </div>
                </>
              )}
            </div>
            <button 
              onClick={onCancel} 
              className="w-full text-white/70 hover:text-white text-sm py-2 transition-colors"
            >
              <X className="w-4 h-4 inline mr-2" />
              Batal
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );

  // Use portal to render at document body level
  return createPortal(modalContent, document.body);
};

export default WebcamCapture;