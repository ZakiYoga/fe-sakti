"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const hideLayout = pathname.startsWith("/sial2025")

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </>
  )
}