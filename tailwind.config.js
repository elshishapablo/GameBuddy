/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A',
        'dark-surface': '#121212',
        'dark-card': '#1A1A1A',
        'dark-border': '#2A2A2A',
        'light-text': '#F5F5F5',
        'medium-text': '#B0B0B0',
        'accent': '#FFFFFF',
        'accent-hover': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

