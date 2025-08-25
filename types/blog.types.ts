export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  blogs_count?: number;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  user?: User;
  category?: Category;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

export interface BlogParams {
  page: number;
  search: string;
  category: string;
}


// Types and Interfaces
// export interface Author {
//   name: string
//   avatar: string
// }

// export interface BlogPost {
//   id: number
//   title: string
//   description: string
//   image: string
//   category: string
//   author: Author
//   publishedAt: string
//   readTime: number
//   likes: number
//   views: number
//   isFeatured: boolean
// }

// export interface BlogCardProps {
//   post: BlogPost
//   index: number
//   containerWidth: number
// }

// export interface NavButtonProps {
//   direction: 'left' | 'right'
//   onClick: () => void
//   disabled?: boolean
// }

// export interface LoadingIndicatorProps {
//   className?: string
// }

// export interface BlogSectionProps {
//   title?: string
//   subtitle?: string
//   description?: string
//   className?: string
//   showViewAll?: boolean
//   autoScroll?: boolean
//   cardVariant?: 'default' | 'compact' | 'detailed'
// }

