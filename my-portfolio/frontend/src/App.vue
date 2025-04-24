<template>
  <section
    class="relative flex flex-col items-center text-center overflow-hidden"
    :style="{
      backgroundImage: `url(${backgroundImg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <div class="relative z-10 max-w-3xl w-full py-24 px-6">
      <!-- Name & Role -->
      <div class="mb-12">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Phan Anh Kiet
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-2">
          Fullstack Developer & IT Enthusiast
        </p>
        <p class="text-base md:text-lg text-gray-400">
          3+ years building scalable web apps with Python, Node.js, Vue, and AI/ML.
        </p>
      </div>

      <!-- Core Full-Stack Skill Icons -->
      <div class="flex flex-wrap justify-center gap-8 mb-12">
        <!-- Emphasized first row -->
        <Icon icon="simple-icons:html5" class="text-orange-600" width="56" />
        <Icon icon="simple-icons:css3" class="text-blue-600" width="56" />
        <Icon icon="simple-icons:javascript" class="text-yellow-500" width="56" />
      </div>

      <!-- Extended Skill Icons Row -->
      <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-8 mb-12">
        <Icon icon="simple-icons:python" class="text-blue-500" width="48" />
        <Icon icon="simple-icons:nodedotjs" class="text-green-600" width="48" />
        <Icon icon="simple-icons:vuejs" class="text-green-400" width="48" />
        <Icon icon="simple-icons:react" class="text-cyan-400" width="48" />
        <Icon icon="simple-icons:docker" class="text-blue-500" width="48" />
        <Icon icon="simple-icons:mongodb" class="text-green-800" width="48" />
        <Icon icon="simple-icons:typescript" class="text-blue-700" width="48" />
        <Icon icon="simple-icons:tailwindcss" class="text-teal-400" width="48" />
      </div>

      <!-- CTA Button -->
      <a
        href="https://github.com/phananhkiet"
        target="_blank"
        class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition mb-12"
      >
        <Icon icon="simple-icons:github" class="w-6 h-6 mr-2" />
        View My GitHub
      </a>

     
    </div>
  </section>

  
    <div class="max-w-5xl mx-auto p-6 space-y-16">
    <!-- Achievements & Gallery -->
    <section id="achievements" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-4">Achievements & Gallery</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
        <div v-for="src in achievementImages" :key="src"
             class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition"
             data-aos="zoom-in" data-aos-delay="100">
          <img :src="src" class="w-full h-48 object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Curriculum Vitae -->
    <section id="cv" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-4">Curriculum Vitae</h2>
      <div class="relative pb-[75%] mb-4">
        <iframe :src="cvPDF"
                class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                title="CV"></iframe>
      </div>
      <a :href="cvPDF" download
         class="inline-block bg-secondary text-white px-5 py-2 rounded hover:bg-primary transition">
        Download CV
      </a>
    </section>

    <!-- Transcripts -->
    <section id="transcripts" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-4">Academic Transcripts</h2>
      <div class="space-y-6">
        <div class="flex items-center space-x-4" data-aos="fade-right">
          <span class="font-medium">Bachelor’s:</span>
          <a :href="bachelorReport" target="_blank"
             class="text-secondary hover:underline">View PDF</a>
          <button @click="downloadPDF(bachelorReport,'Bachelor_Transcript.pdf')"
                  class="bg-secondary text-white px-3 py-1 rounded hover:bg-primary transition">
            Download
          </button>
        </div>
        <div class="flex items-center space-x-4" data-aos="fade-left">
          <span class="font-medium">Master’s:</span>
          <a :href="masterReport" target="_blank"
             class="text-secondary hover:underline">View PDF</a>
          <button @click="downloadPDF(masterReport,'Master_Transcript.pdf')"
                  class="bg-secondary text-white px-3 py-1 rounded hover:bg-primary transition">
            Download
          </button>
        </div>
      </div>
    </section>

    <!-- About & Contact Section -->
    <section id="about" data-aos="fade-up">
      <h2 class="text-3xl font-semibold mb-4">About Me</h2>
      <p class="text-gray-300 mb-6">
        A passionate Fullstack Developer with a Master’s in IT. I build scalable web applications using Vue.js, Node.js, and cloud services.
      </p>
      <h3 class="text-2xl font-semibold mb-2">Contact Me</h3>
      <form @submit.prevent="submitContact" class="space-y-4 max-w-lg">
        <input v-model="contact.name" type="text" placeholder="Name" required
               class="w-full border rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-primary"/>
        <input v-model="contact.email" type="email" placeholder="Email" required
               class="w-full border rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-primary"/>
        <textarea v-model="contact.message" rows="4" placeholder="Message" required
                  class="w-full border rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-primary"></textarea>
        <button type="submit"
                class="bg-secondary text-white px-5 py-2 rounded hover:bg-primary transition">
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>


<script setup lang="ts">
// ESM imports for assets (Vite requires this) :contentReference[oaicite:10]{index=10}
import { Icon } from '@iconify/vue';

import cvPDF          from '@/assets/cv/CV_Phan_Anh_Kiet_2025_FullStack.pdf'
import bachelorReport from '@/assets/images/Report Bachelor.pdf'
import masterReport   from '@/assets/images/Report Master.pdf'
import backgroundImg1      from '@/assets/background/481114924_1849313169152227_3966569004226327712_n.jpg'
import img1            from '@/assets/images/2f1039d0bc481c164559.jpg'
import img2            from '@/assets/images/2fd80efcab640b3a5275.jpg'
import img3            from '@/assets/images/7da5c23847a0e7febeb1.jpg'
import img4            from '@/assets/images/8f4936e9b371132f4a60.jpg'
import img5            from '@/assets/images/33ad2568a0f000ae59e1.jpg'
import img6            from '@/assets/images/61d5b17934e194bfcdf0.jpg'
import img7            from '@/assets/images/95658af40f6caf32f67d.jpg'
import img8            from '@/assets/images/800753ecd674762a2f65.jpg'
import img9            from '@/assets/images/5256929c1704b75aee15.jpg'
import img10           from '@/assets/images/a81dcf8b4a13ea4db302.jpg'
import img11           from '@/assets/images/c53ce81b4d83edddb492.jpg'
import img12           from '@/assets/images/ce7abda3383b9865c12a.jpg'

import { reactive } from 'vue'

// Build the images array
const achievementImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]

// Reactive data for contact form
const contact = reactive({ name: '', email: '', message: '' })

// Helper to download any PDF
function downloadPDF(url: string, filename: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
}

// Contact form submission handler
function submitContact() {
  alert(`Thank you, ${contact.name}! I'll be in touch soon.`)
}
</script>

<style scoped>
/* Maintain 4:3 aspect ratio for iframes */
.relative.pb-\[75\%\] { padding-bottom: 75%; }
</style>
