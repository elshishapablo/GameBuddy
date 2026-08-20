/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#060608',
        'dark-surface': '#0c0c10',
        'dark-card': '#121218',
        'dark-border': '#23232c',
        'light-text': '#f4f4f6',
        'medium-text': '#8a8a96',
        'accent': '#ffffff',
        'accent-hover': '#e8e8ec',
        'glow': '#b8c0d0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.45)',
        'glass-lg': '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 16px 48px rgba(0,0,0,0.5)',
        glow: '0 0 40px rgba(184, 192, 208, 0.12)',
        'glow-sm': '0 0 20px rgba(255,255,255,0.08)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        'orbit-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.35' },
          '50%': { transform: 'scale(1.08)', opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
        'orbit-glow': 'orbit-glow 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
