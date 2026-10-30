/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#070B19',
          850: '#0B1124',
          800: '#111827',
          700: '#1F2937',
        },
        brand: {
          cyan: '#00F0FF',
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          purple: '#A855F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.12) 0%, rgba(59, 130, 246, 0.08) 35%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(0, 240, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 16px rgba(139, 92, 246, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}

