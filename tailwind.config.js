/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        theme: "rgba(147, 158, 178, 0.8)",
        primary: "rgba(235, 236, 240, 0.8)",
        enphasis: "rgba(15,25,43, 0.8)",
        secondary: "rgba(71, 27, 48, 0.8)",
        themebg: "rgba(47, 58, 78, 0.8)",
        primarybg: "rgba(35, 36, 40, 0.4)",
        secondarybg: "rgba(35, 13, 24, 0.8)",
        enphasisbg: "rgba(7,12,21, 0.8)",
      },
      boxShadow: {
        "theme": [
          "0 0 2px rgb(0, 0, 0, 1)",
          "0 0 8px rgba(255, 255, 255, 0.3)",
          "0 0 10px rgba(140, 90, 195, 0.3)",
          "0 0 15px rgba(189, 198, 221, 0.3)",
          "0 0 20px rgb(147, 158, 178, 0.3)",
        ],
        "neon": [
          "0 0 2px rgba(255, 255, 255, 1)",
          "0 0 4px rgba(255, 255, 255, 0.8)",
          "0 0 6px rgba(255, 255, 255, 0.6)",
        ],
        "small": [
          "0 0 1px rgba(255, 255, 255, 1)",
          "0 0 2px rgba(140, 90, 195, 0.8)",
          "0 0 3px rgba(255, 255, 255, 0.6)",
        ],
      },
      screens: {
        'dsm': '320px',
      },
      dropShadow: {
        "theme": [
          "0 0 2px rgb(0, 0, 0, 1)",
          "0 0 8px rgba(255, 255, 255, 0.3)",
          "0 0 10px rgba(140, 90, 195, 0.3)",
          "0 0 15px rgba(189, 198, 221, 0.3)",
          "0 0 20px rgb(147, 158, 178, 0.3)",
        ],
        "neon": [
          "0 0 2px rgba(255, 255, 255, 1)",
          "0 0 4px rgba(255, 255, 255, 0.8)",
          "0 0 6px rgba(255, 255, 255, 0.6)",
        ],
        "small": [
          "0 0 1px rgba(255, 255, 255, 1)",
          "0 0 2px rgba(140, 90, 195, 0.8)",
          "0 0 3px rgba(255, 255, 255, 0.6)",
        ],
      },
      fontSize: {
        'dsm-font': ['.5rem'],
        'sm-font': ['.6rem'],
        'md-font': ['.8rem'],
        'lg-font': ['1.5rem'],

        
        'xl-title': ['1.5rem'],
        'xl-sub': ['.8rem'],
        'xs-title': ['.6rem', { lineHeight: '1'}],
      },
    },
  },
  plugins: [],
};
