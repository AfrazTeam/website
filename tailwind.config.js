/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	corePlugins: {
		container: false,
	},
	theme: {
		container: {
			center: true,
			padding: '7rem',
		},
		extend: {
			fontFamily: {
				'yekan-bakh': 'var(--yekan-bakh)',
				inter: 'var(--inter-google)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				'primary-foreground': 'var(--primary-foreground)',
				'text-color': 'var(--text-color)',
			},
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					marginLeft: 'auto',
					marginRight: 'auto',
					padding: '0 1.5rem 0',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
						padding: '0 3rem 0',
					},
					'@screen lg': {
						maxWidth: '1280px',
						padding: '0 7rem 0',
					},
					'@screen xl': {
						maxWidth: '1400px',
					},
				},
			})
		},
	],
}
