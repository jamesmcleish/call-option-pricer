import { createRouter, createWebHistory } from 'vue-router';
import SignupForm from './components/SignupForm.vue';
import HomePage from './components/HomePage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import {checkLoginToken} from './utils/checkLoginToken.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomePage },
      { path: '/signup', component: SignupForm },
      { path: '/projects', component: ProjectsPage, meta: {requiresAuth: true},}
    ],
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const tokenExists = checkLoginToken();
  
      if (tokenExists) {
        next();
      } else {
        next('/login');
      }
    } else {
      next();
    }
  });

export default router;