import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  variable: '--inter-google',
  subsets: ['latin'],
})

const yekanBakh = localFont({
  src: [
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-Thin.woff',
      weight: '200',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-Light.woff',
      weight: '300',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-Regular.woff',
      weight: '500',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-SemiBold.woff',
      weight: '600',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-Bold.woff',
      weight: '700',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-Black.woff',
      weight: '800',
      style: '',
    },
    {
      path: '../public/fonts/yekan-bakh/woff/YekanBakh-ExtraBlack.woff',
      weight: '900',
      style: '',
    },
  ],
  variable: '--yekan-bakh',
})

export { inter, yekanBakh }
