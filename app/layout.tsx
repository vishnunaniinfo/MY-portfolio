import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vishnu Vardhan Burri',
  description: 'My own portfolio',
  generator: 'vishnu.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
