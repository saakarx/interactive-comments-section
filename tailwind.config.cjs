/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        red: {
          soft: 'hsl(358, 79%, 66%)',
          pale: 'hsl(357, 100%, 86%)'
        },
        blue: {
          moderate: 'hsl(238, 40%, 52%)',
          lightGrayish: 'hsl(239, 57%, 85%)',
          dark: 'hsl(212, 24%, 26%)',
          grayish: 'hsl(211, 10%, 45%)'
        },
        gray: {
          light: 'hsl(223, 19%, 93%)',
          veryLight: 'hsl(228, 33%, 97%)'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        'comment-desktop': 'auto 1fr auto',
        'comment-mobile': 'auto 1fr',
        'comment-create-mobile': '1fr auto',
        'comment-create-desktop': '40px 1fr auto'
      },
      gridTemplateRows: {
        'comment-desktop': 'auto 1fr',
        'comment-mobile': 'auto 1fr auto',
        'comment-create-mobile': '1fr auto',
        'comment-create-desktop': 'auto'
      },
      maxWidth: {
        '45.75rem': '45.75rem'
      },
      screens: {
        md: '700px'
      }
    }
  },
  plugins: []
};
