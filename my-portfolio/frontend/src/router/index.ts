import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/Home.vue';
import Achievements from '@/components/Achievements.vue';
import Certificates from '@/components/Certificates.vue';
import CV from '@/components/CV.vue';
import Gallery from '@/components/Gallery.vue';
import PdfViewer from '@/components/PdfViewer.vue';
import Transcripts from '@/components/Transcripts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/achievements', component: Achievements },
  { path: '/certificates', component: Certificates },
  { path: '/cv', component: CV },
  { path: '/gallery', component: Gallery },
  { path: '/transcripts', component: Transcripts },
  { path: '/pdf', component: PdfViewer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
