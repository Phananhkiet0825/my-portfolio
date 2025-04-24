<template>
  <div>
    <h2>My Achievements & Gallery</h2>
    <p>Below are some of my notable achievements and images related to my work and education:</p>

    <!-- Achievement Gallery -->
    <div class="gallery">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Achievement Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  '/src/assets/images/2f1039d0bc481c164559.jpg',
  '/src/assets/images/2fd80efcab640b3a5275.jpg',
  '/src/assets/images/7da5c23847a0e7febeb1.jpg',
  '/src/assets/images/8f4936e9b371132f4a60.jpg',
  '/src/assets/images/33ad2568a0f000ae59e1.jpg',
  '/src/assets/images/61d5b17934e194bfcdf0.jpg',
  '/src/assets/images/95658af40f6caf32f67d.jpg',
  '/src/assets/images/800753ecd674762a2f65.jpg',
  '/src/assets/images/5256929c1704b75aee15.jpg',
  '/src/assets/images/a81dcf8b4a13ea4db302.jpg',
  '/src/assets/images/c53ce81b4d83edddb492.jpg',
  '/src/assets/images/ce7abda3383b9865c12a.jpg',
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
