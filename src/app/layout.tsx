import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Estates | Premium Luxury Real Estate",
  description: "Discover the world's most prestigious properties with Elite Estates. Curated luxury villas, penthouses, and mansions.",
};

import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-slate-950 text-white min-h-full flex flex-col font-sans relative">
        <PageTransition>
          {children}
        </PageTransition>
        
        {/* Subtle Fixed Watermark */}
        <div className="fixed bottom-6 right-6 z-[100] pointer-events-none select-none opacity-20 hover:opacity-100 transition-opacity duration-500 hidden md:block">
          <p className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase vertical-text">
            Created by Alif Nugraha Digital • Akararasa12
          </p>
        </div>
      </body>

    </html>
  );
}


