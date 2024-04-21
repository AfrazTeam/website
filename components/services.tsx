import { dataTextGeneral } from '@/data/text';
import Image from 'next/image';

const Services = () => {
	return (
		<div
			id="services"
			className="container mx-auto flex w-full flex-col-reverse px-5"
		>
			<div className="my-28 flex flex-col">
				<div className="my-10 flex flex-col-reverse items-center justify-between rounded-lg bg-white py-10 shadow lg:flex-row">
					<div className="px-7 lg:w-1/2">
						<div className="flex items-center text-2xl font-extrabold text-primary-foreground">
							<Image src="svgs/Hope.svg" width={30} height={30} alt="hope" />
							<p className="pr-3 pt-5 text-primary">
								{dataTextGeneral.services}
							</p>
						</div>
						<p className="mt-5 leading-8 text-gray-600">
							{dataTextGeneral.titleServices}
						</p>
					</div>
					<div className="relative flex justify-end lg:bottom-10 lg:w-1/2">
						<Image src="/images/team2.png" width={500} height={100} alt="ss" />
					</div>
				</div>
				<div className="mb-16 grid grid-cols-1 gap-8 text-[#4a4b4b] sm:grid-cols-2 ">
					<div className="services-bottom-item">
						<div className="services-bottom-name">
							<Image src="svgs/svg6.svg" width={40} height={30} alt="svg1" />
							<span className="services-span">{dataTextGeneral.appMobile}</span>
						</div>
						<hr className="border-1 w-[90%] place-self-center" />
						<p className="services-bottom-title">
							{dataTextGeneral.appMobileTitle}
						</p>
					</div>
					{/* <div className="services-bottom-item">
						<div className="services-bottom-name">
							<Image src="svgs/svg2.svg" width={40} height={30} alt="svg1" />
							<span className="services-span">
								{dataTextGeneral.telegramBot}
							</span>
						</div>
						<p className="services-bottom-title">
							{dataTextGeneral.telegranBotTitle}
						</p>
					</div> */}
					<div className="services-bottom-item">
						<div className="services-bottom-name">
							<Image src="svgs/svg1.svg" width={40} height={30} alt="svg1" />
							<span className="services-span">{dataTextGeneral.webDesign}</span>
						</div>
						<hr className="border-1 w-[90%] place-self-center" />
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
						<hr className="border-1 w-[90%] place-self-center" />
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
						<hr className="border-1 w-[90%] place-self-center" />
						<p className="services-bottom-title">
							{dataTextGeneral.businessDevelopmentTitle}
						</p>
					</div>
					{/* <div className="services-bottom-item">
						<div className="services-bottom-name">
							<Image src="svgs/svg5.svg" width={40} height={30} alt="svg1" />
							<span className="services-span">
								{dataTextGeneral.professionalSupport}
							</span>
						</div>
						<p className="services-bottom-title">
							{dataTextGeneral.professionalSupportTitle}
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Services;
