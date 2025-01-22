import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/SharmaKabir"),
  alternates: {
    canonical: "https://kabirsharma.tech",
  },
  title: "Kabir Sharma - CS Student",
  description:
    "Kabir Sharma is a prefinal CSE student (batch of 2026).",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png" },
      ],
      shortcut: "/favicon.ico",
    },
  keywords:
    "Kabir, Kabir Sharma, Full Stack, CSE, Web Dev, kabirsharma.tech",
  openGraph: {
    locale: "en_US",
    siteName: "Kabir Sharma",
    type: "website",
    title: "Kabir Sharma",
    description:
      "Kabir Sharma, pre-final CSE Student.",
    url: "https://kabirsharma.tech",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
</head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
