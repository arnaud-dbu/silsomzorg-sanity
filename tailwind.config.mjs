/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const theme = {
  container: {
    center: true,
    padding: "1rem",
  },
  fontFamily: {
    base: "Author",
  },
  extend: {
    colors: {
      dark: "#1a1a1a",
      primary: {
        DEFAULT: "#ab5e4f",
        50: "#fbf6f5",
        100: "#f7ebe9",
        200: "#f1dbd7",
        300: "#e7c1ba",
        400: "#d79d92",
        500: "#c57c6e",
        600: "#ab5e4f",
        700: "#925043",
        800: "#7a443a",
        900: "#673d35",
        950: "#371d18",
      },
      secondary: {
        DEFAULT: "#233D4D",
      },
    },
    fontSize: {
      xs: ["0.75rem", "1"], // 12px - 16px
      sm: ["0.875rem", "1"], // 14px - 20px
      base: ["1rem", "1.2"], // 16px - 24px
      lg: ["1.2rem", "1.2"], // 18px - 28px
      xl: ["1.425rem", "1.2"], // 20px - 28px
      "2xl": ["1.75rem", "1.2"], // 24px - 32px
      "3xl": ["2.625rem", "1"], // 30px - 36px
      "4xl": ["3.5rem", "1"], // 36px - 40px
      "5xl": ["3rem", "1"], // 48px - 1
      "6xl": ["3.75rem", "0.9"], // 60px - 1
      "7xl": ["4.5rem", "0.9"], // 72px - 1
      "8xl": ["6rem", "0.9"], // 96px - 1
      "9xl": ["8rem", "0.9"], // 128px - 1
      "10xl": ["10rem", "0.9"], // 128px - 1
    },
    maxWidth: {
      blockHeader: "50rem",
    },
  },
};
export const plugins = [require("@tailwindcss/container-queries")];
