<template>
  <section>
    <h2>Certificates</h2>
    <div class="card" v-for="(cert, idx) in certificates" :key="idx">
      <img :src="cert.image" alt="Certificate" />
      <h3>{{ cert.title }}</h3>
      <p>{{ cert.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const certificates = ref([
  { title: 'Certificate 1', description: '...', image: new URL('@/assets/images/cert1.jpg', import.meta.url).href },
  { title: 'Certificate 2', description: '...', image: new URL('@/assets/images/cert2.jpg', import.meta.url).href }
]);
</script>
