import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme
        "dark-bg": "#040A14",
        "dark-accent": "#00E5FF",
        "dark-text": "#E6F1FF",
        "dark-muted": "#7B8FA8",
        "dark-card": "#0A1628",
        "dark-border": "#1A2D4A",
        // Light theme
        "light-bg": "#FFFFFF",
        "light-accent": "#0066CC",
        "light-text": "#1A1A1A",
        "light-muted": "#6B7280",
        "light-card": "#F8FAFC",
        "light-border": "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Oswald", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 8s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "gradient-border": "gradient-border 2s ease-in-out infinite",
        "dash-flow": "dash-flow 1.5s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 229, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)" },
        },
        scan: {
          "0%": { top: "-2px" },
          "100%": { top: "100%" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "gradient-border": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-24" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
