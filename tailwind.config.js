/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: '#FFFFFF', // Clean white background
        primary: '#0077B6',    // Bright blue for primary elements
        accent: {
          DEFAULT: '#023E8A', // Rich blue for accents
          hover: '#90E0EF',   // Light blue for hover effects
        },
        secondary: '#03045E',  // Dark navy blue for secondary areas
        text: '#03045E',       // Dark navy blue for text
        muted: '#ADB5BD',      // Neutral gray for muted text
        success: '#48CAE4',    // Aqua blue for success states
        warning: '#00B4D8',    // Bright cyan for warnings
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
