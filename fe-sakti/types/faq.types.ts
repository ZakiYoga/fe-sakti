export interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  isPopular?: boolean
}

export interface FAQSectionProps {
  title?: string
  subtitle?: string
  companyName?: string
  className?: string
}

export interface FAQCardProps {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}
