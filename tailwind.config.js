const colors = require('./node_modules/tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["albertus"],
      serif: ["albertus"],
      mono: ["albertus"],
      display: ["albertus"],
      body: ["albertus"]
    },
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};