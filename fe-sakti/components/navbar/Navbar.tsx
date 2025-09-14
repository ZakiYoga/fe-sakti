'use client';

import React, { useState, useEffect } from 'react';
import { Language, NavbarProps, NavItem } from '@/types/navbar.types';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Default nav items
const defaultNavItems: NavItem[] = [
    { id: '1', label: 'Homepage', href: '/', isActive: true },
    { id: '2', label: 'Tentang Kami', href: '/about', isActive: false },
    { id: '3', label: 'Produk', href: '/product', isActive: false },
    { id: '4', label: 'Blog', href: '/blog', isActive: false },
    { id: '5', label: 'Kontak', href: '/contact', isActive: false },
];

// Default available languages
const defaultAvailableLanguages: Language[] = [
    { code: 'id', name: 'ID', flag: '🇮🇩' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
];

const Navbar: React.FC<NavbarProps> = ({
    navItems = defaultNavItems,
    currentLanguage: propCurrentLanguage,
    availableLanguages = defaultAvailableLanguages,
    onLanguageChange,
    logo,
}) => {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // State untuk current language
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
        propCurrentLanguage || defaultAvailableLanguages[0]
    );

    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
        };

        // Set initial scroll state
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update navItems berdasarkan pathname
    const updatedNavItems = navItems.map(item => ({
        ...item,
        isActive: pathname === item.href
    }));

    const handleLanguageChange = async (language: Language) => {
        setCurrentLanguage(language);
        if (onLanguageChange) {
            onLanguageChange(language);
        }
    };

    // Determine if we should use dark styling (when not scrolled and at top)
    const shouldUseDarkStyling = !isScrolled;

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <header
            className={`fixed overflow-hidden top-0 z-50 w-full transition-all duration-500 ease-in-out ${isScrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
                    : pathname === '/'
                        ? 'bg-transparent backdrop-blur-sm back dark:bg-transparent'
                        : 'bg-gradient-to-t from-gray-900/10 via-gray-950/10 to-orange-100/10 dark:from-orange-700/10 dark:via-orange-800/30 dark:to-orange-900/50 backdrop-blur-sm shadow-none border-none'
                }`}
        >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'
                    }`}>
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Logo
                            logo={logo}
                            isDark={shouldUseDarkStyling}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Center Navigation - Hidden on mobile */}
                    <div className="items-center justify-center flex-1 hidden lg:flex">
                        <NavMenu
                            navItems={updatedNavItems}
                            isDark={shouldUseDarkStyling}
                            isScrolled={isScrolled}
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-3">
                        {/* <LanguageSwitcher
                            currentLanguage={currentLanguage}
                            availableLanguages={availableLanguages}
                            onLanguageChange={handleLanguageChange}
                            isScrolled={isScrolled}
                        /> */}

                        {/* Theme Switcher */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={`h-9 w-9 p-0 transition-all duration-300 border ${isScrolled
                                            ? 'border-gray-300 bg-white/90 text-gray-800 hover:text-orange-600 hover:border-orange-600 dark:border-gray-600 dark:bg-gray-800/90 dark:text-gray-200'
                                            : 'border-white/30 bg-white/20 text-white hover:bg-white/30 hover:border-white/50 dark:border-gray-600 dark:bg-gray-700/50'
                                        }`}
                                >
                                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700"
                            >
                                <DropdownMenuItem
                                    onClick={() => setTheme("light")}
                                    className="hover:text-orange-500"
                                >
                                    <Sun className="w-4 h-4 mr-2" />
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setTheme("dark")}
                                    className="hover:text-orange-500"
                                >
                                    <Moon className="w-4 h-4 mr-2" />
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setTheme("system")}
                                    className="hover:text-orange-500"
                                >
                                    <span className="w-4 h-4 mr-2">🖥️</span>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile menu */}
                        <div className="flex lg:hidden">
                            <NavMenu
                                navItems={updatedNavItems}
                                isDark={shouldUseDarkStyling}
                                isScrolled={isScrolled}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient line at bottom when scrolled */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
                }`} />
        </header>
    );
};

export default Navbar;