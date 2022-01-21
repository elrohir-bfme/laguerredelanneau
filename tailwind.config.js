const colors = require('tailwindcss/colors');

module.exports = {
  // purge: {
  //   mode: "layers",
  //   enabled: true,  
  //   content: [
  //     "./components/**/*.vue",
  //     "./layouts/**/*.vue",
  //     "./pages/**/*.vue",
  //     "./plugins/**/*.vue",
  //     "./nuxt.config.js",
  //   ],
  // },
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
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
  variants: {
    extends: {},
  }
};