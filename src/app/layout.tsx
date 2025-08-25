// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import ScriptLoader from "./components/ScriptLoader";

export const metadata: Metadata = {
  title: "Montoya - Creative Portfolio",
  description: "Creative Portfolio Template integrated into Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* CSS du template */}
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </head>
      <body 
        className="hidden hidden-ball smooth-scroll1 rounded-borders"
        data-primary-color="#8c6144"
        suppressHydrationWarning={true}
      >
        <div suppressHydrationWarning={true}>
          {children}
        </div>
        {/* Charger les scripts globaux une seule fois */}
        <ScriptLoader />
      </body>
    </html>
  );
}