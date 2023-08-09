import { inter, yekanBakh } from '@/app/fonts'

import Hero from '@/components/hero'
import Teammates from '@/components/teammates'
import NumberProjects from '@/components/numberProjects'
import Services from '@/components/services'

export default function Home() {
  return (
    <div>
      <Hero />
      <NumberProjects />
      <Services />
      <Teammates />
    </div>
  )
}
