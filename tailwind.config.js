/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'full-screen': '1281px',
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}