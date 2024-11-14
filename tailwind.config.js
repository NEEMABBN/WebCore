/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#17E1FF",
        Secoundray: "#2E2F36",
        Based: "#202026",
      },
    },
  },
  plugins: [],
}

