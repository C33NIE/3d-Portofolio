module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
          primary: "#000f3d",         // Deep navy blue
          secondary: "#E6E7EB",       // Very light grayish blue, soft contrast
          tertiary: "#1A2A54",        // Darker shade of blue for depth
          quaternary: "#0056A6",      // Bright medium blue, harmonizes well with primary
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/1876.jpg')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      
      
      
      
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
