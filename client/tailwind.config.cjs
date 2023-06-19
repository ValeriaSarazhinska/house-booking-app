/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            primary: '#FF4500'
        }
    },
  },
  plugins: ['./src/**/*.{js,jsx,ts,tsx}'],
}

