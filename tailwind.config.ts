import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D50C6",
        secondary: "#F85E9F",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        header: ["var(--font-circular-std)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
