<template>
  <div class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Portfolio Image" />
    </div>
  </div>
</template>

<script setup>
const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',  // Replace with actual image paths
];
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
