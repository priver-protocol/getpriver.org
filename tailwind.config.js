/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        // Brand gradient anchors — taken directly from the logo
        // #7b21e1 (purple)  →  #2b32e6 (blue)
        "priver-purple": "#7b21e1",
        "priver-blue":   "#2b32e6",

        // Supporting scale, tuned to sit between the two gradient hues
        priver: {
          50:  "#f1ecfe",
          100: "#e3d9fd",
          200: "#c8b3fb",
          300: "#a787f5",
          400: "#855eed",
          500: "#6738e6",
          600: "#5421d6",   // close to the gradient midpoint
          700: "#421ab1",
          800: "#321688",
          900: "#221061",
          950: "#13083a"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
