/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = process.env.NEXT_PUBLIC_API_BUKUTAMU_URL || 'http://localhost:8000/api';

export interface BukuTamuData {
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
  produk_minat?: string | string[];

  // Section 4: Rating & Feedback
  rating?: number;
  kritik_saran?: string;

  // Metadata
  catatan?: string;
  follow_up?: boolean;
}

export interface BukuTamuResponse extends Omit<BukuTamuData, 'produk_minat'> {
  id: number;
  foto_url?: string;
  tanggal_kunjungan: string;
  produk_minat?: string; // Backend stores as string
}

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

interface ApiResponse<T> {
  results?: T[];
  count?: number;
  next?: string;
  previous?: string;
  status?: string;
  message?: string;
  data?: T;
}

export const bukuTamuService = {
  /**
   * Get all data dengan filtering
   */
  async getAll(params?: Record<string, any>): Promise<{
    results: BukuTamuResponse[];
    count: number;
    next: string | null;
    previous: string | null;
  }> {
    const queryString = new URLSearchParams(params || {}).toString();
    const url = `${API_URL}/buku-tamu/?${queryString}`;

    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return response.json();
  },

  /**
   * Get detail data by ID
   */
  async getById(id: number): Promise<BukuTamuResponse> {
    const response = await fetch(`${API_URL}/buku-tamu/${id}/`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch detail: ${response.status}`);
    }
    return response.json();
  },

  /**
   * Create data baru
   */
  async create(data: any, foto: Blob | null) {
    const formData = new FormData();

    // FIXED: Send produk_minat as JSON string
    if (Array.isArray(data.produk_minat) && data.produk_minat.length > 0) {
      formData.append('produk_minat_list', JSON.stringify(data.produk_minat));
    }

    // Add other fields (EXCLUDE produk_minat)
    const { produk_minat, ...otherData } = data;

    Object.entries(otherData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, typeof value === 'boolean' ? String(value) : String(value));
      }
    });

    // Add photo
    if (foto) {
      formData.append('foto', foto, 'photo.jpg');
    }

    const response = await fetch(`${API_URL}/buku-tamu/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(JSON.stringify(error));
    }

    const result = await response.json();
    return result.data || result;
  },

  /**
   * Update data existing
   */
  async update(id: number, data: Partial<BukuTamuData>, foto?: File | Blob): Promise<BukuTamuResponse> {
    const formData = new FormData();

    // Convert produk_minat array to JSON string for backend
    const processedData = { ...data };
    if (Array.isArray(data.produk_minat)) {
      formData.append('produk_minat_list', JSON.stringify(data.produk_minat));
      delete (processedData as any).produk_minat;
    }

    // Add all fields
    Object.entries(processedData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, String(value));
      }
    });

    // Add photo if exists
    if (foto) {
      formData.append('foto', foto, 'photo.jpg');
    }

    const response = await fetch(`${API_URL}/buku-tamu/${id}/`, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to update');
    }

    const result = await response.json();
    return result.data || result;
  },

  /**
   * Delete data
   */
  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/buku-tamu/${id}/`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.status}`);
    }
  },

  /**
   * Get statistics - UPDATED with new fields
   */
  async getStatistics(): Promise<StatisticsResponse> {
    const response = await fetch(`${API_URL}/buku-tamu/statistics/`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch statistics');
    }
    return response.json();
  },

  /**
   * Toggle follow up status
   */
  async toggleFollowUp(id: number): Promise<BukuTamuResponse> {
    const response = await fetch(`${API_URL}/buku-tamu/${id}/toggle_follow_up/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to toggle follow up');
    }

    const result = await response.json();
    return result.data || result;
  },

  /**
   * Export summary - NEW
   */
  async exportSummary(): Promise<any> {
    const response = await fetch(`${API_URL}/buku-tamu/export_summary/`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch export summary');
    }
    return response.json();
  }
};