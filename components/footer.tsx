const Footer = () => {
	return (
		// <footer className="h-96">
		<footer>
			<div className="container w-full p-4 py-6 text-sm lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="https://afrazteam.ir/" className="mb-6 items-center">
							<span className="whitespace-nowrap text-2xl font-semibold text-primary">
								تیم برنامه نویسی افراز تیم
							</span>
						</a>
						<p className="mt-3 max-w-lg text-gray-700">
							تیم برنامه‌نویسی ما با ارائه‌ی خدمات کامل و تخصصی، ایده‌های
							خلاقانه و نوآورانه‌تان را به واقعیت تبدیل می‌کند. از طراحی
							نرم‌افزارهای سفارشی تا ایجاد وبسایت‌های پویا و اپلیکیشن‌های
							موبایل، همراه شما خواهیم بود. ما به جزئیات و نیازهای شما توجه
							داشته و در ارتباط مستمر با شما خواهیم بود تا به بهترین نتیجه
							برسیم.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
						<div>
							<h2 className="mb-6 text-sm font-semibold  text-gray-400">
								تماس با ما
							</h2>
							<ul className=" font-medium">
								<li className="mb-4">
									<a
										href="https://afrazteam.ir/"
										className="hover:text-primary hover:underline"
									>
										09145458392
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://afrazteam.ir/"
										className="hover:text-primary hover:underline"
									>
										آذربایجان غربی، مهاباد
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold  text-gray-400">
								پیوند های مهم
							</h2>
							<ul className=" font-medium">
								<li className="mb-4">
									<a
										href="https://afrazteam.ir/"
										className="hover:text-primary hover:underline"
									>
										قوانین و مقررات
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold  text-gray-400">
								افراز تیم
							</h2>
							<ul className="font-medium">
								<li className="mb-4">
									<a
										href="https://afrazteam.ir/"
										className="hover:text-primary hover:underline"
									>
										درباره ما
									</a>
								</li>
								<li>
									<a
										href="https://afrazteam.ir/"
										className="hover:text-primary hover:underline"
									>
										تماس با ما
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-400">
								خدمات ما
							</h2>
							<ul className="  font-medium">
								<li className="mb-4">
									<a href="#" className="hover:text-primary hover:underline ">
										طراحی سایت
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:text-primary hover:underline">
										تولید نرم‌افزار
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:text-primary hover:underline">
										برنامه نویسی موبایل
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:text-primary hover:underline">
										توسعه کسب و کار
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-primary sm:mx-auto  lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm sm:text-center">
						© 2023{' '}
						<a
							href="https://afrazteam.ir/"
							className="hover:text-primary hover:underline"
						>
							AfrazTeam™
						</a>
						. تمام حق و حقوق برای افراز تیم محفوظ میباشد.
					</span>
					<div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
						<a href="#" className="hover:text-primary">
							<svg
								className="h-4 w-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">GitHub account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
export { Footer };
