/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/tbhc-coin.jpg')",
        'featured': "url('/dot-bg.webp')",
        'why-choose': "url('/why_choose_tbhc_.webp')",
        'enterprise': "url('/footer_bg.webp')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}