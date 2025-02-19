import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "clamp(1.625rem, 1.245rem + 1.52vw, 2.8125rem)",
        sub1: "clamp(0.875rem, 0.655rem + 0.88vw, 1.5625rem)",
      },
      boxShadow: {
        notification: "0px 0px 36px 0px rgba(25, 25, 25, 0.10);",
      },
      screens: {
        xs: "525px",
        sm: "900px",
        md: "1024px",
        lg: "1250px",
        xl: "1550px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
