import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '221B Softwares',
  description: 'Solving your digital mysteries with modern software solutions.',
  keywords: [
    '221B Softwares',
    'Web Development',
    'AI Integrations',
    'Mobile Apps',
    'DevOps',
  ],
  authors: [{ name: '221B Softwares Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: '221B Softwares',
    description:
      'Solving your digital mysteries with modern software solutions.',
    url: 'https://www.221bsoftwares.com',
    siteName: '221B Softwares',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '221B Softwares Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '221B Softwares',
    description:
      'Solving your digital mysteries with modern software solutions.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
