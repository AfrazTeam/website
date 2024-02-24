import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { dataTextGeneral } from '@/data/text';
import CounterProjects from '@/components/counterProjects';
import { HeroBottom } from '@/components/svgs';

const HeroButtuns = () => {
	return (
		<div className="flex flex-col items-center justify-center text-sm sm:flex-row md:justify-start">
			<button className="baf relative mt-5 h-16 w-full rounded-md bg-primary text-lg font-semibold text-foreground text-white text-white sm:ml-8 lg:w-60">
				<Link href="https://t.me/SafariDeveloper/" className="text-white ">
					{dataTextGeneral.counseling}
				</Link>
			</button>
			<button className="mt-5 h-16 w-full rounded-md border-2 border-primary text-lg font-semibold text-primary lg:w-40">
				<Link href="/">{dataTextGeneral.ourservices}</Link>
			</button>
		</div>
	);
};
const HeroDescriptions = () => {
	return (
		<>
			<div className="flex items-center">
				<Image
					className="animate__animated animate__flash"
					src="svgs/Vector.svg"
					width={30}
					height={30}
					alt="Vector"
				/>
				<span className="mx-2 my-5 rounded-md bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text px-2 text-base text-transparent">
					با ما کسب و کار خود را رشد دهید
				</span>
			</div>
			<p className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-4xl font-extrabold leading-normal text-transparent lg:text-start">
				{dataTextGeneral.group}
			</p>
			<p className="animate__animated animate__flash my-5 rounded-md text-justify text-xl font-normal leading-8 text-primary-foreground">
				{dataTextGeneral.title}
			</p>
		</>
	);
};
const HeroImage = () => {
	return (
		<div className="animate__animated animate__zoomIn m-10 items-center sm:flex sm:justify-center lg:w-1/2 lg:justify-end">
			<Image
				className=""
				src="/svgs/standup-meeting-not-css.svg"
				width={620}
				height={500}
				alt="afraz team"
			/>
		</div>
	);
};
const Hero = () => {
	return (
		<div className="flex flex-col justify-center overflow-auto">
			<div className="mt-16 flex w-full flex-col-reverse px-5 md:container md:mx-auto md:px-28 lg:flex-row lg:items-center lg:py-8">
				<div className="flex flex-col justify-between text-center lg:h-[85%] lg:w-1/2">
					<HeroDescriptions />
					<CounterProjects />
					<HeroButtuns />
				</div>
				<div className="relative">
					<div className="w-782 h-701 absolute rounded-full bg-gradient-to-br from-purple-500 to-purple-900 blur-3xl filter"></div>
				</div>
				<HeroImage />
			</div>
			<HeroBottom width="100%" height="100" />
		</div>
	);
};

export default Hero;
