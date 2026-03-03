/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#0f0f0f',
        'bg-panel': '#121212',
        'bg-card': '#181818',
        'amber': {
          DEFAULT: '#E8A000',
          dim: '#a87200',
          bright: '#FFB800',
        },
        'orange-hot': '#FF6B35',
        'phosphor': {
          DEFAULT: '#7ECF7E',
          bright: '#AAFFAA',
          dim: '#3a7a3a',
          dark: '#1a3a1a',
        },
        'border-subtle': '#1e1e1e',
        'border-mid': '#2a2a2a',
        'border-accent': '#3a3a3a',
        'text-primary': '#e0e0e0',
        'text-muted': '#666666',
        'text-dim': '#444444',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
      },
      keyframes: {
        pinPulse: {
          '0%, 100%': { boxShadow: '0 0 4px #3a7a3a' },
          '50%': { boxShadow: '0 0 10px #7ECF7E, 0 0 20px rgba(126,207,126,0.3)' },
        },
        amberPulse: {
          '0%, 100%': { boxShadow: '0 0 6px #a87200' },
          '50%': { boxShadow: '0 0 16px #E8A000, 0 0 30px rgba(232,160,0,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        waveformScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        statusPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pin-pulse': 'pinPulse 1.5s ease-in-out infinite',
        'amber-pulse': 'amberPulse 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 1.8s infinite linear',
        'fade-in-right': 'fadeInRight 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'waveform-scroll': 'waveformScroll 4s linear infinite',
        'status-pulse': 'statusPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};