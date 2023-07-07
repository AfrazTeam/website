import React from 'react'
import { text_hero_data } from '@/data/text'

const Hero = () => {
     return (
          <div>
               <div className='hero-main'>
                    <div className='hero-text'>
                         <h1 className='hero-h1'>{text_hero_data.group}</h1>
                         <p className='hero-p'>{text_hero_data.title}</p>
                    </div>
                    <svg className='hero-svg' xmlns="http://www.w3.org/2000/svg" width="1000" height="500" viewBox="0 0 899 656" fill="none">
                         <path d="M0 41C0 18.3563 18.3563 0 41 0H537.909C552.781 0 566.487 8.05319 573.725 21.0446L893.538 595.045C908.764 622.373 889.006 656 857.722 656H41C18.3563 656 0 637.644 0 615V41Z" fill="url(#paint0_linear_42_262)" />
                         <defs>
                              <linearGradient id="paint0_linear_42_262" x1="8.406e-06" y1="17.5" x2="928" y2="713.5" gradientUnits="userSpaceOnUse">
                                   <stop stop-color="#4E1EAE" />
                                   <stop offset="1" stop-color="#51006D" />
                              </linearGradient>
                         </defs>
                    </svg>
               </div>
               <div dir='ltr'>
                    <img className='hero-image' src="images/image 1.png" width={500} alt="" />
               </div>
          </div>
     )
}

export default Hero