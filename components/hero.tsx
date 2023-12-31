import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dataTextGeneral } from '@/data/text'
import CounterProjects from '@/components/counterProjects'
import { HeroBottom } from '@/components/svgs'

const HeroButtuns = () => {
  return (
    <div className="hero-button">
      <button className="hero-counseling">
        <Link href="https://t.me/SafariDeveloper/">
          {dataTextGeneral.counseling}
        </Link>
      </button>
      <button className="hero-services">
        <Link href="/">{dataTextGeneral.ourservices}</Link>
      </button>
    </div>
  )
}
const HeroDescriptions = () => {
  return (
    <>
      <div className="flex items-center">
        <Image
          className="animate__animated animate__flash"
          src="svgs/Vector.svg"
          width={30}
          height={30}
          alt="Vector"
        />
        <span className="hero-top-title">با ما کسب و کار خود را رشد دهید</span>
      </div>
      <p className="hero-title">{dataTextGeneral.group}</p>
      <p className="hero-descrption animate__animated animate__flash">
        {dataTextGeneral.title}
      </p>
    </>
  )
}
const HeroImage = () => {
  return (
    <div className="hero-svg animate__animated animate__zoomIn">
      <Image
        className="drop-shadow-[0_30px_30px_rgba(97,79,30,0.90)]"
        src="/svgs/standup-meeting-not-css.svg"
        width={620}
        height={500}
        alt="afraz team"
      />
    </div>
  )
}
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="hero-box">
          <HeroDescriptions />
          <CounterProjects />
          <HeroButtuns />
        </div>
        <HeroImage />
      </div>
      <HeroBottom width="100%" height="100" />
    </div>
  )
}

export default Hero
