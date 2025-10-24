import { BukuTamuCreateData, BukuTamuItem, BukuTamuResponse, BukuTamuUpdateData } from "@/types/guestBook.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = process.env.NEXT_PUBLIC_API_BUKUTAMU_URL || 'http://localhost:8000/api';

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
  async getAll(params?: any): Promise<BukuTamuResponse> {
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
  async getById(id: number): Promise<BukuTamuItem> {
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
  async create(data: BukuTamuCreateData, foto?: File | Blob | null): Promise<BukuTamuItem> {
    const formData = new FormData();
    
    // Handle produk_minat - extract it from data and don't include in processedData
    const { produk_minat, ...otherData } = data as any;
    
    // Send produk_minat as JSON array
    if (Array.isArray(produk_minat) && produk_minat.length > 0) {
      formData.append('produk_minat_list', JSON.stringify(produk_minat));
    } else if (typeof produk_minat === 'string' && produk_minat) {
      // If it's a string (comma-separated), convert to array
      const produkArray = produk_minat.split(',').map((p: string) => p.trim()).filter((p: string) => p);
      if (produkArray.length > 0) {
        formData.append('produk_minat_list', JSON.stringify(produkArray));
      }
    }

    // Add all other fields (without produk_minat)
    Object.entries(otherData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, typeof value === 'boolean' ? String(value) : String(value));
      }
    });

    // Add photo if exists
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
  },

  /**
   * Update data existing
   */
  async update(id: number, data: BukuTamuUpdateData, foto?: File | Blob): Promise<BukuTamuItem> {
    const formData = new FormData();

    // Handle produk_minat array
    const processedData = { ...data };
    const produkMinat = (data as any).produk_minat;
    
    if (Array.isArray(produkMinat)) {
      formData.append('produk_minat_list', JSON.stringify(produkMinat));
      delete (processedData as any).produk_minat;
    } else if (typeof produkMinat === 'string' && produkMinat) {
      // If it's a string (comma-separated), convert to array
      const produkArray = produkMinat.split(',').map(p => p.trim()).filter(p => p);
      formData.append('produk_minat_list', JSON.stringify(produkArray));
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
   * Get statistics
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
  async toggleFollowUp(id: number): Promise<BukuTamuItem> {
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
   * Export summary
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