import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProductSection from './ProductSection'
import { sampleProducts } from '../../DataDummy/DataProduct'
import BlogSection from './BlogSection'
import MarqueeBrandProduct from './BrandProduct'

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
        className="my-custom-class"
      />
      {/* <SubscribeSection /> */}
    </>
  )
}
