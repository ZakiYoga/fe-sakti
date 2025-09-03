export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface NavbarProps {
  navItems?: NavItem[];
  currentLanguage?: Language;
  availableLanguages?: Language[];
  onLanguageChange?: (language: Language) => void;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}