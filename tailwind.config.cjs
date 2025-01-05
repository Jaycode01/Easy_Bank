/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Afacad: ["Afacad"],
      },
      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: "hsl(192, 70%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "easybank-gradient":
          "linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
        "hero-background-desktop": "url(./src/assets/bg-intro-desktop.svg)",
        "hero-background-mobile": "url(./src/assets/bg-intro-mobile.svg)",
      },
    },
  },
  plugins: [],
};
