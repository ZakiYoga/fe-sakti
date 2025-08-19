'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { Language } from '@/types/navbar.types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  availableLanguages: Language[];
  onLanguageChange: (language: Language) => void;
  isScrolled?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  availableLanguages,
  onLanguageChange,
  isScrolled = false,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={`h-9 font-medium transition-all duration-300 border hover:scale-105 ${
            isScrolled
              ? 'border-gray-300 bg-white/90 text-gray-800 hover:text-orange-600 hover:border-orange-600 hover:bg-white dark:border-gray-600 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:text-orange-400 dark:hover:border-orange-400' 
              : 'border-white/30 bg-white/20 text-white hover:bg-white/30 hover:border-white/50 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200 dark:hover:bg-gray-600/50'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden ml-2 sm:inline-block">{currentLanguage.name}</span>
          <span className="ml-1 sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="min-w-[140px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700"
      >
        {availableLanguages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onLanguageChange(language)}
            className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              currentLanguage.code === language.code 
                ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:text-orange-400 dark:hover:bg-orange-900/20'
            }`}
          >
            <span className="mr-3 text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage.code === language.code && (
              <div className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};