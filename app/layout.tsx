import type { Metadata } from 'next'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

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
      <body>
      <Navbar />
      {children}
      </body>
      <Footer />
    </html>
  )
}
