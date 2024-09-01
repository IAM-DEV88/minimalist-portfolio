/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        theme: "rgba(15,25,43, 0.8)",
        primary: "rgba(235, 236, 240, 0.9)",
        enphasis: "rgba(147, 158, 178, 0.8)",
        secondary: "rgba(71, 27, 48, 0.8)",
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
