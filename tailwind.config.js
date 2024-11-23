/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-slate":"#BFC8E6",
        "custom-sky":"#f2f5f5"
      }
    },
  },
  plugins: [],
}

