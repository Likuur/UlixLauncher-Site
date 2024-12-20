import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'launcher': {
          '50': '#f0f7f3',
          '100': '#dcebe1',
          '200': '#bbd6c4',
          '300': '#92b9a0',
          '400': '#689779',
          '500': '#4c795d',
          '600': '#3b6049',
          '700': '#314c3b',
          '800': '#1a2f23',
          '900': '#162720',
          '950': '#0b130e',
        },
      },
      backgroundImage: {
        'launcher-gradient': 'linear-gradient(to bottom right, #0b130e, #1a2f23)',
        'launcher-glow': 'radial-gradient(circle at center, rgba(76, 121, 93, 0.15) 0%, rgba(11, 19, 14, 0) 70%)',
        'launcher-shine': 'linear-gradient(45deg, transparent 0%, rgba(76, 121, 93, 0.15) 50%, transparent 100%)',
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;