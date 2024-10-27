const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your file structure
    "./public/index.html", // If you have an HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
