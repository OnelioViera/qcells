import type { Metadata } from 'next'
import { Archivo, Open_Sans } from 'next/font/google'
import './globals.css'
import { PreviewBanner } from '@/components/PreviewBanner'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'QCELL Tesla Megapack 2 Grade Beams',
  description: 'Custom precast concrete foundation beams engineered and manufactured for QCELL\'s Tesla Megapack 2 battery energy storage systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${openSans.variable}`}>
      <body className="font-sans bg-white text-gray-700">
        <PreviewBanner />
        {children}
      </body>
    </html>
  )
}

