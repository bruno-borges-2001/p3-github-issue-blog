/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        base: 10,
      },
      fontSize: {
        xs: ['0.75rem', '1.6'],
        sm: ['0.875rem', '1.6'],
        base: ['1rem', '1.6'],
        lg: ['1.125rem', '1.6'],
        xl: ['1.25rem', '1.6'],
        '2xl': ['1.5rem', '1.6'],
      },
      lineHeight: {
        tight: '1.3',
        DEFAULT: '1.6',
      },
      colors: {
        blue: {
          DEFAULT: '#3294F8',
        },
        base: {
          title: '#E7EDF4',
          subtitle: '#C4D4E3',
          text: '#AFC2D4',
          span: '#7B96B2',
          label: '#3A536B',
          border: '#1C2F41',
          post: '#112131',
          profile: '#0B1B2B',
          background: '#071422',
          input: '#040F1A',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
