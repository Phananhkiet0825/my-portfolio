<template>
  <div>
    <h2>My Transcripts</h2>
    <p>Below are the transcripts for my Bachelor and Master degrees. You can view or download the PDFs.</p>

    <div>
      <h3>Bachelor's Transcript</h3>
      <a href="/src/assets/images/Report Bachelor.pdf" target="_blank">View Transcript (PDF)</a>
      <button @click="downloadTranscript('bachelor')">Download Transcript</button>
    </div>

    <div>
      <h3>Master's Transcript</h3>
      <a href="/src/assets/images/Report Master.pdf" target="_blank">View Transcript (PDF)</a>
      <button @click="downloadTranscript('master')">Download Transcript</button>
    </div>
  </div>
</template>

<script setup>
const downloadTranscript = (type) => {
  const link = document.createElement('a');
  const filePath = type === 'bachelor' 
    ? '/src/assets/images/Report Bachelor.pdf'
    : '/src/assets/images/Report Master.pdf';
  
  link.href = filePath;
  link.download = `${type.charAt(0).toUpperCase() + type.slice(1)}_Transcript.pdf`;
  link.click();
};
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

h3 {
  font-size: 1.2rem;
  color: #444;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
