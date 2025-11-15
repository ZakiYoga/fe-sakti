// app/sial2025/layout.tsx
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeProvider";
import PageLoader from "@/components/Loading";
import HeaderSial2025 from "@/components/HeaderSial2025";
import FooterSial2025 from "@/components/footer/FooterSial2025";

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

export default function SialLayout({ children }: { children: ReactNode }) {
    return (
        <div className={`${poppins.variable} relative`}>
            {/* Background blur layer */}
            <div
                className="fixed inset-0 bg-[url('/images/bg_booth.png')] bg-cover bg-center blur-[1px] -z-10"
                aria-hidden="true"
            />
            
            {/* Dark overlay for better readability */}
            <div className="fixed inset-0 bg-black/20 -z-10" aria-hidden="true" />
            
            <div className="min-h-screen flex flex-col">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    <PageLoader />
                    
                    {/* Header - fixed on mobile, static on desktop */}
                    <div className="sticky top-0 z-50 lg:relative">
                        <HeaderSial2025 />
                    </div>
                    
                    {/* Main content area */}
                    <main className="flex-1 w-full flex items-center justify-center">
                        <div className="flex items-center w-full h-full max-w-7xl mx-auto min-h-[85vh] overflow-hidden">
                            {children}
                        </div>
                    </main>
                    
                    {/* Footer */}
                    <div className="mt-auto">
                        <FooterSial2025 />
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
}