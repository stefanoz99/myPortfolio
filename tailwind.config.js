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
        primary: '#0A1128', // Deep navy for backgrounds
        accent: {
          DEFAULT: '#0077B6', // Soft blue for highlights
          hover: '#CAF0F8',   // Light aqua for hover states
        },
        secondary: '#001F54', // Rich blue for secondary areas
        text: '#FFFFFF',      // Clean white text
        muted: '#B0C4DE',     // Soft gray-blue for less prominent text
        danger: '#FFD700',    // Golden yellow for alerts or warnings
        success: '#38B000',   // Fresh green for success states
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
