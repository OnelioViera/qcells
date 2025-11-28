/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        heading: ['var(--font-archivo)', 'Archivo', 'sans-serif'],
      },
      colors: {
        'lindsay-navy': {
          DEFAULT: '#2c3e6f',
          50: '#f0f2f7',
          100: '#dce1ed',
          200: '#bcc6dd',
          300: '#8fa1c7',
          400: '#5d76ab',
          500: '#3f5a95',
          600: '#2c3e6f',
          700: '#283761',
          800: '#263052',
          900: '#242b46',
        },
        'lindsay-red': {
          DEFAULT: '#d63649',
          50: '#fef2f3',
          100: '#fde3e6',
          200: '#fbccd2',
          300: '#f7a5b0',
          400: '#f17489',
          500: '#e64765',
          600: '#d63649',
          700: '#b51e3a',
          800: '#971c36',
          900: '#811c33',
        },
      },
    },
  },
  plugins: [],
}

