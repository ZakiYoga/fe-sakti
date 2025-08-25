export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  color?: string;
  icon?: string;
  blogs_count?: number;
}

// Main Blog interface matching API response structure
export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  status: string;
  published_at: string;
  views: number;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  category_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  approved_by: number | null;
  approved_at: string | null;
  rejection_reason: string | null;
  category?: Category;
  user?: User;
}

// Enhanced PaginatedResponse to match Laravel pagination structure
export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string | null;
  from: number | null;
  last_page: number;
  last_page_url: string | null;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

// Blog API parameters
export interface BlogParams {
  page?: number;
  search?: string;
  category?: string;
  per_page?: number;
  status?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

// Legacy BlogPost interface for backward compatibility (used in BlogSection.tsx)
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  likes: number;
  views: number;
  isFeatured: boolean;
}

// Helper function to convert Blog to BlogPost for backward compatibility
export const convertBlogToBlogPost = (blog: Blog): BlogPost => {
  return {
    id: blog.id,
    title: blog.title,
    description: blog.excerpt,
    image: blog.featured_image || `https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&sig=${blog.id}`,
    category: blog.category?.name || 'Uncategorized',
    author: {
      name: blog.user?.name || 'Admin',
      avatar: `/images/avatars/default-avatar.png`
    },
    publishedAt: blog.published_at,
    readTime: Math.ceil(blog.content.length / 1000) || 5, // Estimate reading time based on content length
    likes: Math.floor(blog.views / 10) || 0, // Estimate likes as 10% of views
    views: blog.views,
    isFeatured: blog.status === 'published' && blog.views > 500 // Consider high-view articles as featured
  };
};

// Component prop interfaces for BlogSection.tsx
export interface BlogCardProps {
  post: BlogPost;
  index: number;
  containerWidth: number;
}

export interface NavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export interface LoadingIndicatorProps {
  className?: string;
}

export interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showViewAll?: boolean;
  autoScroll?: boolean;
  cardVariant?: 'default' | 'compact' | 'detailed';
}

// API Response wrapper interface
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Blog detail interface (for individual blog page)
export interface BlogDetail extends Blog {
  related_posts?: Blog[];
  tags?: string[];
  reading_time?: number;
}

// Category with posts interface
export interface CategoryWithPosts extends Category {
  posts?: Blog[];
}

// Search result interface
export interface BlogSearchResult {
  query: string;
  results: Blog[];
  total: number;
  categories: Category[];
  suggestions?: string[];
}

// Blog statistics interface
export interface BlogStats {
  total_posts: number;
  published_posts: number;
  draft_posts: number;
  total_views: number;
  total_categories: number;
  most_viewed_post?: Blog;
  recent_posts?: Blog[];
}

// Blog form data interface (for creating/editing blogs)
export interface BlogFormData {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  featured_image?: File | string | null;
  category_id: number;
  status: 'draft' | 'published' | 'archived';
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  tags?: string[];
}