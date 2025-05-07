// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316', // Warna utama (orange-500)
        secondary: '#fef3c7', // Warna latar section 1
        accent: '#fde68a', // Warna untuk highlight (background promo box)
        textMain: '#d97706', // Warna teks utama
        textSub: '#a855f7', // Warna teks tambahan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // Removed pattern.svg reference
      },
    },
  },
  plugins: [],
}
