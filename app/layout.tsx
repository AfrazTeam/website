import Header from '@/components/header'
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
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
