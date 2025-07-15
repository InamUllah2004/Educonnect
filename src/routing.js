import { createRouter, createWebHistory } from 'vue-router';
import home  from './home.vue'
import courses from './courses.vue'
const routes = [
  { path: '/', component: home, meta: { 
    title: 'Home Page', 
  } },
   { path: '/courses', component: courses, meta: { 
    title: 'Courses', 
  } }
 ];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
