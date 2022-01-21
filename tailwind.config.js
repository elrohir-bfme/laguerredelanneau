const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
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
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
  variants: {
    extends: {},
  }
};