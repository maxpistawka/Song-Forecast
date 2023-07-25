/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        permMarker: ["Permanent Marker", "cursive"],
        codeText: ['Source Code Pro', "monospace"],
      },
    },
  },
  plugins: [],
}