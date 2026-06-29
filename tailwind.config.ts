import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0A0A0F',
        'dark-surface': '#111118',
        'dark-border': '#1E1E2A',
        'neon-cyan': '#06B6D4',
        'neon-purple': '#8B5CF6',
        'electric-teal': '#14B8A6',
        'light-grey': '#A0A0B0',
        'mid-grey': '#6B6B7B',
        'background': '#0A0A0F',
        'primaryText': '#FFFFFF',
        'accentCyan': '#06B6D4',
        'gray100': '#1E1E2A',
        'gray200': '#6B6B7B',
        'gray300': '#A0A0B0',
        /* New design language */
        'violet-500': '#7c3aed',
        'violet-600': '#6d28d9',
        'violet-400': '#a78bfa',
        'cyan-400': '#22d3ee',
        'cyan-500': '#06b6d4',
        'emerald-500': '#10b981',
        'dark-900': '#030712',
        'card-bg': 'rgba(15, 23, 42, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-cyan': '0 8px 32px rgba(6, 182, 212, 0.15)',
        'glow-purple': '0 8px 32px rgba(139, 92, 246, 0.15)',
        'glow-cyan-strong': '0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(6, 182, 212, 0.1)',
        'glow-purple-strong': '0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(124, 58, 237, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #7c3aed, #06b6d4, #10b981)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4, #7c3aed)',
      },
      keyframes: {
        'shimmer': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(124, 58, 237, 0.5), 0 0 100px rgba(124, 58, 237, 0.2)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 1.5s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;
