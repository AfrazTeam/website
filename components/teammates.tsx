import React from 'react'
import Image from 'next/image'
import { TeammatesData } from '@/data/users'

const Teammates = () => {
  return (
    <div>
      <p className='teammates-p'>" هم تیمی ها</p>
      <div className='teammates-main'>
        {TeammatesData.map((item) => (
          <div className='teammates-svg'>
            <Image src="/svgs/teammates.svg" height={750} width={380} alt='hhh' />
            <div className='teammates-image-user'>
              <Image className='teammates-image' style={{ width: '90px', objectFit: "cover", height: "90px" }} 
              src={item.image} width={90} height={90} alt='imageuser' />
            </div>
            <span className='teammates-name'>
              {item.name}
            </span>
            <span className='teammates-skill'>
              {item.skills}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teammates
