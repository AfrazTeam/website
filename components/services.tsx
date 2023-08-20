import { dataTextGeneral } from '@/data/text'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className="services-main">
      <div className="services">
        <div className="services-top">
          <div className="lg:w-1/2 px-7">
            <div className="services-text">
              <Image src="svgs/Hope.svg" width={30} height={30} alt="hope" />
              <p className="pt-5 pr-3 text-primary">
                {dataTextGeneral.services}
              </p>
            </div>
            <p className="services-title">{dataTextGeneral.titleServices}</p>
          </div>
          <div className="lg:w-1/2 services-top-item flex justify-end">
            <Image src="/images/team2.png" width={500} height={100} alt="ss" />
          </div>
        </div>
        <div className="services-bottom">
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg6.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">{dataTextGeneral.appMobile}</span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.appMobileTitle}
            </p>
          </div>
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg2.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">
                {dataTextGeneral.telegramBot}
              </span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.telegranBotTitle}
            </p>
          </div>
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg1.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">{dataTextGeneral.webDesign}</span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.webDesignTitle}
            </p>
          </div>
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg3.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">
                {dataTextGeneral.teachingProgramming}
              </span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.teachingProgrammingTitle}
            </p>
          </div>
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg4.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">
                {dataTextGeneral.businessDevelopment}
              </span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.businessDevelopmentTitle}
            </p>
          </div>
          <div className="services-bottom-item">
            <div className="services-bottom-name">
              <Image src="svgs/svg5.svg" width={40} height={30} alt="svg1" />
              <span className="services-span">
                {dataTextGeneral.professionalSupport}
              </span>
            </div>
            <p className="services-bottom-title">
              {dataTextGeneral.professionalSupportTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
