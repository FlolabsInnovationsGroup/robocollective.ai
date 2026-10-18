import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";

import { Nav } from "@/components/ui/Nav";
import { PreferredSourcePrompt } from "@/components/ui/PreferredSource";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/lib/theme";

import "./globals.css";

const GTM_ID = "GTM-5LM3V873";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoboCollective.ai - Intelligent Digital Operations",

  description:
    "Buy robots for sale from trusted makers worldwide, professionally delivered, set up, and fully supported. Explore industrial, service, and educational robots at RoboCollective.ai.",

  verification: {
    google: "m-L9bDEve96SpdkHWhqyJJjeRUXiBrs6NNQyrCV0EPw",
  },
};

const themeInitScript = `
  (function () {
    try {
      var theme = localStorage.getItem("${THEME_STORAGE_KEY}");

      if (theme === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.dataset.theme = "light";
      } else {
        document.documentElement.dataset.theme =
          theme === "dark" ? theme : "dark";
      }
    } catch (error) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialization */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>

      <body
        className={`${geistSans.className} bg-black`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Script
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="afterInteractive"
        />

        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        <ThemeProvider>
          <Nav />

          {children}

          <PreferredSourcePrompt />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import Script from "next/script";
// import { Geist } from "next/font/google";
// import { Nav, ScrollToTopButton } from "@/components/ui";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";
// import { THEME_STORAGE_KEY } from "@/lib/theme";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "RoboCollective.ai - Intelligent Digital Operations",
//   description: "Buy robots for sale from trusted makers worldwide and delivered, professionally set up, and fully supported. Explore industrial, service, and educational robots at RoboCollective.ai",
// };

// const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"){document.documentElement.classList.add("light");document.documentElement.dataset.theme="light";}else{document.documentElement.dataset.theme=t==="dark"?t:"dark";}}catch(e){}})();`;

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <Script id="theme-init" strategy="beforeInteractive">
//           {themeInitScript}
//         </Script>
//       </head>
//       <body className={`${geistSans.className} bg-black`} suppressHydrationWarning>
//         <ThemeProvider>
//           <Nav />
//           {children}
//           <ScrollToTopButton />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
