import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irwin Mitchell Tets',
  description: 'Test project for use of Next.js for Irwin Mitchell',
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
