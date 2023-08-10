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
            <Image
              className="animate__animated animate__flash"
              src="svgs/Vector.svg"
              width={80}
              height={80}
              alt="Vector"
            />
            <div>
              <span className="hero-title">{dataTextGeneral.group}</span>
            </div>
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
