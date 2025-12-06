import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: '#00F0FF',
          magenta: '#FF00FF',
          lime: '#39FF14',
          yellow: '#FFE800',
          dark: '#0D1117',
        },
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        glitch: 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 2s linear infinite',
        'matrix-fall': 'matrix-fall 10s linear infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-glow': {
          from: { textShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF' },
          to: { textShadow: '0 0 20px #00F0FF, 0 0 30px #FF00FF, 0 0 40px #FF00FF' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
