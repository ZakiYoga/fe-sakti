import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
console.log('API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 600 second timeout
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
  
  // Categories
  getCategories: () => api.get('/categories'),
  getCategoryBySlug: (slug) => api.get(`/categories/${slug}`),
  
  // Companies
  getCompanies: () => api.get('/companies'),
  getCompanyById: (id) => api.get(`/companies/${id}`),
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

export default api;