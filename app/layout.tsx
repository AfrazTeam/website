import './globals.css'
import { inter, yekanBakh } from '@/app/fonts'

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
      <body className={`${yekanBakh.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
