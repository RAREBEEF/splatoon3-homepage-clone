/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    screens: {
      md: { max: "1023px" },
      sm: { max: "639px" },
    },
    fontFamily: {
      sans: ["obviously-narrow"],
    },
    colors: {
      orange: "#ff9750",
      blue: "#101ab3",
      yellow: "#fedc0c",
      neonGreen: "#eaff3d",
      nintendoRed: "#E60012",
      red: "#ff505e;",
      purple: "#603bff",
      morePurple: "#af50ff",
      mint: "#6af7ce",
      white: "#ffffff",
      black: "#0e0e0e",
    },
    container: {
      center: true,
      padding: "10px",
    },
  },
  plugins: [],
};
