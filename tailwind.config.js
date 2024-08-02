/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: "Great Vibes, cursive",
        poppins: "Poppins, sans-serif"
      },
      backgroundColor:{
        primary: "#ffc3c4",
        secondary: "#fdab96",
        focus: "#abdddb",
        remember: "#628280"
      },
      backgroundImage: {
        card_notes: "url(src/assets/card-notes.png)"
      }
    },
  },
  plugins: [],
};