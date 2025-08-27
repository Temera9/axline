import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientOnly from "@/components/ClientOnly";
import ScrollEffectsProvider from "@/components/ScrollEffectsProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AXline - Creative Portfolio",
  description:
    "We are a creative studio, specialized in strategy, branding, design, and development.",
  keywords: "creative, portfolio, design, branding, development",
  authors: [{ name: "AXline Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link href="/style.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap"
          rel="stylesheet"
        />
        <link href="/css/all.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} hidden hidden-ball smooth-scroll1 rounded-borders`}
        data-primary-color="#8c6144"
        suppressHydrationWarning={true}
      >
        <ScrollEffectsProvider>{children}</ScrollEffectsProvider>

        {/* Scripts */}
        <Script
          src="/js/scroll-effects-global.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpK1sWi3J3EbUOkF_K4-UHzi285HyFX5M&sensor=false"
          strategy="beforeInteractive"
        />

        <Script src="/js/clapat.js" strategy="afterInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/common.js" strategy="afterInteractive" />
        <Script src="/js/contact.js" strategy="afterInteractive" />
        <Script src="/js/scripts.js" strategy="afterInteractive" />

        {/* Magic Cursor and other elements */}
        <ClientOnly>
          <div className="cd-cover-layer"></div>
          <div id="magic-cursor">
            <div id="ball">
              <div id="ball-drag-x"></div>
              <div id="ball-drag-y"></div>
              <div id="ball-loader"></div>
            </div>
          </div>
          <div id="clone-image">
            <div className="hero-translate"></div>
          </div>
          <div id="rotate-device"></div>
        </ClientOnly>
      </body>
    </html>
  );
}
