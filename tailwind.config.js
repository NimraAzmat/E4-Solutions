/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sourcesans: ['Source code Pro', 'sans-serif'],
        // sans: ['Montserrat', 'sans-serif'],
        // 'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        // sans: ['Inter', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        // 'source-code-pro': ['Source Code Pro', 'monospace'],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#018fcb',
        secondary: '#04283e',
        light: '#f7f7f7',
        dark: '#333333',
        dark2: '#999999',
        dark3: '#1A1A1A',
        titlebg: '#e5e7eb',
        navbg: '#007B77',
        gray: '#9e9e9e'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
