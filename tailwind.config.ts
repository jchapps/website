import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#222222",
      secondary: "#80e5a6",
      // white: "#FDFFF7",
      white: "#F6FFF8",
    },
    screens: {
      laptop: "717px",
    },
  },
  plugins: [],
};
export default config;
