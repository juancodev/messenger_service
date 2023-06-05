/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}