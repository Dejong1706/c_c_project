import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildcalczone.com"),
  title: "BuildCalc — Free Construction Calculators",
  description:
    "Free construction calculators for concrete, tiles, bricks, rebar, paint and more.",
  alternates: { canonical: "/" },
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
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
