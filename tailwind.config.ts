import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    colors: {
      primary: "#222222",
      secondary: "#478978",
      white: "#F6FFF8",
    },
    screens: {
      laptop: "717px",
    },
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
};
export default config;
