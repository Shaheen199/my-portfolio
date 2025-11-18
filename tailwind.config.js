
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9b4dff",
        accent: "#d7aaff",
        night: "#0a0014"
      },
      boxShadow: {
        glow: "0 0 40px rgba(155,77,255,0.35)",
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(60% 60% at 50% 50%, rgba(155,77,255,0.35) 0%, rgba(10,0,20,0.1) 60%), radial-gradient(40% 40% at 80% 20%, rgba(215,170,255,0.2) 0%, rgba(10,0,20,0) 60%)"
      }
    },
  },
  plugins: [],
}
