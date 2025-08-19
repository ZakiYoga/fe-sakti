// Types and Interfaces
export interface Author {
  name: string
  avatar: string
}

export interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  category: string
  author: Author
  publishedAt: string
  readTime: number
  likes: number
  views: number
  isFeatured: boolean
}

export interface BlogCardProps {
  post: BlogPost
  index: number
  containerWidth: number
}

export interface NavButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}

export interface LoadingIndicatorProps {
  className?: string
}

export interface BlogSectionProps {
  title?: string
  subtitle?: string
  description?: string
  className?: string
  showViewAll?: boolean
  autoScroll?: boolean
  cardVariant?: 'default' | 'compact' | 'detailed'
}