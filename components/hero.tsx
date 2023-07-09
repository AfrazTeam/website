import React from 'react'
import { text_hero_data } from '@/data/text'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-title">{text_hero_data.group}</div>
        <p className="hero-descrption">{text_hero_data.title}</p>
      </div>
      <div className="hero-svg-main">
        <div className="hero-svg">
          <Image
            src="/svgs/hero-bg.svg"
            width={800}
            height={500}
            alt="afraz team"
          />
        </div>
        <div className="hero-image">
          <Image
            src="/images/image-1.png"
            width={700}
            height={500}
            alt="afraz team"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
