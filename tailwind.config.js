/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you use a 'src' directory
      ],
  theme: {
    extend: {
      screens: {
        xxsm: '350px',
        xsm: '425px',
        mobile: '425px',
        sm: '640px',
        tablet: '640px',
        md: '768px',
        lg: '1024px',
        laptop: '1024px',
        desktop: '1280px',
        xl: '1440px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

