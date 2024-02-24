const HeroBottom = ({ width, height }: { width: string; height: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={width}
			height={height}
			preserveAspectRatio="none"
			viewBox="0 0 1440 100"
		>
			<g mask='url("#SvgjsMask1076")' fill="none">
				<path
					d="M 0,19 C 144,28.6 432,69.4 720,67 C 1008,64.6 1296,19 1440,7L1440 100L0 100z"
					fill="var(--background)"
				></path>
			</g>
			<defs>
				<mask id="SvgjsMask1076">
					<rect width="1440" height="100" fill="#ffffff"></rect>
				</mask>
			</defs>
		</svg>
	);
};

export { HeroBottom };
