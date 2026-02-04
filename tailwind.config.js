/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: {
          950: "#0b0b0f",
          900: "#14141c",
          800: "#1f202b",
          700: "#2a2b38",
        },
        pearl: {
          50: "#fbfaf8",
          100: "#f5f2ed",
          200: "#e8e1d7",
          300: "#d9cbbd",
          400: "#c3af9b",
          500: "#a78a73",
        },
        ember: {
          400: "#f97316",
          500: "#ea580c",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(234, 88, 12, 0.25)",
        card: "0 24px 60px rgba(15, 15, 20, 0.16)",
      },
      transitionDuration: {
        160: "160ms",
        220: "220ms",
        250: "250ms",
      },
    },
  },
  plugins: [],
};
