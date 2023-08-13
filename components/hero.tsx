import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { dataTextGeneral } from '@/data/text'
import NumberProjects from './numberProjects'

const Hero = () => {
  return (
    <div className="hero-main">
      <div className=" h-[90%] items-center flex flex-col justify-around max-h-[60rem]">
        <div className="hero">
          <div className="hero-box">
            <div className="flex items-center pt-10 ">
              <Image
                className="animate__animated animate__flash"
                src="svgs/Vector.svg"
                width={30}
                height={30}
                alt="Vector"
              />
              <span
                className="text-base mx-2 bg-gradient-to-tr from-cyan-600 to-cyan-700 rounded-md 
               px-2 py-1 text-transparent bg-clip-text"
              >
                با ما کسب و کار خود را رشد دهید
              </span>
            </div>
            <span className="hero-title">{dataTextGeneral.group}</span>

            <p className="hero-descrption animate__animated animate__flash">
              {dataTextGeneral.title}
            </p>
            <div className="hero-button">
              <button className="hero-counseling">
                <Link href="/">{dataTextGeneral.counseling}</Link>
              </button>
              <button className="hero-services">
                <Link href="/">{dataTextGeneral.ourservices}</Link>
              </button>
            </div>
          </div>
          <div className="hero-svg animate__animated animate__zoomIn">
            <Image
              className="rotate-scale-up"
              src="/svgs/team1.svg"
              width={500}
              height={500}
              alt="afraz team"
            />
          </div>
        </div>
        <NumberProjects />
      </div>
    </div>
  )
}

export default Hero
