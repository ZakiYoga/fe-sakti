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
        <div className={`${poppins.variable} min-h-screen bg-black/20 flex flex-col relative`}>
            {/* Background blur layer */}
            <div 
                className="absolute inset-0 bg-[url('/images/bg-sial.jpg')] bg-cover bg-center blur-[1px] -z-10"
                aria-hidden="true"
            />
            
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <PageLoader />
                <HeaderSial2025 />
                <main className="flex-1 min-h-[80vh] bg-transparent flex items-center justify-center p-4">
                    {children}
                </main>
                <FooterSial2025 />
            </ThemeProvider>
        </div>
    );
}