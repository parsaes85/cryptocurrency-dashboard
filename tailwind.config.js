/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "poppins"
      },
      backgroundColor: {
        "bg-1": "#202020",
        "bg-2": "#030E1E"
      }
    },
  },
  plugins: [],
};
