export interface ProductSpecifications {
  granula: string
  warna: string
  rasa: string
  aroma: string
}

export interface PackagingSpecifications {
  kemasanInner: string
  kemasanOuter: string
  beratBersih: string
  umurSimpan: string
  informasiLainnya: string[]
}

export interface Product {
  id: number
  name: string
  slug: string // for URL routing
  category: string
  image: string
  gallery?: string[] // multiple images
  isNew?: boolean
  isBestSeller?: boolean
  isPremium?: boolean
  href?: string
  description: string
  fullDescription?: string
  
  // Product Specifications
  spesifikasiProduk?: ProductSpecifications
  
  // Packaging Specifications
  spesifikasiKemasan?: PackagingSpecifications
  
  // Additional Info
  benefits?: string[]
  ingredients?: string[]
  usageInstructions?: string[]
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