/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        theme: "#020617", // Slate 950 (Darker body)
        primary: "#ffffff",
        enphasis: "#06b6d4", // Cyan 500 (Circuit/Eyes glow)
        secondary: "#3b82f6", // Blue 500 (Body highlights)
        accent: "#f59e0b", // Amber 500 (Circuitry copper)
        surface: "rgba(6, 182, 212, 0.03)", // Cyan tint surface
        "surface-hover": "rgba(6, 182, 212, 0.08)",
      },
      boxShadow: {
        "theme": [
          "0 0 2px rgb(0, 0, 0, 1)",
          "0 0 7px rgba(255, 255, 255, 0.3)",
          "0 0 10px rgb(115, 25, 43, 0.3)",
        ],
        "primary": [
          "0 0 2px rgba(255, 255, 255, 1)",
          "0 0 9px rgba(255, 255, 255, .5)",
          "0 0 10px rgb(115, 25, 43, 0.3)",
        ],
        "enphasis": [
          "0 0 2px rgba(0, 0, 0, 1)",
          "0 0 4px rgba(255, 255, 255, 0.4)",
          "0 0 6px rgb(140, 90, 195, 0.9)",
        ],
      },
      screens: {
        'dsm': '320px',
      },
      dropShadow: {
        "theme": [
          "0 0 2px rgb(0, 0, 0, 1)",
          "0 0 7px rgba(255, 255, 255, 0.3)",
          "0 0 10px rgb(115, 25, 43, 0.3)",
        ],
        "primary": [
          "0 0 2px rgba(255, 255, 255, 1)",
          "0 0 9px rgba(255, 255, 255, .5)",
          "0 0 10px rgb(115, 25, 43, 0.3)",
        ],
        "enphasis": [
          "0 0 2px rgba(0, 0, 0, 1)",
          "0 0 4px rgba(255, 255, 255, 0.4)",
          "0 0 6px rgb(140, 90, 195, 0.9)",
        ],
      },
      fontSize: {
        'dsm-font': ['.5rem'],
        'sm-font': ['.6rem'],
        'md-font': ['.8rem'],
        'lg-font': ['1.5rem'],
        'lg-font-sm': ['1.9rem'],
        'md-font-sm': ['1.1rem'],

      },
    },
  },
  plugins: [],
};
