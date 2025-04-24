module.exports = {
  darkMode: 'class',                   // using class strategy :contentReference[oaicite:6]{index=6}
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#1E40AF', secondary: '#3B82F6' }
    }
  },
  plugins: []
}
