import React from 'react'
import { Metadata } from 'next'
import HeroSection from './(homepage)/HeroSection'
import AboutSection from './(homepage)/AboutSection'
import ProductSection from './(homepage)/ProductSection'
import { sampleProducts } from '../DataDummy/DataProduct'
import BlogSection from './(homepage)/BlogSection'
import MarqueeBrandProduct from './(homepage)/BrandProduct'

export const metadata: Metadata = {
  title: "PT Sakti Pangan Perkasa - Pabrik Tepung Roti atau Breadcrumb. Sajian Kualitas Tinggi",
  description: "PT Sakti Pangan Perkasa adalah perusahaan yang berdedikasi untuk menyediakan produk berkualitas tinggi bagi industri kuliner di Indonesia. Sejak berdiri, kami fokus pada produksi tepung roti atau breadcrumbs yang menjadi bahan baku penting dalam berbagai hidangan.",
  openGraph: {
    title: "PT Sakti Pangan Perkasa - Sajian Kualitas Tinggi | Tepung Roti | Breadcrumb.",
    description: "Perusahaan manufaktur makanan yang berfokus pada pembuatan tepung roti, tepung panir, breadcrumb dengan sajian kualitas tinggi.",
    url: "https://www.saktipanganperkasa.co.id",
  },
};

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection
        products={sampleProducts}
      />
      <MarqueeBrandProduct />
      {/* <AvailabilitySection /> */}
      <BlogSection
        title="Berita Terbaru"
        subtitle="Dapatkan informasi terbaru dan tips menarik dari blog kami."
      />
      {/* <SubscribeSection /> */}
    </>
  )
}
