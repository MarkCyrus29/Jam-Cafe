import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"] 
});

export const metadata: Metadata = {
  title: 'JAM Cafe | Handcrafted Coffee & Pastries',
  description: 'JAM Cafe - Specialty coffee, handmade jams, breakfast, and pastries in Lipa City. A cozy neighborhood café with handcrafted comfort.',
  keywords: 'cafe, coffee, pastries, jams, breakfast, lipa city',
  creator: 'I Love Jams Kitchen',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#7d5a3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
