import { inter, yekanBakh } from '@/app/fonts'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Teammates from '@/components/teammates'
import NumberProjects from '@/components/numberProjects'
import Services from '@/components/services'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NumberProjects />
      <Services />
      <Teammates />
    </div>
  )
}
