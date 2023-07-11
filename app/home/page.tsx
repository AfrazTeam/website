import { inter, yekanBakh } from '@/app/fonts'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Teammates from '@/components/teammates'

export default function Home() {
  return (
    <div className="container mx-auto bg-page-background ">
      <Header />
      <Hero />
      <Teammates />
    </div>
  )
}
