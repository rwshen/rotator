import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: 'a playful project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
