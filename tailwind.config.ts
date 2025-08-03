import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "-270px",
          },
          "5%, 33%": {
            "margin-top": "-180px",
          },
          "38%, 66%": {
            "margin-top": "-90px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
      },
      colors: {
        primary: "#001d35",
        secondary: "#fff",
      },
    },
  },
};

export default config;