/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        abyss: '#07142F',
        deep: '#0B1F3A',
        steel: '#2C5EAD',
        signal: '#1591DC',
        sky: '#4BB8FA',
        violet: '#7C3AED',
        orchid: '#A855F7',
        cyan: '#22D3EE',
        mist: '#E2E8F0',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(75,184,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(75,184,250,0.08) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(21,145,220,0.25), transparent 60%)',
      },
      backgroundSize: {
        grid: '46px 46px',
      },
      keyframes: {
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '46px 46px' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-10px) translateX(6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.06)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-40px,-30px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        /* Added in stage 2 for the Page 2 pipeline + architecture flows */
        'flow-right': {
          '0%': { transform: 'translateX(-120%)', opacity: 0 },
          '20%, 80%': { opacity: 1 },
          '100%': { transform: 'translateX(120%)', opacity: 0 },
        },
        'flow-down': {
          '0%': { transform: 'translateY(-120%)', opacity: 0 },
          '20%, 80%': { opacity: 1 },
          '100%': { transform: 'translateY(120%)', opacity: 0 },
        },
        'sweep-in': {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'grid-pan': 'grid-pan 6s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.2s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
        drift: 'drift 60s linear infinite alternate',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'flow-right': 'flow-right 2.8s linear infinite',
        'flow-down': 'flow-down 2.8s linear infinite',
        'sweep-in': 'sweep-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(21,145,220,0.55)',
        'glow-violet': '0 0 40px -8px rgba(124,58,237,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.5)',
      },
    },
  },
  plugins: [],
}
