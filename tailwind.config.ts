import type { Config } from 'tailwindcss';

/**
 * Selah design system.
 * Ocean + divine light: deep teal → aqua → soft cyan, with warm gold/white glows.
 * Glassmorphism everywhere. Calm, luminous, mindful.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ocean depths → divine light
        abyss: '#042F2E',
        deep: '#0E5C57',
        teal: '#14B8A6',
        aqua: '#67E8F9',
        // Divine light accents
        light: {
          DEFAULT: '#FFFFFF',
          warm: '#FDE68A',
          gold: '#FCD34D',
        },
        // Text on dark
        ink: {
          DEFAULT: '#F0FDFA',
          muted: 'rgba(240, 253, 250, 0.72)',
          faint: 'rgba(240, 253, 250, 0.5)',
        },
        // Glass surfaces (use with backdrop-blur)
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          soft: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.14)',
          border: 'rgba(255, 255, 255, 0.18)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        scripture: ['var(--font-display)', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '24px',
        control: '16px',
        pill: '999px',
      },
      backdropBlur: {
        glass: '22px',
        'glass-lg': '28px',
      },
      boxShadow: {
        glass: '0 8px 40px -8px rgba(4, 47, 46, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.12)',
        'glass-lg': '0 20px 70px -12px rgba(4, 47, 46, 0.65), inset 0 1px 0 0 rgba(255,255,255,0.14)',
        glow: '0 0 60px -10px rgba(103, 232, 249, 0.45)',
        'glow-gold': '0 0 70px -8px rgba(253, 224, 138, 0.5)',
      },
      backgroundImage: {
        'ocean-deep':
          'radial-gradient(120% 120% at 50% 0%, #0E5C57 0%, #042F2E 55%, #021F1E 100%)',
        'divine-light':
          'radial-gradient(60% 50% at 50% 0%, rgba(253,224,138,0.18) 0%, rgba(253,224,138,0) 70%)',
      },
      keyframes: {
        'thread-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '0.9' },
        },
      },
      animation: {
        'thread-pulse': 'thread-pulse 4s ease-in-out infinite',
        'soft-float': 'soft-float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.4s ease-out both',
        'spin-slow': 'spin-slow 60s linear infinite',
        breathe: 'breathe 7s ease-in-out infinite',
      },
      transitionTimingFunction: {
        breath: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
