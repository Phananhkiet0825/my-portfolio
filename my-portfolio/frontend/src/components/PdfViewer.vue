<script setup>
import { ref, onMounted } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker?worker'

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const canvasRef = ref(null)

onMounted(async () => {
  const loadingTask = pdfjsLib.getDocument('/your-pdf-file.pdf')  // <- replace with your PDF file
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)
  const viewport = page.getViewport({ scale: 1.5 })

  const canvas = canvasRef.value
  const context = canvas.getContext('2d')
  canvas.height = viewport.height
  canvas.width = viewport.width

  await page.render({ canvasContext: context, viewport }).promise
})
</script>

<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>
