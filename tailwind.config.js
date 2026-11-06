/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#071B3A',
          deep: '#041329',
          secondary: '#102D52',
          card: '#0B2245',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        gold: {
          accent: '#C6A45C',
          light: '#DFC78E',
          dark: '#A6843A',
          subtle: 'rgba(198, 164, 92, 0.15)',
        },
        surface: {
          soft: '#F5F7FA',
          lightblue: '#E8EEF6',
          white: '#FFFFFF',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'executive': '0 20px 40px -15px rgba(4, 19, 41, 0.12), 0 0 1px 1px rgba(4, 19, 41, 0.05)',
        'executive-hover': '0 25px 50px -12px rgba(7, 27, 58, 0.22), 0 0 1px 1px rgba(198, 164, 92, 0.3)',
        'gold-glow': '0 0 25px -5px rgba(198, 164, 92, 0.35)',
      },
      backgroundImage: {
        'radial-gradient-navy': 'radial-gradient(circle at 50% 0%, #102D52 0%, #071B3A 60%, #041329 100%)',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

