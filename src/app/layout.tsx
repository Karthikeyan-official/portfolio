import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthikeyan Aruldoss — Senior Associate SDE",
  description:
    "Senior Associate SDE specializing in cybersecurity SaaS, MERN stack platforms, and AI/ML research. 4+ years building production-grade systems.",
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Product Engineer",
    "Karthikeyan",
  ],
  authors: [{ name: "Karthikeyan Aruldoss" }],
  openGraph: {
    title: "Karthikeyan Aruldoss — Senior Associate SDE",
    description:
      "Senior Associate SDE specializing in cybersecurity SaaS, MERN stack platforms, and AI/ML research.",
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-white antialiased font-sans">
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
