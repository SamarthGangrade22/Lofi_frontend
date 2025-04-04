/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This tells Tailwind where to look for class names
  ],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      backgroundColor: {
        "app-black": "#121212",
      },
    },
  },
  plugins: [],
};
