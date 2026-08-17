/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151513",
        surface: "#1E1E1B",
        border: "#2C2C28",
        foreground: "#EDEDE8",
        muted: "#8A8A82",
        accent: "#E8A33D",
        danger: "#E5544D",
        success: "#5FAE72",
      },
    },
  },
  plugins: [],
}