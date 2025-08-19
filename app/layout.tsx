'use client'
import './globals.css'
import { Bebas_Neue, Poppins, Ephesis } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/lib/ThemeProvider'
import { LoadingProvider } from '../components/LoadingProvider'

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${ephesis.variable} ${poppins.variable} bg-white text-gray-900 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LoadingProvider>
            <Navbar />
            {children}
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}