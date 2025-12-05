/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // yellow-400
        "background-light": "#f3f4f6", // gray-100
        "background-dark": "#111827", // gray-900
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.5rem",
      },
    },
  },
  plugins: [],
}
