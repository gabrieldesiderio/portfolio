import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gabriel Desidério',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
