import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'افراز تیم | Afraz Team',
  description: 'افراز تیم، گروهی تخصصی برای تولید و توسعه کسب و کار دیجیتالی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
