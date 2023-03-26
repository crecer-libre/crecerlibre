/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3cab34",
        skyBlue: "#0d9eda"
      },
      width: {
        logo: "60px"
      },
      height: {
        logo: "60px"
      },
      fontSize: {
        sm: ['14px', '40px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}