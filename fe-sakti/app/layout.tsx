import type { Metadata } from "next";
import './globals.css'
import { Bebas_Neue, Poppins, Ephesis } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { DefaultSeo } from "next-seo";
import { siteConfig } from "@/config/site";
import { companyInfo } from "@/config/company";
import { ThemeProvider } from '@/lib/ThemeProvider'
import 'leaflet/dist/leaflet.css'
import { defaultSEO } from "@/config/seo";

const ephesis = Ephesis({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ephesis',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pt sakti pangan perkasa",
    "sakti pangan perkasa",
    "saktipangan",
    "saktifood",
    "sakti",
    "laskar",
    "pita",
    "agni",
    "akstar",
    "7daun",
    "fryfest",
    "manufaktur makanan",
    "tepung roti",
    "tepung roti",
    "tepung panir",
    "breadcrumb",
    "risol",
    "renyah",
    "industri pangan Indonesia",
    "industri tepung roti Indonesia",
    "krispi",
    "kriuk",
    "renyah",
    "karanganyar",
    "jawa tengah",
  ],
  authors: [{ name: companyInfo.legalName }],
  creator: companyInfo.legalName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@saktipangan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${ephesis.variable} ${poppins.variable} bg-white text-gray-900 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}