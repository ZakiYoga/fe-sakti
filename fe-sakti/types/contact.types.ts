import { LucideIcon } from 'lucide-react'

export interface ContactInfo {
  icon: LucideIcon
  title: string
  primary: string
  secondary: string
  description: string
  color: 'blue' | 'green' | 'orange' | 'indigo'
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  department: string
  subject: string
  message: string
}

export interface ContactPageProps {
  className?: string
}