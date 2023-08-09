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
        'text-color': 'rgba(51,65,95,1)',
        'background-blue': 'rgba(57,112,253)',
        'page-background': '#fafbfc',
      },
    },
  },
  plugins: [],
}
