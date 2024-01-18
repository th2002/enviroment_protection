/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00b894',
        primary_light: '#55efc4',
        secondary: '#0984e3',
        text_defautl: '#1d1f2e'
      },
      fontFamily: {
        roboto: ['Roboto', ' sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    }
  },
  plugins: []
};

