import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Oswald } from "next/font/google";
import { siteOpenGraph } from "./shared-metadata";
import "./globals.css";
import Layout from "./components/Layout";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Self-hosted by next/font: no browser request to Google Fonts, no render-blocking CSS.
// DM Sans and Oswald are variable fonts (all weights in one file); DM Mono is static.
const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"], // optical size, as the old Google Fonts URL loaded (opsz 9..40)
  display: "swap",
  variable: "--font-dm-sans",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-mono",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildcalczone.com"),
  openGraph: siteOpenGraph,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${oswald.variable}`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8534888375420361"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
