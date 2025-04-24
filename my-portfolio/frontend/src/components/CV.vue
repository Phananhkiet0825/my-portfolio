<template>
  <div>
    <h2>My CV</h2>
    <p>Below is my CV. You can view it here or download the PDF version.</p>
    <iframe
      src="/src/assets/cv/CV_Phan_Anh_Kiet_2025_FullStack.pdf"
      width="100%"
      height="600px"
      title="CV"
    ></iframe>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
}

iframe {
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
