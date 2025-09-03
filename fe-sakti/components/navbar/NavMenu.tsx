'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { NavItem } from '@/types/navbar.types';
import { Logo } from './Logo';

interface NavMenuProps {
  navItems: NavItem[];
  isDark?: boolean;
  isScrolled?: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ 
  navItems, 
  isScrolled = false 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="items-center hidden space-x-1 lg:flex">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button
              variant="ghost"
              size="sm"
              className={`h-10 px-4 py-2 font-medium transition-all duration-300 relative group ${
                item.isActive 
                  ? isScrolled 
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20' 
                    : 'text-white bg-white/20 dark:text-white dark:bg-white/10'
                  : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:text-orange-400 dark:hover:bg-orange-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/20 dark:text-gray-200 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              {item.label}
              
              {/* Active indicator */}
              {item.isActive && (
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-orange-600 dark:bg-orange-400' 
                    : 'bg-white dark:bg-white'
                }`} />
              )}
              
              {/* Hover indicator */}
              <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6 ${
                item.isActive ? 'hidden' : isScrolled 
                  ? 'bg-orange-600 dark:bg-orange-400' 
                  : 'bg-white dark:bg-white'
              }`} />
            </Button>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden flex items-center justify-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`border  backdrop-blur-md h-9 w-9 transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:text-orange-400 dark:hover:bg-orange-900/20'
                : 'text-white/90 hover:text-white hover:bg-white/20 dark:text-gray-200 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            <Menu className="w-9 h-9" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-l border-gray-200 dark:border-gray-700"
        >
          <SheetHeader className="text-left border-b border-gray-200 dark:border-gray-700 pb-4">
            <SheetTitle className="text-gray-900 dark:text-gray-100 font-semibold">
              <Logo className=""/>
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col mt-2 space-y-2 px-2">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href} onClick={handleLinkClick}>
                <Button
                  variant="ghost"
                  size="lg"
                  className={`w-full justify-start h-12 px-4 font-medium transition-all duration-300 hover:scale-[1.02] ${
                    item.isActive 
                      ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-l-4 border-orange-600 dark:border-orange-400 rounded-l-none' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:text-orange-400 dark:hover:bg-orange-900/20 hover:border-l-4 hover:border-orange-600 dark:hover:border-orange-400 hover:rounded-l-none'
                  }`}
                >
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.isActive && (
                    <div className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400" />
                  )}
                </Button>
              </Link>
            ))}
          </nav>
          
          {/* Footer info in mobile menu */}
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Your Company
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};