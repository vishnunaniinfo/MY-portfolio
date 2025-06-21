import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vishnu Vardhan burri'
  description: 'My own portfolio'
  generator:'vishnu.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
