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
          bg: '#000000',
          surface: '#141416',
          ink: '#f4f4f5',
          ink2: '#9c9da3',
          ink3: '#6e6f76',
          accent: 'var(--accent)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Michroma', 'sans-serif'],
        'mono-plex': ['"IBM Plex Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'swift': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      transitionDuration: {
        '800': '800ms',
        '1100': '1100ms',
      },
    },
  },
  plugins: [],
}
