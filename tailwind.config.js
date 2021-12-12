module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      translate: ['active', 'group-hover','responsive'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
