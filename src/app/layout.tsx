import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { personal } from "@/data/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://amanraj995567.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — Software Engineer`,
    template: `%s — ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "Aman Raj",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "AI Systems",
    "Spring Boot",
    "Node.js",
    "Kafka",
    "Kubernetes",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — Software Engineer`,
    description: personal.tagline,
    siteName: `${personal.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Software Engineer`,
    description: personal.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05070c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
