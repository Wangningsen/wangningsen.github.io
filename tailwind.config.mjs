import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f1f7f6",
          100: "#deecea",
          200: "#bcd8d4",
          300: "#97c0bb",
          400: "#6aa49d",
          500: "#4f8b85",
          600: "#3f726d",
          700: "#335c58",
          800: "#2b4a47",
          900: "#263f3d"
        }
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "Segoe UI", "Helvetica Neue", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -20px rgb(15 23 42 / 0.45)",
        card: "0 8px 24px -20px rgb(2 8 23 / 0.45)"
      },
      maxWidth: {
        reading: "72ch"
      }
    }
  },
  plugins: [typography]
};

export default config;
