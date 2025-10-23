"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

export default function PageLoader() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const start = () => NProgress.start()
    const done = () => NProgress.done()

    // next/navigation tidak punya router.events seperti di pages router
    // Tapi kita bisa pakai useEffect yang mendeteksi perubahan pathname
    start()
    const timeout = setTimeout(() => done(), 500)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
