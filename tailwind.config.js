/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e55437",

          "secondary": "#7F00FF",

          "accent": "#9971ce",

          "neutral": "#1d1820",

          "base-100": "#eae6f0",

          "info": "#3b9ded",

          "success": "#199f84",

          "warning": "#9d7510",

          "error": "#f37292",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

