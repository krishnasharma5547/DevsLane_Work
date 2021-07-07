module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       "primary-100": "#F1F8F5",
        "primary-200": "#D4E9E2",
        star: "#CBA258",
        "primary-400":"#008248",
      },
    },
  },
  variants: {},
  plugins: [],
};
