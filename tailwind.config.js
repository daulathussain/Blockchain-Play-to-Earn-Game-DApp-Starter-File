// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: "#edfffe",
          100: "#c0fffc",
          200: "#81fffa",
          300: "#3afff7",
          400: "#00e5e0",
          500: "#00c8c4",
          600: "#009fa0",
          700: "#007f80",
          800: "#006466",
          900: "#004d4f",
        },
        neon: {
          50: "#fef1ff",
          100: "#fde6ff",
          200: "#faccff",
          300: "#f5a3ff",
          400: "#ee6aff",
          500: "#e033ff",
          600: "#c511e3",
          700: "#a60bbe",
          800: "#890d9b",
          900: "#71107e",
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        progressAnimation: "progressAnimation 2s ease-out forwards",
        slowSlideDown: "slowSlideDown 1.2s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "grid-flow": "gridFlow 20s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        progressAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        slowSlideDown: {
          "0%": { transform: "translateY(-100%)" },
          "15%": { transform: "translateY(-90%)" },
          "30%": { transform: "translateY(-75%)" },
          "50%": { transform: "translateY(-50%)" },
          "70%": { transform: "translateY(-25%)" },
          "85%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: 0.4,
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: 0.7,
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0,229,224,0.3), 0 0 60px rgba(0,229,224,0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0,229,224,0.5), 0 0 80px rgba(0,229,224,0.2)",
          },
        },
        gridFlow: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
          "75%": { opacity: 0.95 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
