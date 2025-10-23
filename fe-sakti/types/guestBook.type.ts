/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormData {
  nama_lengkap: string;
  no_hp: string;
  email: string;
  asal_kota: string;
  asal_negara: string;
  foto: string | null;
  kategori_usaha: string;
  punya_usaha: string;
  instansi: string;
  jabatan: string;
  bidang_usaha: string;
  tujuan_kunjungan: string;
  produk_minat: string[];
  rating: number;
  kritik_saran: string;
  follow_up: boolean;
  persetujuan_foto: boolean;
}

export interface Section {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  fields: string[];
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormSectionProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  onPhotoCapture?: (photoBlob: Blob) => void;
  fotoBlob?: Blob | null;
}

export interface ProgressSidebarProps {
  sections: Section[];
  currentSection: number;
}

export interface SuccessModalProps {
  isOpen: boolean;
  userName: string;
  onReset: () => void;
}

export interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

// Constants
export const KATEGORI_OPTIONS: SelectOption[] = [
  { value: 'individu', label: 'Individu/Umum' },
  { value: 'organization', label: 'Organization' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'retail', label: 'Retail/Buyer' },
  { value: 'horeca', label: 'Horeca' },
  { value: 'supplier', label: 'Supplier' },
  { value: 'pelajar', label: 'Pelajar/Mahasiswa' },
  { value: 'lainnya', label: 'Lainnya' },
];

export const BIDANG_USAHA_OPTIONS: string[] = [
  'Bakery & Pastry',
  'Frozen Food',
  'Catering/Horeca',
  'Distributor',
  'Retail',
  'Food Service/Franchise',
  'Sekolah/Akademi',
  'UMKM',
  'Produsen Bahan Makanan',
  'Manufaktur',
  'Lainnya',
];

export const TUJUAN_OPTIONS: SelectOption[] = [
  { value: 'lihat', label: 'Melihat-lihat' },
  { value: 'supplier', label: 'Mencari Supplier' },
  { value: 'distributor', label: 'Mencari Distributor' },
  { value: 'kerjasama', label: 'Kerja Sama Bisnis' },
  { value: 'lainnya', label: 'Lainnya' },
];

export const PRODUK_OPTIONS: string[] = [
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