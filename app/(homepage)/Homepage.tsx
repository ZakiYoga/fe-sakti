import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProductSection from './ProductSection'
import { sampleProducts } from './DataProduct'
import SubscribeSection from './SubscribeSection'
import BlogSection from './BlogSection'
import FAQSection from '../faq/FaqSection'
import AvailabilitySection from './AvailableOnlineShop'
import MarqueeBrandProduct from './BrandProduct'

export default function Homepage() {

  const handleSubscribe = async (email: string) => {
    // Handle subscription logic here
    console.log(`Subscribed with email: ${email}`);
  };

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
        title="Sakti News"
        subtitle="Dapatkan informasi terbaru dan tips menarik dari blog kami."
        className="my-custom-class"
      />
      <SubscribeSection />
    </>
  )
}
