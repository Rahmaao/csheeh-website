import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   inherit: "inherit",
    //   transparent: "transparent",
    //   currentColor: "currentColor",
    // },
    extend: {
      backgroundImage: {
        about: "url('/assets/images/about-us.png')",
        "about-mobile": "url('/assets/images/about-mobile.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#3D3F94",
        lime: "#E6F3EE",
        lightgreen: "#A9CF46",
        gray: "#333333",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
