/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans for classes in Vite's folder structure
  ],
  theme: {
    extend: {
      fontFamily: {
        edo: ["Edo", ...defaultTheme.fontFamily.sans], // Add Edo font
        mukta: ["Mukta", ...defaultTheme.fontFamily.sans], // Add Mukta font
      },
      colors: {
        orange: {
          DEFAULT: "#EF611A", // Main orange
          light: "#F48706", // Light orange
          lighter: "#FFEDC5", // Lighter orange
        },
        green: "#38A32F", // Green
        red: "#FF250F", // Red

        heading: "#999",
        text: "rgb(75, 80, 94)",
      },
    },
  },
  plugins: [],
};
