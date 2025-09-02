export interface Product {
  id: number
  name: string
  category: string
  image: string
  isNew?: boolean
  isBestSeller?: boolean
  isPremium?: boolean
  href?: string;
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


