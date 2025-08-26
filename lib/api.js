import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
console.log('API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Response interceptor untuk handle error secara global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Blog API functions
export const blogApi = {
  // Get all blogs with filters
  getAll: (params = {}) => api.get('/blogs', { params }),
  
  // Get single blog by slug
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  
  // Get related blogs (you might need to implement this endpoint in Laravel)
  getRelated: (slug, limit = 3) => api.get(`/blogs/${slug}/related`, { params: { limit } }),
  
  // Get blog statistics (views, etc.)
  getStats: (slug) => api.get(`/blogs/${slug}/stats`),
  
  // Increment blog views
  incrementViews: (slug) => api.post(`/blogs/${slug}/views`),
  
  // Categories
  getCategories: () => api.get('/categories'),
  getCategoryBySlug: (slug) => api.get(`/categories/${slug}`),
  
  // Companies
  getCompanies: () => api.get('/companies'),
  getCompanyById: (id) => api.get(`/companies/${id}`),
  
  // Search functionality
  search: (query, params = {}) => api.get('/blogs/search', { params: { q: query, ...params } }),
};

// Helper function untuk extract data dari response format API
export const extractApiData = (response) => {
  // Untuk response dengan format: { success: true, data: {...}, message: "..." }
  if (response.data && typeof response.data === 'object' && 'success' in response.data) {
    return response.data.data;
  }
  // Untuk response biasa
  return response.data;
};

// Helper function untuk handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const status = error.response.status;
    const message = error.response.data?.message || 'Terjadi kesalahan pada server';
    
    switch (status) {
      case 404:
        return { status, message: 'Halaman tidak ditemukan' };
      case 500:
        return { status, message: 'Kesalahan server internal' };
      default:
        return { status, message };
    }
  } else if (error.request) {
    // Network error
    return { status: 0, message: 'Tidak dapat terhubung ke server' };
  } else {
    return { status: 0, message: error.message };
  }
};

export default api;