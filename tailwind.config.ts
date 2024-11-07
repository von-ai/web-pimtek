const config = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src.{js,ts,jsx,tsx}',
  ],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //White Mode
        primary: {
          blue: '#283C55',
          white: '#FEFBEA',
        },
        secondary: {
          yellow: '#FCCC12',
          krem: '#D4C4A8',
        },

        //Dark Mode
        DarkMode: {
          DarkBlue: '#0F172A',
          white: '#FFFFFF',
        },

        background: {
          primary: '#283C55',
          secondary: '#FEFBEA',
        },
      },
      fontSize: {
        'text-s': [
          '12px',
          {
            lineHeight: '16px',
          },
        ],
        'text-m': [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
        'text-l': [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        'heading-s': [
          '20px',
          {
            lineHeight: '28px',
          },
        ],
        'heading-m': [
          '26px',
          {
            lineHeight: '36px',
          },
        ],
        'heading-l': [
          '36px',
          {
            lineHeight: '44px',
          },
        ],

        'heading-xl': [
          '44px',
          {
            lineHeight: '60px',
          },
        ],
        'heading-2xl': [
          '60px',
          {
            lineHeight: '72px',
          },
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
