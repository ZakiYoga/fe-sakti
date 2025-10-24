/* eslint-disable @typescript-eslint/no-explicit-any */

// ============================================================
// CORE DATA TYPES - Matching Django Model
// ============================================================

/**
 * Complete data structure matching Django BukuTamu model
 * All fields nullable in Django should be optional here
 */
export interface BukuTamuItem {
  // Primary Key
  id: number;
  
  // Section 1: Data Diri (Personal Data)
  nama_lengkap: string; // Required
  no_hp: string; // Required
  is_whatsapp?: boolean; // Optional (default=False)
  email?: string | null; // Optional (blank=True, null=True)
  asal_kota: string; // Required
  asal_negara?: string; // Optional (default='Indonesia')
  foto?: string | null; // Optional (blank=True, null=True)
  foto_url?: string | null; // From serializer - computed field
  persetujuan_foto?: boolean; // Optional (default=False)
  
  // Section 2: Instansi/Usaha (Business/Organization)
  kategori_usaha?: string | null; // Optional (blank=True, null=True)
  punya_usaha?: string | null; // Optional (blank=True, null=True) - 'punya' | 'tidak'
  instansi?: string | null; // Optional (blank=True, null=True)
  jabatan?: string | null; // Optional (blank=True, null=True)
  bidang_usaha?: string | null; // Optional (blank=True, null=True)
  
  // Section 3: Tujuan Kunjungan (Visit Purpose)
  tujuan_kunjungan?: string | null; // Optional (blank=True, null=True)
  produk_minat?: string | null; // Optional - JSON string in DB
  produk_minat_list?: string[]; // From serializer - parsed array
  
  // Section 4: Rating & Feedback
  rating?: number | null; // Optional (blank=True, null=True) - 1-5
  kritik_saran?: string | null; // Optional (blank=True, null=True)
  
  // Metadata
  tanggal_kunjungan: string; // Required (auto_now_add=True) - ISO format
  catatan?: string | null; // Optional (blank=True, null=True)
  follow_up?: boolean; // Optional (default=False)
}

/**
 * Data structure for CREATE operations
 * Excludes auto-generated fields (id, tanggal_kunjungan, foto_url)
 */
export interface BukuTamuCreateData {
  // Section 1: Data Diri
  nama_lengkap: string;
  no_hp: string;
  is_whatsapp?: boolean;
  email?: string;
  asal_kota: string;
  asal_negara?: string;
  persetujuan_foto?: boolean;
  
  // Section 2: Instansi/Usaha
  kategori_usaha?: string;
  punya_usaha?: string;
  instansi?: string;
  jabatan?: string;
  bidang_usaha?: string;
  
  // Section 3: Tujuan Kunjungan
  tujuan_kunjungan?: string;
  produk_minat?: string; // Will be converted to JSON array
  
  // Section 4: Rating & Feedback
  rating?: number;
  kritik_saran?: string;
  
  // Metadata
  catatan?: string;
  follow_up?: boolean;
}

/**
 * Data structure for UPDATE operations
 * All fields optional as it's a Partial update
 */
export interface BukuTamuUpdateData {
  id?: number;
  nama_lengkap?: string;
  no_hp?: string;
  is_whatsapp?: boolean;
  email?: string;
  asal_kota?: string;
  asal_negara?: string;
  persetujuan_foto?: boolean;
  kategori_usaha?: string;
  punya_usaha?: string;
  instansi?: string;
  jabatan?: string;
  bidang_usaha?: string;
  tujuan_kunjungan?: string;
  produk_minat?: string;
  rating?: number;
  kritik_saran?: string;
  catatan?: string;
  follow_up?: boolean;
}

// ============================================================
// API RESPONSE TYPES
// ============================================================

/**
 * Paginated response from Django REST Framework
 */
export interface BukuTamuResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BukuTamuItem[];
}

/**
 * Single item response wrapper
 */
export interface BukuTamuSingleResponse {
  status: string;
  message: string;
  data: BukuTamuItem;
}

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = any> {
  status?: string;
  message?: string;
  data?: T;
  results?: T[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}

/**
 * Statistics response from backend
 */
export interface StatisticsResponse {
  total_pengunjung: number;
  perlu_follow_up: number;
  persentase_follow_up: number;
  per_kategori_usaha: Record<string, number>;
  per_bidang_usaha: Record<string, number>;
  per_tujuan_kunjungan: Record<string, number>;
  rating_booth: {
    average_rating: number;
    total_rated: number;
    per_rating: Record<string, number>;
  };
  produk_populer: Record<string, number>;
  statistik_usaha: {
    punya: number;
    tidak: number;
  };
}

/**
 * Export summary response
 */
export interface ExportSummaryResponse {
  total: number;
  by_kategori: Record<string, number>;
  by_rating: Record<string, number>;
  top_products: Record<string, number>;
  feedback_count: number;
}

// ============================================================
// FORM & UI TYPES
// ============================================================

/**
 * Form data for client-side form handling
 */
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

/**
 * Select option for dropdowns
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Form step configuration
 */
export interface FormStep {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  field: string;
  placeholder: string;
  required: boolean;
}

/**
 * Section configuration for multi-step forms
 */
export interface Section {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  fields: string[];
}

// ============================================================
// COMPONENT PROPS TYPES
// ============================================================

/**
 * Props for BukuTamuForm component
 */
export interface BukuTamuFormProps {
  onSuccess?: (result: BukuTamuItem) => void;
  defaultValues?: BukuTamuItem | null;
}

/**
 * Props for WebcamCapture component
 */
export interface WebcamCaptureProps {
  onCapture: (blob: Blob) => void;
  onCancel: () => void;
}

/**
 * Props for FormSection component
 */
export interface FormSectionProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  onPhotoCapture?: (photoBlob: Blob) => void;
  fotoBlob?: Blob | null;
}

/**
 * Props for ProgressSidebar component
 */
export interface ProgressSidebarProps {
  sections: Section[];
  currentSection: number;
}

/**
 * Props for SuccessModal component
 */
export interface SuccessModalProps {
  isOpen: boolean;
  userName: string;
  onReset: () => void;
}

/**
 * Props for StarRating component
 */
export interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

// ============================================================
// CONSTANTS & OPTIONS
// ============================================================

/**
 * Kategori Usaha options
 */
export const KATEGORI_OPTIONS: SelectOption[] = [
  { value: 'individu', label: 'Individu/Umum' },
  { value: 'pelajar', label: 'Pelajar/Mahasiswa' },
  { value: 'organization', label: 'Organization' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'retail', label: 'Retail/Buyer' },
  { value: 'horeca', label: 'Horeca' },
  { value: 'supplier', label: 'Supplier' },
  { value: 'lainnya', label: 'Lainnya' },
];

/**
 * Bidang Usaha options
 */
export const BIDANG_USAHA_OPTIONS: SelectOption[] = [
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

/**
 * Tujuan Kunjungan options
 */
export const TUJUAN_OPTIONS: SelectOption[] = [
  { value: 'lihat', label: 'Melihat-lihat' },
  { value: 'supplier', label: 'Mencari Supplier' },
  { value: 'distributor', label: 'Mencari Distributor' },
  { value: 'kerjasama', label: 'Kerja Sama Bisnis' },
  { value: 'lainnya', label: 'Lainnya' },
];

/**
 * Produk options
 */
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

/**
 * Punya Usaha options
 */
export const PUNYA_USAHA_OPTIONS: SelectOption[] = [
  { value: 'punya', label: 'Punya' },
  { value: 'tidak', label: 'Tidak Punya' },
];

/**
 * Rating options with descriptions
 */
export const RATING_OPTIONS = [
  { value: 1, label: '1 - Perlu Perbaikan' },
  { value: 2, label: '2 - Kurang Memuaskan' },
  { value: 3, label: '3 - Cukup Baik' },
  { value: 4, label: '4 - Baik' },
  { value: 5, label: '5 - Sangat Baik' },
];

// ============================================================
// UTILITY TYPES
// ============================================================

/**
 * Query parameters for filtering
 */
export interface BukuTamuQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  kategori_usaha?: string;
  tujuan_kunjungan?: string;
  follow_up?: boolean;
  is_whatsapp?: boolean;
  punya_usaha?: string;
  rating?: number;
  bidang_usaha?: string;
  ordering?: string;
}

/**
 * Type guard to check if response is paginated
 */
export function isPaginatedResponse(response: any): response is BukuTamuResponse {
  return (
    response &&
    typeof response === 'object' &&
    'count' in response &&
    'results' in response &&
    Array.isArray(response.results)
  );
}

/**
 * Type guard to check if response is single item
 */
export function isSingleItemResponse(response: any): response is BukuTamuSingleResponse {
  return (
    response &&
    typeof response === 'object' &&
    'status' in response &&
    'data' in response &&
    !Array.isArray(response.data)
  );
}