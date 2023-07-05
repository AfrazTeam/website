/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'yekan-bakh': 'var(--yekan-bakh)',
        inter: 'var(--inter-google)',
      },
      colors: {
        'Text-color': 'rgba(51,65,95,1)',
        'Page-background': 'rgba(237,241,244,1)',
      },
    },
  },
  plugins: [],
}
