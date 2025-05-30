/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF8FF',
          100: '#D1EDFF',
          200: '#A8DAFF',
          300: '#7CC2FF',
          400: '#56A9FF',
          500: '#0077B6',
          600: '#0060A0',
          700: '#004D87',
          800: '#003A6D',
          900: '#002856',
        },
        secondary: {
          50: '#E6FBFF',
          100: '#CCF7FF',
          200: '#99EFFF',
          300: '#66E7FF',
          400: '#33DFFF',
          500: '#00B4D8',
          600: '#0090AD',
          700: '#006C82',
          800: '#004857',
          900: '#00242C',
        },
        accent: {
          50: '#F0FDFF',
          100: '#E0FAFF',
          200: '#C2F6FF',
          300: '#90E0EF',
          400: '#48CAE4',
          500: '#00A8CC',
          600: '#0086A3',
          700: '#00657A',
          800: '#004351',
          900: '#002229',
        },
      },
      animation: {
        'ripple': 'ripple 2s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 10s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
          '100%': { transform: 'scale(0.95)', opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(5px) translateY(-5px)' },
          '50%': { transform: 'translateX(0) translateY(0)' },
          '75%': { transform: 'translateX(-5px) translateY(5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}