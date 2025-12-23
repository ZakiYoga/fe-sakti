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
import { NProgressOptions } from "nprogress";
import PageLoader from "@/components/Loading";
import AppShell from "@/components/AppShell";

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
    // Target keyword utama
    "tepung roti",
    "tepung panir",
    "breadcrumb",
    "jual tepung roti",
    "harga tepung roti",
    "tepung roti murah",
    "tepung roti berkualitas",

    // Long-tail keywords
    "tepung roti untuk risol",
    "tepung roti untuk nugget",
    "tepung roti untuk ayam goreng",
    "tepung roti panko",
    "tepung roti halus",
    "tepung roti kasar",

    // Local SEO
    "tepung roti karanganyar",
    "tepung roti solo",
    "tepung roti jawa tengah",
    "pabrik tepung roti indonesia",

    // Brand
    "PT Sakti Pangan Perkasa",
    "sakti tepung roti",
    "merk tepung roti sakti",
    "tepung roti laskar",
    "tepung roti pita",
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
          <PageLoader />
          {/* <Navbar /> */}
          <AppShell>{children}</AppShell>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}