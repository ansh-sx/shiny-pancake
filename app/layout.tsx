import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="px-4 sm:px-0">
  <div className="max-w-screen-sm mx-auto w-full">
    {children}
  </div>
</body>
    </html>
  )
}
