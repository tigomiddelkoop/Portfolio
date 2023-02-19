module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class' // @TODO make a system that lets the user automagically switch or let them choose to toggle it themselves
  theme: {
    extend: {
      screens: {
        "3xl": "1600px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
