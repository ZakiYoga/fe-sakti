import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '../navbar/Logo';
import Link from 'next/link';

interface QuickLink {
  name: string;
  href: string;
}

interface FooterProps {
  quickLinks?: QuickLink[];
}

const Footer: React.FC<FooterProps> = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/product' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Career', href: '/career' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#'}
  ];

  return (
    <footer className="bg-[url('/images/bg-footer.png')] bg-cover bg-center text-white pt-12">
      {/* Main Footer Content */}
      <div className="bg-black/60 backdrop-blur-lg mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Side - Logo and Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo
                logo={{
                  src: '/images/logo/SaktiFood.png',
                  alt: 'Sakti Food Logo',
                  width: 120,
                  height: 32
                }}
                className="h-8 w-auto" />
              {/* <span className="text-2xl font-bold text-white">Company</span> */}
            </div>
            
            {/* Description */}
            <p className="max-w-lg text-sm leading-relaxed text-gray-300">
              Sakti Tepung Roti sudah menjadi andalan konsumen berbagai ukm dan keluarga indonesia dibuat dan di produksi di PT.Sakti Pangan Perkasa sejak 2020. Produk Breadcrumbs atau tepung roti (tepung panir) dibuat dari roti kering yang dihaluskan sebagai bahan pelapis luar makanan, dan tentunya menjadi 
              <span className="text-orange-500 font-semibold">
                &nbsp;#SajianKrispiPenuhKreasi.
                </span>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>staffit@saktipangan.co.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+62 811-2878-8989</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="md:max-w-md">
                  KM9.4, Jl. Solo - Sragen No.8, Wates, Jetis, Kec. Jaten, Kabupaten Karanganyar, Jawa Tengah 57731
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Links and Social Media */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            
            {/* Quick Links */}
            <div className="flex flex-col h-fit group">
              <h3 className="mb-6 w-fit text-lg font-semibold relative text-orange-600">
                Quick Links
                <span className="absolute left-0 bottom-0 group-hover:w-full transition-all duration-500 w-8 h-0.5 bg-orange-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block py-1 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col group h-fit">
              <h3 className="mb-6 w-fit text-lg font-semibold relative text-orange-600">
                Follow Us
                <span className="absolute left-0 bottom-0 group-hover:w-full transition-all duration-500 w-8 h-0.5 bg-orange-600 rounded-full"></span>
              </h3>              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-200 transition-all duration-200 hover:bg-white hover:text-black hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t bg-black/80 backdrop-blur-sm border-gray-800">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PT Sakti Pangan Perkasa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;