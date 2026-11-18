import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karthikeyan-official.github.io/portfolio"),
  title: "Karthikeyan Aruldoss — Senior Full-Stack Engineer | LLMs, RAG, Cybersecurity SaaS",
  description:
    "Senior full-stack engineer in Chennai. I ship LLMs, RAG, and agents into production cybersecurity SaaS with React, NestJS, and Python.",
  keywords: [
    "AI Full-Stack Engineer",
    "Senior Software Engineer",
    "LLMs",
    "RAG",
    "React",
    "Next.js",
    "NestJS",
    "Karthikeyan",
  ],
  authors: [{ name: "Karthikeyan Aruldoss" }],
  openGraph: {
    title: "Karthikeyan Aruldoss — Senior Full-Stack Engineer | LLMs, RAG, Cybersecurity SaaS",
    description:
      "Senior full-stack engineer shipping LLMs, RAG, and agents into production cybersecurity SaaS.",
    type: "website",
    locale: "en_US",
    images: ["/apple-icon.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="bg-[#e8edf3] text-[#16202b] antialiased font-sans">
        <a
          href="#hero"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:whitespace-normal"
        >
          Skip to content
        </a>
        <ErrorBoundary>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
