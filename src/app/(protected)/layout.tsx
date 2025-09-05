// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/providers";
import FirstHeader from "@/features/header/first-header";
import SecondHeader from "@/features/header/second-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIC",
  description: "Ma banque en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* First Header - Normal */}
          <FirstHeader />
          
          {/* Second Header - Fixed/Floating */}
          <SecondHeader />
          
          {/* Main Content - avec padding-top pour compenser les headers */}
          <main className="pt-[120px]"> {/* Ajuste selon la hauteur de tes headers */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}