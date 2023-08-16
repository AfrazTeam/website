import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { dataTextGeneral } from '@/data/text'
import CounterProjects from './counterProjects'

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="hero-box">
          <div className="flex items-center">
            <Image
              className="animate__animated animate__flash"
              src="svgs/Vector.svg"
              width={30}
              height={30}
              alt="Vector"
            />
            <span className="hero-top-title">
              با ما کسب و کار خود را رشد دهید
            </span>
          </div>
          <p className="hero-title">{dataTextGeneral.group}</p>
          <p className="hero-descrption animate__animated animate__flash">
            {dataTextGeneral.title}
          </p>
          <CounterProjects />
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
            className="drop-shadow-[0_30px_30px_rgba(97,79,30,0.90)]"
            src="/svgs/standup-meeting-not-css.svg"
            width={620}
            height={500}
            alt="afraz team"
          />
        </div>
      </div>
      <div
        style={{
          overflow: 'hidden',
          bottom: 0,
          width: '-webkit-fill-available',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <g mask='url("#SvgjsMask1076")' fill="none">
            <path
              d="M 0,19 C 144,28.6 432,69.4 720,67 C 1008,64.6 1296,19 1440,7L1440 100L0 100z"
              fill="var(--background)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1076">
              <rect width="1440" height="100" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Hero
