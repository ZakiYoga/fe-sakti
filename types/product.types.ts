export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  category: string
  image: string
  isNew?: boolean
  isBestSeller?: boolean
  description: string
}

export interface ProductCardProps {
  product: Product
  index: number
}

export interface ProductSectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  products: Product[]
  className?: string
}