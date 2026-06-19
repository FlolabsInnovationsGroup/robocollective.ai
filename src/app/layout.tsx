import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/components/ui";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robocollective.ai";

const title = "RoboCollective.ai - Intelligent Digital Operations";
const description =
  "Buy robots for sale from trusted makers worldwide and delivered, professionally set up, and fully supported. Explore industrial, service, and educational robots at RoboCollective.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RoboCollective.ai",
    title,
    description,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RoboCollective.ai — The Future of Robotics. Available Today.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
