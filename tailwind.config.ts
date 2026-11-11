import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.ts', './lib/**/*.ts'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        coal: '#111111',
        paper: '#F3E6C8',
        pink: { DEFAULT: '#EF4F7A', deep: '#9E2448' },
        teal: { DEFAULT: '#26B7AA', deep: '#0F6B63' },
        mustard: { DEFAULT: '#F6BD33', deep: '#9C6F06' },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        wobble: {
          '0%, 100%': { transform: 'rotate(-6deg) scale(1)' },
          '50%': { transform: 'rotate(8deg) scale(1.08)' },
        },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
        wobble: 'wobble 6s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
