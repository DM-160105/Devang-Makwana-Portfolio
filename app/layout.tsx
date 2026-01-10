import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import dynamic from "next/dynamic";
import LazyFooter from "@/components/LazyFooter";

import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devangmakwana.vercel.app"),
  title: {
    default: "Devang Makwana - Full Stack Developer",
    template: "%s | Devang Makwana",
  },
  description:
    "A premium full-stack portfolio showcasing innovative web applications, AI integrations, and creative designs. Built with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Devang Makwana",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "Next.js 14",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "AI Integration",
    "AI Tutor",
    "Creative Development",
    "Software Engineer",
  ],
  authors: [{ name: "Devang Makwana" }],
  creator: "Devang Makwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devangmakwana.vercel.app",
    title: "Devang Makwana - Full Stack Developer",
    description:
      "Explore the portfolio of Devang Makwana, a Full Stack Developer specializing in building high-performance, visually stunning web applications.",
    siteName: "Devang Makwana Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have an og-image.png in your public folder
        width: 1200,
        height: 630,
        alt: "Devang Makwana Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devang Makwana - Full Stack Developer",
    description:
      "Premium full-stack portfolio featuring liquid glass effects, smooth scrolling, and advanced web projects.",
    images: ["/og-image.png"],
    creator: "@DevangMakwana01",
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
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // Optional: Add if user provides it later
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const LazyMotionProvider = dynamic(() =>
  import("@/components/LazyMotionProvider").then(
    (mod) => mod.LazyMotionProvider
  )
);

const ThemeProvider = dynamic(() =>
  import("@/components/ThemeProvider").then((mod) => mod.ThemeProvider)
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <LazyMotionProvider>
            <ThemeProvider
              attribute="data-theme"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-[var(--header-height)]">
                  {children}
                </main>
                <LazyFooter />
              </div>
            </ThemeProvider>
          </LazyMotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
