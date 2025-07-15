import { createRouter, createWebHistory } from 'vue-router';
import home  from './home.vue'

const routes = [
  { path: '/', component: home, meta: { 
    title: 'Home Page', 
  } }
 ];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
