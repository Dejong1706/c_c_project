import type { Metadata } from 'next'
import './globals.css'
import Layout from './components/Layout'

export const metadata: Metadata = {
  title: 'BuildCalc — Free Construction Calculators',
  description: 'Free construction calculators for concrete, tiles, bricks, rebar, paint and more.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
