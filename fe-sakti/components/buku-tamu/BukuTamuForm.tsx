/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Camera, Upload, X, Loader2, Check, User, Mail, MapPin, Briefcase, MessageSquare, Star, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WebcamCapture from './WebcamCapture';
import { bukuTamuService } from '@/lib/api/bukuTamuService';
import { BukuTamuCreateData, BukuTamuItem, BukuTamuResponse, BukuTamuUpdateData } from '@/types/guestBook.type';
import { handleApiError } from '@/lib/api/api';

const stepSchemas = [
    z.object({
        nama_lengkap: z.string().min(2, 'Nama minimal 2 karakter').max(150, 'Nama terlalu panjang'),
    }),
    z.object({
        no_hp: z.string().min(10, 'Nomor HP minimal 10 digit'),
    }),
    z.object({
        email: z.string().email('Email tidak valid').optional().or(z.literal('')),
    }),
    z.object({
        asal_kota: z.string().min(2, 'Kota minimal 2 karakter'),
    }),
    z.object({
        kategori_usaha: z.string().min(1, 'Pilih kategori usaha'),
    }),
    z.object({
        punya_usaha: z.string().optional(),
    }),
    z.object({
        tujuan_kunjungan: z.string().min(1, 'Pilih tujuan kunjungan'),
    }),
    z.object({
        produk_minat: z.array(z.string()).optional(),
    }),
    z.object({
        rating: z.number().min(1, 'Berikan rating minimal 1').max(5, 'Rating maksimal 5'),
    }),
    z.object({
        persetujuan_foto: z.boolean(),
    }),
];

const steps = [
    { id: 1, title: 'Nama Lengkap', icon: User, field: 'nama_lengkap', placeholder: 'Masukkan nama lengkap', required: true },
    { id: 2, title: 'Nomor HP', icon: Camera, field: 'no_hp', placeholder: '08xxxxxxxxxx', required: true },
    { id: 3, title: 'Email', icon: Mail, field: 'email', placeholder: 'email@example.com (opsional)', required: false },
    { id: 4, title: 'Asal Kota', icon: MapPin, field: 'asal_kota', placeholder: 'Kota Anda', required: true },
    { id: 5, title: 'Kategori Usaha', icon: Briefcase, field: 'kategori_usaha', placeholder: 'Pilih kategori', required: true },
    { id: 6, title: 'Punya Usaha?', icon: Briefcase, field: 'punya_usaha', placeholder: 'Apakah punya usaha?', required: false },
    { id: 7, title: 'Tujuan Kunjungan', icon: MessageSquare, field: 'tujuan_kunjungan', placeholder: 'Pilih tujuan', required: true },
    { id: 8, title: 'Produk Minat', icon: Package, field: 'produk_minat', placeholder: 'Pilih produk yang diminati', required: false },
    { id: 9, title: 'Rating', icon: Star, field: 'rating', placeholder: 'Berikan rating', required: true },
    { id: 10, title: 'Persetujuan', icon: Check, field: 'persetujuan_foto', placeholder: '', required: false },
];

const kategoriOptions = [
    { value: 'individu', label: 'Individu/Umum' },
    { value: 'pelajar', label: 'Pelajar/Mahasiswa' },
    { value: 'organization', label: 'Organization' },
    { value: 'distributor', label: 'Distributor' },
    { value: 'retail', label: 'Retail/Buyer' },
    { value: 'horeca', label: 'Horeca' },
    { value: 'supplier', label: 'Supplier' },
    { value: 'lainnya', label: 'Lainnya' },
];

const bidangUsahaOptions = [
    { value: 'bakery', label: 'Bakery & Pastry' },
    { value: 'frozen', label: 'Frozen Food' },
    { value: 'catering', label: 'Catering/Horeca' },
    { value: 'distributor', label: 'Distributor' },
    { value: 'retail', label: 'Retail' },
    { value: 'franchise', label: 'Food Service/Franchise' },
    { value: 'sekolah', label: 'Sekolah/Akademi' },
    { value: 'umkm', label: 'UMKM' },
    { value: 'produsen', label: 'Produsen Bahan Makanan' },
    { value: 'manufaktur', label: 'Manufaktur' },
    { value: 'lainnya', label: 'Lainnya' },
];

const tujuanOptions = [
    { value: 'lihat', label: 'Melihat-lihat' },
    { value: 'supplier', label: 'Mencari Supplier' },
    { value: 'distributor', label: 'Mencari Distributor' },
    { value: 'kerjasama', label: 'Kerja Sama Bisnis' },
    { value: 'lainnya', label: 'Lainnya' },
];

const produkOptions = [
    'Sakti 200gr',
    'Sakti 500gr',
    'Sakti 1kg',
    'Pita',
    'Laskar',
    'Agni',
    'Akstar',
    '7daun',
    'Fryfest',
];

interface BukuTamuFormProps {
    onSuccess?: (result: any) => void;
    defaultValues?: any;
}

const BukuTamuForm = ({ onSuccess, defaultValues = null }: BukuTamuFormProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [fotoMode, setFotoMode] = useState<'webcam' | 'upload' | null>(null);
    const [fotoFile, setFotoFile] = useState<File | Blob | null>(null);
    const [fotoPreview, setFotoPreview] = useState<string | null>(defaultValues?.foto_url || null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // State for multi-select and additional fields
    const [selectedProduk, setSelectedProduk] = useState<string[]>(
        defaultValues?.produk_minat_list || []
    );
    const [rating, setRating] = useState<number>(defaultValues?.rating || 0);
    const [kritikSaran, setKritikSaran] = useState<string>(defaultValues?.kritik_saran || '');
    const [followUp, setFollowUp] = useState<boolean>(defaultValues?.follow_up || false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,
    } = useForm({
        resolver: zodResolver(stepSchemas[currentStep]),
        mode: 'onChange',
        defaultValues: defaultValues || {
            nama_lengkap: '',
            no_hp: '',
            email: '',
            asal_kota: '',
            asal_negara: 'Indonesia',
            instansi: '',
            jabatan: '',
            kategori_usaha: '',
            punya_usaha: '',
            bidang_usaha: '',
            tujuan_kunjungan: '',
            produk_minat: [],
            rating: 0,
            kritik_saran: '',
            catatan: '',
            persetujuan_foto: false,
            follow_up: false,
        }
    });

    const currentField = steps[currentStep].field;
    const allFormData = watch();

    // Check if kategori needs "punya usaha" question
    const needsUsahaQuestion = ['individu', 'pelajar', 'lainnya'].includes(allFormData.kategori_usaha);
    const shouldShowInstansiFields =
        !needsUsahaQuestion ||
        (needsUsahaQuestion && allFormData.punya_usaha === 'punya');

    const handleWebcamCapture = (blob: Blob) => {
        setFotoFile(blob);
        setFotoPreview(URL.createObjectURL(blob));
        setFotoMode(null);
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

            setFotoFile(file);
            setFotoPreview(URL.createObjectURL(file));
            setFotoMode(null);
        }
    };

    const handleRemoveFoto = () => {
        setFotoFile(null);
        setFotoPreview(null);
    };

    const toggleProduk = (produk: string) => {
        setSelectedProduk(prev =>
            prev.includes(produk)
                ? prev.filter(p => p !== produk)
                : [...prev, produk]
        );
    };

    const onSubmit = async (data: any) => {
        try {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                setIsSubmitting(true);

                // Prepare complete data matching BukuTamuCreateData interface
                const formData: BukuTamuCreateData = {
                    nama_lengkap: allFormData.nama_lengkap.trim(),
                    no_hp: allFormData.no_hp.trim(),
                    email: allFormData.email?.trim() || undefined,
                    asal_kota: allFormData.asal_kota.trim(),
                    asal_negara: allFormData.asal_negara || 'Indonesia',
                    is_whatsapp: allFormData.is_whatsapp || false,
                    kategori_usaha: allFormData.kategori_usaha || undefined,
                    punya_usaha: allFormData.punya_usaha || undefined,
                    instansi: allFormData.instansi?.trim() || undefined,
                    jabatan: allFormData.jabatan?.trim() || undefined,
                    bidang_usaha: allFormData.bidang_usaha || undefined,
                    tujuan_kunjungan: allFormData.tujuan_kunjungan || undefined,
                    produk_minat: selectedProduk.length ? selectedProduk.join(', ') : undefined,
                    rating: rating || undefined,
                    kritik_saran: kritikSaran.trim() || undefined,
                    follow_up: followUp,
                    persetujuan_foto: allFormData.persetujuan_foto || !!fotoFile,
                    catatan: allFormData.catatan?.trim() || undefined,
                };

                console.log('📋 Submitting data:', formData);
                console.log('📷 Photo:', fotoFile ? 'Yes' : 'No');

                let result: BukuTamuItem;
                if (defaultValues?.id) {
                    // For update, convert to BukuTamuUpdateData
                    const updateData: BukuTamuUpdateData = {
                        nama_lengkap: allFormData.nama_lengkap.trim(),
                        no_hp: allFormData.no_hp.trim(),
                        email: allFormData.email?.trim() || undefined,
                        asal_kota: allFormData.asal_kota.trim(),
                        asal_negara: allFormData.asal_negara || 'Indonesia',
                        is_whatsapp: allFormData.is_whatsapp || false,
                        kategori_usaha: allFormData.kategori_usaha || undefined,
                        punya_usaha: allFormData.punya_usaha || undefined,
                        instansi: allFormData.instansi?.trim() || undefined,
                        jabatan: allFormData.jabatan?.trim() || undefined,
                        bidang_usaha: allFormData.bidang_usaha || undefined,
                        tujuan_kunjungan: allFormData.tujuan_kunjungan || undefined,
                        produk_minat: selectedProduk.length ? selectedProduk.join(', ') : undefined,
                        rating: rating || undefined,
                        kritik_saran: kritikSaran.trim() || undefined,
                        follow_up: followUp,
                        persetujuan_foto: allFormData.persetujuan_foto || !!fotoFile,
                        catatan: allFormData.catatan?.trim() || undefined,
                    };
                    result = await bukuTamuService.update(defaultValues.id, updateData, fotoFile || undefined);
                } else {
                    result = await bukuTamuService.create(formData, fotoFile || null);
                }

                console.log('✅ Submit success:', result);

                // Clean up
                if (!defaultValues?.id) {
                    reset();
                    setSelectedProduk([]);
                    setRating(0);
                    setKritikSaran('');
                    setFollowUp(false);
                    setFotoFile(null);
                    setFotoPreview(null);
                    setFotoMode(null);

                    if (fotoPreview?.startsWith('blob:')) {
                        URL.revokeObjectURL(fotoPreview);
                    }
                }

                if (onSuccess) onSuccess(result);
                setSubmitted(true);
            }
        } catch (error) {
            console.error('❌ Error submit form:', error);
            const errorMessage = handleApiError(error);
            alert('Gagal menyimpan data: ' + errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };



    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e as any);
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (stepIndex: number) => {
        if (stepIndex < currentStep) {
            setCurrentStep(stepIndex);
        }
    };

    const renderField = () => {
        const Icon = steps[currentStep].icon;
        const step = steps[currentStep];

        if (currentField === 'produk_minat') {
            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <Label className="block text-sm font-medium text-gray-700 mb-3">
                        Produk yang Diminati <span className="text-gray-500">(Pilih semua yang sesuai)</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                        {produkOptions.map((produk) => (
                            <motion.button
                                key={produk}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleProduk(produk)}
                                className={`px-4 py-3 rounded-xl border-2 transition-all text-left ${selectedProduk.includes(produk)
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {selectedProduk.includes(produk) && (
                                    <Check className="w-4 h-4 inline mr-2 text-indigo-600" />
                                )}
                                {produk}
                            </motion.button>
                        ))}
                    </div>
                    {selectedProduk.length > 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                            Dipilih: {selectedProduk.length} produk
                        </p>
                    )}
                </motion.div>
            );
        }

        // RATING
        if (currentField === 'rating') {
            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-4">
                            Rating Booth PT. Sakti Pangan Perkasa <span className="text-red-500">*</span>
                        </Label>
                        <div className="flex justify-center gap-2 py-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.button
                                    key={star}
                                    type="button"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setRating(star)}
                                    className="transition-all"
                                >
                                    <Star
                                        className={`w-12 h-12 ${star <= rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                </motion.button>
                            ))}
                        </div>
                        {rating > 0 && (
                            <p className="text-center text-gray-600 text-sm">
                                Rating: {rating} bintang
                            </p>
                        )}
                    </div>

                    <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-2">
                            Kritik & Saran <span className="text-gray-500">(Opsional)</span>
                        </Label>
                        <Textarea
                            value={kritikSaran}
                            onChange={(e) => setKritikSaran(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                            placeholder="Berikan kritik dan saran Anda..."
                        />
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <Checkbox
                                checked={followUp}
                                onCheckedChange={(checked) => setFollowUp(!!checked)}
                                className="mt-1"
                            />
                            <span className="text-sm text-gray-700">
                                Saya bersedia dihubungi kembali oleh PT. Sakti Pangan Perkasa melalui email
                                atau WhatsApp terkait informasi produk atau kerjasama.
                            </span>
                        </label>
                    </div>
                </motion.div>
            );
        }

        // PERSETUJUAN FOTO
        if (currentField === 'persetujuan_foto') {
            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200">
                        <div className="flex items-start gap-3">
                            <Checkbox
                                id="persetujuan_foto"
                                {...register('persetujuan_foto')}
                                onCheckedChange={(checked) => setValue('persetujuan_foto', checked)}
                                className="mt-1"
                            />
                            <div>
                                <Label htmlFor="persetujuan_foto" className="font-medium text-gray-800 cursor-pointer">
                                    Saya menyetujui foto saya dapat ditampilkan di monitor booth Sakti Pangan
                                </Label>
                                <p className="text-sm text-gray-600 mt-2">
                                    Izinkan kami menggunakan foto Anda untuk keperluan promosi dan dokumentasi acara.
                                </p>
                            </div>
                        </div>
                    </div>

                    {allFormData.persetujuan_foto && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="space-y-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200"
                        >
                            <Label className="text-lg font-semibold text-gray-800">Foto Anda</Label>

                            {fotoPreview && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="relative w-48 h-48 mx-auto"
                                >
                                    <img
                                        src={fotoPreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-lg"
                                    />
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg"
                                        onClick={handleRemoveFoto}
                                    >
                                        <X className="w-4 h-4" />
                                    </motion.button>
                                </motion.div>
                            )}

                            {!fotoMode && !fotoPreview && (
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="flex gap-3 justify-center"
                                >
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setFotoMode('webcam')}
                                        className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                                    >
                                        <Camera className="w-5 h-5" />
                                        Ambil Foto
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => document.getElementById('fileInput')?.click()}
                                        className="flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
                                    >
                                        <Upload className="w-5 h-5" />
                                        Upload Foto
                                    </motion.button>
                                </motion.div>
                            )}

                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileUpload}
                            />

                            {fotoMode === 'webcam' && (
                                <WebcamCapture
                                    onCapture={handleWebcamCapture}
                                    onCancel={() => setFotoMode(null)}
                                />
                            )}
                        </motion.div>
                    )}
                </motion.div>
            );
        }

        // KATEGORI USAHA
        if (currentField === 'kategori_usaha') {
            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <Label className="block text-sm font-medium text-gray-700 mb-3">
                        {step.title} {step.required && <span className="text-red-500">*</span>}
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                        {kategoriOptions.map((opt) => (
                            <motion.button
                                key={opt.value}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setValue('kategori_usaha', opt.value);
                                    // Reset punya_usaha if kategori changes
                                    if (!['individu', 'pelajar', 'lainnya'].includes(opt.value)) {
                                        setValue('punya_usaha', '');
                                    }
                                }}
                                className={`px-4 py-3 rounded-xl border-2 transition-all ${allFormData.kategori_usaha === opt.value
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {opt.label}
                            </motion.button>
                        ))}
                    </div>
                    {errors.kategori_usaha && (
                        <p className="text-red-500 text-sm mt-2">
                            {(errors.kategori_usaha as any)?.message}
                        </p>
                    )}
                </motion.div>
            );
        }

        // PUNYA USAHA (conditional)
        if (currentField === 'punya_usaha') {
            if (!needsUsahaQuestion) {
                // Skip this step
                setCurrentStep(currentStep + 1);
                return null;
            }

            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <Label className="block text-sm font-medium text-gray-700 mb-3">
                        Apakah Anda punya usaha/bisnis? <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                        {['punya', 'tidak'].map((opt) => (
                            <motion.button
                                key={opt}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setValue('punya_usaha', opt)}
                                className={`px-4 py-3 rounded-xl border-2 transition-all ${allFormData.punya_usaha === opt
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {opt === 'punya' ? 'Punya' : 'Tidak Punya'}
                            </motion.button>
                        ))}
                    </div>

                    {shouldShowInstansiFields && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-4 mt-6"
                        >
                            <div>
                                <Label className="block text-sm font-medium text-gray-700 mb-2">
                                    Asal Instansi/Perusahaan
                                </Label>
                                <Input
                                    {...register('instansi')}
                                    type="text"
                                    placeholder="Nama instansi/perusahaan"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <Label className="block text-sm font-medium text-gray-700 mb-2">
                                    Jabatan
                                </Label>
                                <Input
                                    {...register('jabatan')}
                                    type="text"
                                    placeholder="Jabatan Anda"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <Label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bidang Usaha
                                </Label>
                                <Select
                                    value={allFormData.bidang_usaha || ''}
                                    onValueChange={(value) => setValue('bidang_usaha', value)}
                                >
                                    <SelectTrigger className="border-2 border-gray-200 rounded-2xl">
                                        <SelectValue placeholder="Pilih bidang usaha" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {bidangUsahaOptions.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            );
        }

        // TUJUAN KUNJUNGAN
        if (currentField === 'tujuan_kunjungan') {
            return (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <Label className="block text-sm font-medium text-gray-700 mb-3">
                        {step.title} {step.required && <span className="text-red-500">*</span>}
                    </Label>
                    <div className="grid grid-cols-1 gap-3">
                        {tujuanOptions.map((opt) => (
                            <motion.button
                                key={opt.value}
                                type="button"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => setValue('tujuan_kunjungan', opt.value)}
                                className={`px-4 py-3 rounded-xl border-2 transition-all text-left ${allFormData.tujuan_kunjungan === opt.value
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {opt.label}
                            </motion.button>
                        ))}
                    </div>
                    {errors.tujuan_kunjungan && (
                        <p className="text-red-500 text-sm mt-2">
                            {(errors.tujuan_kunjungan as any)?.message}
                        </p>
                    )}
                </motion.div>
            );
        }

        // DEFAULT INPUT FIELDS
        return (
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Label className="block text-sm font-medium text-gray-700 mb-3">
                    {step.title} {step.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                    {...register(currentField)}
                    type={currentField === 'email' ? 'email' : currentField === 'no_hp' ? 'tel' : 'text'}
                    placeholder={step.placeholder}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors text-gray-800 text-lg"
                    defaultValue={allFormData[currentField] || ''}
                    autoFocus
                />
                {errors[currentField] && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-2"
                    >
                        {(errors[currentField] as any)?.message}
                    </motion.p>
                )}
            </motion.div>
        );
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <Check className="w-12 h-12 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Terima Kasih!</h2>
                    <p className="text-gray-600 mb-6">
                        Data Anda telah berhasil disimpan, <span className="font-semibold">{allFormData.nama_lengkap}</span>
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setSubmitted(false);
                            setCurrentStep(0);
                            reset();
                            setSelectedProduk([]);
                            setRating(0);
                            setKritikSaran('');
                            setFollowUp(false);
                            setFotoFile(null);
                            setFotoPreview(null);
                        }}
                        className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium"
                    >
                        Isi Lagi
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <motion.div
                className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-200 rounded-full opacity-10"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Buku Tamu</h1>
                    <p className="text-gray-600">PT. Sakti Pangan Perkasa</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Progress Section - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-72 flex-shrink-0"
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 sticky top-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-6">Progress</h3>

                            <div className="space-y-1">
                                {steps.map((step, idx) => {
                                    const Icon = step.icon;
                                    const isCompleted = idx < currentStep;
                                    const isCurrent = idx === currentStep;
                                    const isClickable = idx <= currentStep;

                                    // Skip "punya usaha" step in progress if not needed
                                    if (step.field === 'punya_usaha' && !needsUsahaQuestion) {
                                        return null;
                                    }

                                    return (
                                        <div key={step.id}>
                                            <motion.button
                                                onClick={() => isClickable && goToStep(idx)}
                                                disabled={!isClickable}
                                                whileHover={isClickable ? { x: 5 } : {}}
                                                whileTap={isClickable ? { scale: 0.98 } : {}}
                                                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${isCurrent ? 'bg-gray-100' : ''
                                                    } ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                            >
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: isCompleted ? '#10b981' : isCurrent ? '#4f46e5' : '#e5e7eb',
                                                        scale: isCurrent ? 1.05 : 1,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                                                >
                                                    {isCompleted ? (
                                                        <Check className="w-5 h-5 text-white" />
                                                    ) : (
                                                        <Icon className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />
                                                    )}
                                                </motion.div>

                                                <div className="flex-1 text-left">
                                                    <div
                                                        className={`font-medium text-sm ${isCurrent ? 'text-gray-800' : isCompleted ? 'text-green-600' : 'text-gray-400'
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </div>
                                                    {isCompleted && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="text-xs text-gray-500 mt-0.5"
                                                        >
                                                            Selesai
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </motion.button>

                                            {idx < steps.length - 1 && (
                                                <div className="flex items-center pl-5 py-1">
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{
                                                            height: '32px',
                                                            backgroundColor: idx < currentStep ? '#10b981' : '#e5e7eb',
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-0.5 ml-[19px]"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Overall progress bar */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-medium text-gray-600">Total Progress</span>
                                    <span className="text-xs font-bold text-gray-800">
                                        {Math.round(((currentStep + 1) / steps.length) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section - Right Side */}
                    <motion.div
                        layout
                        className="flex-1 bg-white rounded-3xl shadow-2xl p-6 md:p-10 min-h-[600px] relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="space-y-8"
                            >
                                <div className="mb-8">
                                    <motion.h2
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                    >
                                        {steps[currentStep].title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                        className="text-gray-600 text-sm"
                                    >
                                        Step {currentStep + 1} dari {steps.length}
                                    </motion.p>
                                </div>

                                <div className="space-y-8">
                                    {renderField()}

                                    <div className="flex gap-3 pt-4">
                                        {currentStep > 0 && (
                                            <motion.button
                                                type="button"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={handlePrevious}
                                                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors"
                                            >
                                                Kembali
                                            </motion.button>
                                        )}
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleNext}
                                            disabled={isSubmitting}
                                            className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                                                    Menyimpan...
                                                </>
                                            ) : currentStep === steps.length - 1 ? (
                                                'Kirim'
                                            ) : (
                                                'Lanjut'
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BukuTamuForm;