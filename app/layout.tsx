// ABOUTME: Root layout component with metadata and HTML structure
// ABOUTME: Provides font loading and base HTML template

import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "Nicholas Previtali | AI Engineer & Multi-Agent Systems Architect",
  description: "Head of AI with 4+ years in Generative AI, RAG, Multi-Agent Systems, and LLM orchestration. Building production AI solutions.",
  keywords: ["AI Engineer", "Generative AI", "RAG", "LangChain", "LangGraph", "Multi-Agent Systems", "LLM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.variable} font-mono antialiased bg-cyber-dark text-white`}>
        <BackgroundEffects
          enableMatrixRain={false}
          enableParticles={false}
          enableScanlines={false}
        />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
