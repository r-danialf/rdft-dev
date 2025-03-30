import { createRouter, createWebHistory } from 'vue-router';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Experiences from '@/views/Experiences.vue';

const routes = [
  { path: '/', component: About },
  { path: '/projects', component: Projects },
  { path: '/experiences', component: Experiences },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
