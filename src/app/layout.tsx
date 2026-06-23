import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Nav, ScrollToTopButton } from "@/components/ui";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoboCollective.ai - Intelligent Digital Operations",
  description: "Buy robots for sale from trusted makers worldwide and delivered, professionally set up, and fully supported. Explore industrial, service, and educational robots at RoboCollective.ai",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"){document.documentElement.classList.add("light");document.documentElement.dataset.theme="light";}else{document.documentElement.dataset.theme=t==="dark"?t:"dark";}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className={`${geistSans.className} bg-black`} suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
