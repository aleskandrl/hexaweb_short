/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hexa: {
          bg: '#05020a',
          card: '#0f0a1e',
          purple: '#8c52ff',
          cyan: '#98f3ff',
          text: '#e0e0e0',
          dim: '#6b5e7d'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'monospace'],
        display: ['Michroma', 'sans-serif'],
        'mono-plex': ['"IBM Plex Mono"', 'monospace'],
        'michroma': ['Michroma', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(4%, -4%) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
