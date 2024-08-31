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
        primarybg: "rgba(0, 170, 250, 0.8)",
        enphasisbg: "rgba(0, 0, 0, 0.6)",
        neonBlue: "rgba(0, 255, 255, 0.8)",
        neonPink: "rgba(255, 0, 255, 0.8)",
        neonGreen: "rgba(0, 255, 0, 0.8)",
        neonYellow: "rgba(255, 255, 0, 0.8)",
      },
      boxShadow: {
        'neon-theme': '0 0 5px rgba(147, 158, 178, 0.8), 0 0 10px rgba(147, 158, 178, 0.8), 0 0 15px rgba(147, 158, 178, 0.8)',
        'neon-primary': '0 0 5px rgba(235, 236, 240, 0.8), 0 0 10px rgba(235, 236, 240, 0.8), 0 0 15px rgba(235, 236, 240, 0.8)',
        'neon-enphasis': '0 0 5px rgba(71, 90, 126, 0.8), 0 0 10px rgba(71, 90, 126, 0.8), 0 0 15px rgba(71, 90, 126, 0.8)',
        'neon-secondary': '0 0 5px rgba(71, 27, 48, 0.8), 0 0 10px rgba(71, 27, 48, 0.8), 0 0 15px rgba(71, 27, 48, 0.8)',
        'neon-primarybg': '0 0 5px rgba(0, 170, 250, 0.8), 0 0 10px rgba(0, 170, 250, 0.8), 0 0 15px rgba(0, 170, 250, 0.8)',
        'neon-blue': '0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.8), 0 0 15px rgba(0, 255, 255, 0.8)',
        'neon-pink': '0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.8), 0 0 15px rgba(255, 0, 255, 0.8)',
        'neon-green': '0 0 5px rgba(0, 255, 0, 0.8), 0 0 10px rgba(0, 255, 0, 0.8), 0 0 15px rgba(0, 255, 0, 0.8)',
        'neon-yellow': '0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 255, 0, 0.8), 0 0 15px rgba(255, 255, 0, 0.8)',
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
        'xl-title': ['1.5rem'],
        'xl-sub': ['.8rem'],
        'xs-title': ['.6rem', { lineHeight: '1'}],
      },
    },
  },
  plugins: [],
};
