/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white": "#fff",
      },
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
