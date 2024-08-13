import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#FCFCFF",
        primary: "#2C47BF",
        secondary: "#FF8126",
      },
      boxShadow: {
        "service-box": "0 24px 40px 0 rgba(4, 18, 81, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
