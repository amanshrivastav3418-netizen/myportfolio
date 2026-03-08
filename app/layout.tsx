import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AMAN | Portfolio',
  description: 'Futuristic portfolio of Aman - BCA Student & Back Office Executive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-900 text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
