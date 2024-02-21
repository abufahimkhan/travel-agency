/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg-custom': '2.5rem', // Add your custom value here
      },
    
    },
  },
  plugins: [],
}
