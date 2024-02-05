module.exports = {
  // Specify content for Tailwind CSS to process
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  // Extend Tailwind CSS theme if needed
  theme: {
    extend: {
      // Merge in the daisyui theme configuration
      daisyui: {
        themes: [
          {
            mytheme: {
              "primary": "#009fc5",
              "secondary": "#009b00",
              "accent": "#006dff",
              "neutral": "#0b0b0b",
              "base-100": "#fdfeff",
              "info": "#0073ce",
              "success": "#00a152",
              "warning": "#9d5b00",
              "error": "#f40045",
            },
          },
        ],
      },
    },
  },

  // Add Tailwind CSS plugins
  plugins: [
    require("daisyui"),
  ],

  // Configure DaisyUI plugin
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
