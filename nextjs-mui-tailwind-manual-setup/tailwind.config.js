/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/tw/**/*.{js,ts,jsx,tsx}",
    "./components/tw/**/*.{js,ts,jsx,tsx}",   
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
