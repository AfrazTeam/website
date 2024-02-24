import { inter, yekanBakh } from '@/app/fonts';
import { HTMLAttributes, ReactNode } from 'react';

interface SpaseFromHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function SpaseFromHeader(props: SpaseFromHeaderProps) {
	const { children } = props;
	return <div className="mt-20">{children}</div>;
}

export default function ProjectOrder() {
	async function createProjectOrder(formData: FormData) {
		'use server';

		const rawFormData = {
			fullName: formData.get('full-name'),
			phone: formData.get('phone'),
			description: formData.get('description'),
		};
		console.log(rawFormData);
	}
	return (
		<SpaseFromHeader>
			<div className="container mx-auto flex flex-col items-center justify-center py-8">
				<h1>سفارش پروژه</h1>
				<form className="mt-10 w-full max-w-lg" action={createProjectOrder}>
					<div className="-mx-3 mb-6 flex flex-wrap">
						<div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
							<label
								className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
								htmlFor="grid-first-name"
							>
								نام و نام خانوادگی
							</label>
							<input
								className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								id="full-name"
								name="full-name"
								type="text"
								placeholder="احسان صفری"
							/>
							{/* <p className="text-red-500 text-xs italic">لطفا مشخصات ضروری را وارد کنید</p> */}
						</div>
						<div className="w-full px-3 md:w-1/2">
							<label
								className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
								htmlFor="grid-phone"
							>
								شماره موبایل
							</label>
							<input
								className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								id="phone"
								name="phone"
								type="tel"
								placeholder="09141110192"
							/>
						</div>
					</div>
					<div className="-mx-3 mb-6 flex flex-wrap">
						<div className="w-full px-3">
							<label
								className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-gray-700"
								htmlFor="grid-phone"
							>
								توضیحات پروژه
							</label>
							<span className="px-5 text-xs italic text-gray-600">
								پروژه خود را شرح دهید به زودی باشما تماس خواهیم گرفت
							</span>
							<textarea
								name="description"
								placeholder="پروژه طراحی سایت فروشگاهی نیاز داشتیم که ..."
								className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								id="description"
								cols={30}
								rows={10}
							></textarea>
						</div>
					</div>
					<div className="-mx-3 mb-6 flex flex-wrap">
						<div className="w-full px-3">
							<button
								className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-primary px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								type="submit"
							>
								ثبت درخواست
							</button>
						</div>
					</div>
				</form>
			</div>
		</SpaseFromHeader>
	);
}
