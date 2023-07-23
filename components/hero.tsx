import React from 'react'
import { dataTextGeneral } from '@/data/text'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-box">
        <Image
          src='svgs/Vector.svg'
          width={100}
          height={100}
          alt='Vector' />
        <div>
          <span className='hero-name'>{dataTextGeneral.afrazteam}</span>
          <span className="hero-title">{dataTextGeneral.group}</span>
        </div>
        <p className="hero-descrption">{dataTextGeneral.title}</p>
        <div className='hero-button'>
          <button className='hero-counseling'>
            <Link href="/">{dataTextGeneral.counseling}</Link>
          </button>
          <button className='hero-services'>
            <Link href="/">{dataTextGeneral.services}</Link>
          </button>
        </div>
      </div>
      <div className="hero-svg">
        <Image
          src="/svgs/team1.svg"
          width={500}
          height={500}
          alt="afraz team"
        />
      </div>
    </div>
  )
}

export default Hero
