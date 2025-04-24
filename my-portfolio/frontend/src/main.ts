import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Force dark mode by adding class to <html>
document.documentElement.classList.add('dark');  // enables Tailwind dark variants :contentReference[oaicite:7]{index=7}

const app = createApp(App)
app.mount('#app')

// Initialize AOS for scroll animations
AOS.init({ duration: 800, once: true });         // Animate On Scroll library :contentReference[oaicite:8]{index=8}
