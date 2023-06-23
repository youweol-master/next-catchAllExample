import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  slot
}: {
  children: React.ReactNode,
  slot: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-blue-400">{ slot }</div>
        <div className="bg-yellow-400">{ children }</div>
      </body>
    </html>
  )
}
