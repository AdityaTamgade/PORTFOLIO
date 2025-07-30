/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ffb400", // Highlight color
        background: "#0f0f0f", // Main dark background
        accent: "#1f1f1f", // Accent dark blocks
      },
      boxShadow: {
        card: "0 0 10px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeUp: "fadeUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
