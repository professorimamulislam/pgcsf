/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#050505",
          blue: "#00f2ff",
          darkBlue: "#0066ff",
          neonBlue: "#00e5ff",
          silver: "#c0c0c0",
          neonPink: "#ff00ff",
        },
      },
      backgroundImage: {
        'grid-pattern': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        'circuit-pattern': "radial-gradient(circle, rgba(0, 242, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f2ff, 0 0 10px #00f2ff' },
          '100%': { boxShadow: '0 0 20px #00f2ff, 0 0 40px #00f2ff' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
