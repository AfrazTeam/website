import { dataTextGeneral } from '@/data/text'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className="flex flex-col-reverse w-full px-5 md:container md:mx-auto md:px-28">
      <div className="my-28 flex flex-col">
        <div className="lg:flex-row flex flex-col-reverse justify-between items-center bg-white py-10 my-10 rounded-lg">
          <div className="lg:w-1/2 px-7">
            <div className="flex items-center font-extrabold text-2xl text-primary-foreground">
              <Image src="svgs/Hope.svg" width={30} height={30} alt="hope" />
              <p className="pt-5 pr-3 text-primary">
                {dataTextGeneral.services}
              </p>
            </div>
            <p className="text-gray-600 mt-5 leading-8">{dataTextGeneral.titleServices}</p>
          </div>
          <div className="lg:w-1/2 lg:bottom-10 relative flex justify-end">
            <Image src="/images/team2.png" width={500} height={100} alt="ss" />
          </div>
        </div>
        <div className="lg:grid-cols-3 md:grid-cols-2 text-[#4a4b4b] grid grid-cols-1 place-items-center gap-8 mb-16">
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
