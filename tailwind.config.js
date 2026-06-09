/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white": "#fff",
        primary: {
          DEFAULT: "#0461c3",
          light: "#1a8cd5",
        },
        dark: {
          DEFAULT: "#12171c",
          darker: "#060809",
          light: "#181f25",
        },
        gray: {
          100: "#eee",
          200: "#64676f",
          300: "#4d565f",
          400: "#4d575f",
          500: "#e2e5e9",
          600: "#1a2530",
        },
        accent: {
          green: "#0bc111",
          purple: "#e4e0f7",
        },
      },
      fontFamily: {
        proxima: ["Proxima Nova", "Arial", "sans-serif"],
        inter: ["Inter", "Arial", "sans-serif"],
        urbanist: ["Urbanist", "Arial", "sans-serif"],
        onest: ["Onest", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.125rem" }],
        sm: ["1rem", { lineHeight: "1.25rem" }],
        base: ["1.125rem", { lineHeight: "1.75rem" }],
        lg: ["1.25rem", { lineHeight: "1.75rem" }],
        xl: ["1.375rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "1.875rem" }],
        "3xl": ["2.25rem", { lineHeight: "3rem" }],
        "4xl": ["3.5rem", { lineHeight: "4.25rem" }],
        "5xl": ["3.875rem", { lineHeight: "4.625rem" }],
        "6xl": ["4.125rem", { lineHeight: "4.875rem" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        110: "27.5rem",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "40px",
      },
      maxWidth: {
        container: "90rem",
        section: "76.25rem",
      },
    },
    screens: {
      mq1350: { max: "1350px" },
      mq1125: { max: "1125px" },
      mq800: { max: "800px" },
      mq450: { max: "450px" },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
