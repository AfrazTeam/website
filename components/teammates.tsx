import React from 'react'
import Image from 'next/image'
import { dataTextGeneral } from '@/data/text'
import { dataTeammates } from '@/data/users'

const Teammates = () => {
  return (
    <div>
      <p className='teammates-p'>{dataTextGeneral.teammates}</p>
      <div className='teammates-main'>
        {dataTeammates.map((item) => (
          <div className='teammates-svg'>
            <Image src="/svgs/teammates.svg" height={750} width={380} alt='hhh' />
            <div className='teammates-image-user'>
              <Image className='teammates-image' style={{ width: '80px', objectFit: "cover", height: "80px" }}
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
