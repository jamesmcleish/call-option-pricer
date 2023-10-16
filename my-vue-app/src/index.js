import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import SignupForm from './components/SignupForm.vue';
import HomePage from './components/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomePage },
      { path: '/login', component: LoginForm },
      { path: '/signup', component: SignupForm },
    ],
  });

export default router;