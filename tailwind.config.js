/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary:"#111827",
        grey: "#E5E7EB",
        blue: "#0078F",
        purple: {
          darker: "#320d40",
          dark: "#6c1b89",
          normal: "#9024b6",
          dark_hover: "#56166d",
          normal_hover: "#731d92",
          light: "#f4e9f8",
          light_hover:"#eedef4",
        },
      },
      borderWidth: {
        1: "1px",
        1.5:"1.5px"
      }
    },
  },
  plugins: [],
}

