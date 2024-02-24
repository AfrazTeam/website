import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dataTextGeneral } from '@/data/text'
import CounterProjects from '@/components/counterProjects'
import { HeroBottom } from '@/components/svgs'

const HeroButtuns = () => {
  return (
    <div className="md:justify-start sm:flex-row flex text-sm justify-center flex-col items-center">
      <button className="lg:w-60 sm:ml-8 w-full h-16 rounded-md text-white mt-5 text-lg font-semibold bg-primary text-foreground text-white baf relative">
        <Link href="https://t.me/SafariDeveloper/" className='text-white '>
          {dataTextGeneral.counseling}
        </Link>
      </button>
      <button className="lg:w-40 border-2 border-primary w-full h-16 rounded-md text-primary mt-5 font-semibold text-lg">
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
        <span className="text-base mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 rounded-md px-2 my-5">با ما کسب و کار خود را رشد دهید</span>
      </div>
      <p className="lg:text-start font-extrabold text-4xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">{dataTextGeneral.group}</p>
      <p className="font-normal text-xl leading-8 rounded-md text-primary-foreground my-5 text-justify animate__animated animate__flash">
        {dataTextGeneral.title}
      </p>
    </>
  )
}
const HeroImage = () => {
  return (
    <div className="sm:flex sm:justify-center lg:justify-end lg:w-1/2 m-10 items-center animate__animated animate__zoomIn">
      <Image
        className=""
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
    <div className="flex flex-col justify-center overflow-auto">
      <div className="lg:flex-row lg:py-8 lg:items-center md:container md:mx-auto md:px-28 flex flex-col-reverse w-full px-5 mt-16">
        <div className="lg:w-1/2 lg:h-[85%] flex flex-col justify-between text-center">
          <HeroDescriptions />
          <CounterProjects />
          <HeroButtuns />
        </div>
        <div className='relative'>
          <div className="absolute w-782 h-701 rounded-full bg-gradient-to-br from-purple-500 to-purple-900 filter blur-3xl"></div>
      </div>
        <HeroImage />
      </div>
      <HeroBottom width="100%" height="100" />
    </div>
  )
}

export default Hero
