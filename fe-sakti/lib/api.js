import axios from 'axios';
import { 
  dummyCategories, 
  generateDummyBlogResponse, 
  findDummyBlogBySlug,
  getDummyRelatedBlogs,
  findDummyCategoryBySlug,
  dummyCompanies
} from './DataBlog';

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

// Helper function untuk simulasi delay (opsional, untuk testing)
const simulateApiCall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { success: true, data } });
    }, delay);
  });
};

// Blog API functions with fallback
export const blogApi = {
  // Get all blogs with filters
  getAll: async (params = {}) => {
    try {
      const response = await api.get('/blogs', { params });
      console.log('✅ API fetch successful - blogs');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy data for blogs:', error.message);
      
      const dummyResponse = generateDummyBlogResponse(params);
      return simulateApiCall(dummyResponse, 500); // Delay lebih pendek untuk UX yang baik
    }
  },
  
  // Get single blog by slug
  getBySlug: async (slug) => {
    try {
      const response = await api.get(`/blogs/${slug}`);
      console.log('✅ API fetch successful - single blog');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy data for single blog:', error.message);
      
      const dummyBlog = findDummyBlogBySlug(slug);
      return simulateApiCall(dummyBlog, 500);
    }
  },
  
  // Get related blogs
  getRelated: async (slug, limit = 3) => {
    try {
      const response = await api.get(`/blogs/${slug}/related`, { params: { limit } });
      console.log('✅ API fetch successful - related blogs');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy data for related blogs:', error.message);
      
      const relatedBlogs = getDummyRelatedBlogs(slug, limit);
      return simulateApiCall(relatedBlogs, 300);
    }
  },
  
  // Get blog statistics
  getStats: async (slug) => {
    try {
      const response = await api.get(`/blogs/${slug}/stats`);
      console.log('✅ API fetch successful - blog stats');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy stats:', error.message);
      
      // Generate random stats untuk demo
      const stats = {
        views: Math.floor(Math.random() * 2000) + 100,
        likes: Math.floor(Math.random() * 50) + 5,
        shares: Math.floor(Math.random() * 25) + 2
      };
      
      return simulateApiCall(stats, 200);
    }
  },
  
  // Increment blog views
  incrementViews: async (slug) => {
    try {
      const response = await api.post(`/blogs/${slug}/views`);
      console.log('✅ API fetch successful - increment views');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, cannot increment views:', error.message);
      
      // Return dummy success response
      return simulateApiCall({ 
        success: true, 
        message: 'Views updated (dummy)',
        views: Math.floor(Math.random() * 1000) + 100
      }, 100);
    }
  },
  
  // Categories
  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      console.log('✅ API fetch successful - categories');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy categories:', error.message);
      return simulateApiCall(dummyCategories, 300);
    }
  },
  
  getCategoryBySlug: async (slug) => {
    try {
      const response = await api.get(`/categories/${slug}`);
      console.log('✅ API fetch successful - single category');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy category:', error.message);
      
      const category = findDummyCategoryBySlug(slug);
      return simulateApiCall(category, 200);
    }
  },
  
  // Companies
  getCompanies: async () => {
    try {
      const response = await api.get('/companies');
      console.log('✅ API fetch successful - companies');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy companies:', error.message);
      return simulateApiCall(dummyCompanies, 200);
    }
  },
  
  getCompanyById: async (id) => {
    try {
      const response = await api.get(`/companies/${id}`);
      console.log('✅ API fetch successful - single company');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy company:', error.message);
      
      const company = dummyCompanies.find(c => c.id == id) || dummyCompanies[0];
      return simulateApiCall(company, 200);
    }
  },
  
  // Search functionality
  search: async (query, params = {}) => {
    try {
      const response = await api.get('/blogs/search', { params: { q: query, ...params } });
      console.log('✅ API fetch successful - search');
      return response;
    } catch (error) {
      console.warn('⚠️ API failed, using dummy search results:', error.message);
      
      const searchParams = { ...params, search: query };
      const searchResults = generateDummyBlogResponse(searchParams);
      return simulateApiCall(searchResults, 400);
    }
  },
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

// Helper untuk check apakah sedang menggunakan dummy data
export const isDummyData = (response) => {
  if (!response?.data?.data) return false;
  
  // Check jika URL mengandung 'dummy://' 
  if (typeof response.data.data === 'object' && response.data.data.path) {
    return response.data.data.path.includes('dummy://');
  }
  
  return false;
};

export default api;