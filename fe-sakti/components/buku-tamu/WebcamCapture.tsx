'use client';

import { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, RotateCcw, Check, X, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

interface WebcamCaptureProps {
  onCapture: (blob: Blob) => void;
  onCancel: () => void;
}

const WebcamCapture = ({ onCapture, onCancel }: WebcamCaptureProps) => {
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  type ModeType = 'choose' | 'webcam';
  const [mode, setMode] = useState<ModeType>('choose');

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: facingMode
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
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
      const blob = base64ToBlob(imgSrc);
      onCapture(blob);
    }
  };

  const toggleCamera = () => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file maksimal 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('File harus berupa gambar');
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

  const renderFileInput = () => (
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleFileUpload}
    />
  );

  // Mode Choose
  if (mode === 'choose') {
    return (
      <div className="space-y-4">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 p-8 shadow-lg">
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-20 h-20 text-orange-400 mb-2" />
            </motion.div>
            <p className="text-white text-lg font-medium text-center">
              Pilih cara mengambil foto
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <motion.button
                type="button"
                onClick={() => setMode('webcam')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl transition-all font-medium shadow-lg hover:shadow-xl"
              >
                <Camera className="w-5 h-5 inline mr-2" />
                Ambil Foto
              </motion.button>
              
              <motion.button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-6 py-4 rounded-xl transition-all font-medium border-2 border-white/30 shadow-md hover:shadow-lg"
              >
                <Upload className="w-5 h-5 inline mr-2" />
                Upload Foto
              </motion.button>
            </div>
            
            {renderFileInput()}
          </div>
        </div>
        
        <button
          type="button"
          onClick={onCancel}
          className="w-full text-white/70 hover:text-white text-sm py-2 transition-colors font-medium"
        >
          <X className="w-4 h-4 inline mr-2" />
          Batal
        </button>
      </div>
    );
  }

  // Mode Webcam
  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
        {!imgSrc ? (
          <>
            {mode === 'webcam' && (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  className="w-full h-full object-cover"
                  onUserMediaError={(error) => {
                    console.error('Webcam error:', error);
                    alert('Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.');
                    setMode('choose');
                  }}
                />
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
                  <motion.button
                    type="button"
                    onClick={capture}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full w-16 h-16 bg-white hover:bg-gray-100 flex items-center justify-center shadow-2xl transition-all border-4 border-orange-500"
                  >
                    <Camera className="w-6 h-6 text-orange-600" />
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={toggleCamera}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full w-12 h-12 bg-white/90 backdrop-blur-md hover:bg-white flex items-center justify-center shadow-lg transition-all"
                  >
                    <RotateCcw className="w-5 h-5 text-orange-600" />
                  </motion.button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <img 
              src={imgSrc} 
              alt="Captured" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4">
              <motion.button
                type="button"
                onClick={retake}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md text-gray-800 px-5 py-2.5 rounded-full hover:bg-white transition-all shadow-lg font-medium"
              >
                <RotateCcw className="w-4 h-4 inline mr-2" />
                Ulangi
              </motion.button>
              
              <motion.button
                type="button"
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full transition-all shadow-lg font-medium"
              >
                <Check className="w-4 h-4 inline mr-2" />
                Gunakan Foto
              </motion.button>
            </div>
          </>
        )}
      </div>

      <div className="flex gap-3">
        {!imgSrc && mode === 'webcam' && (
          <button
            type="button"
            onClick={() => setMode('choose')}
            className="flex-1 text-white/70 hover:text-white text-sm py-2 transition-colors font-medium"
          >
            ← Kembali ke Pilihan
          </button>
        )}
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 text-white/70 hover:text-white text-sm py-2 transition-colors font-medium"
        >
          <X className="w-4 h-4 inline mr-2" />
          Batal
        </button>
      </div>
    </div>
  );
};

export default WebcamCapture;