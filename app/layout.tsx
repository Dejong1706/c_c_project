import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BuildCalc — Free Construction Calculators",
  description:
    "Free construction calculators for concrete, tiles, bricks, rebar, paint and more.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8534888375420361"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
