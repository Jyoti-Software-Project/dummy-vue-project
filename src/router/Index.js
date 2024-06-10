import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Service from '@/components/Service.vue';
import Contact from '@/components/Contact.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
