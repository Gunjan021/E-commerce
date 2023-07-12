/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        firstbgImg:
          "url('https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-2.jpg?v=1679891172&width=1100')",
      },
    },
  },
  plugins: [],
};
