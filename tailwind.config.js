const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      lato: ['Lato'],
      lora: ['Lora'],
    },
    container: (theme) => ({
      // To center containers by default
      // center: true,

      // To add horizontal padding by default
      padding: theme('spacing.2'),
    }),
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          900: '#212121',
          800: '#424242',
          700: '#616161',
          600: '#757575',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F5F5F5',
        },
        red: {
          ...colors.red,
          600: '#E53935',
        },
        green: {
          ...colors.green,
          800: '#008444',
          700: '#069550',
          600: '#16A75C',
        },
        blue: {
          ...colors.blue,
          800: '#1565C0',
          50: '#E3F2FD',
        },
        biruabu: {
          800: '#022B55',
        },
      },
      fontSize: {
        130: '8.125rem',
        75: '4.688rem',
        46: '2.875rem',
        32: '2rem',
        34: '2.125rem',
        37: '2.313rem',
        36: '2.25rem',
        21: '1.313rem',
        18: '1.125rem',
        15: '0.938rem',
        14: '0.875rem',
        13: '0.813rem',
        12: '0.75rem',
      },
      lineHeight: {
        79: '4.938rem',
        52: '3.25rem',
        32: '2.125rem',
        26: '1.625rem',
      },
      boxShadow: {
        lg: '0px 6px 20px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: (theme) => ({
        heading: "url('/images/bg-heading.svg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
