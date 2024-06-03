/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opacityChange: {
          '0%': { opacity: '0.7' },
          '25%': { opacity: '0.6' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0.4' },
        },
      },
      animation: {
        'opacity-sequence': 'opacityChange 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
