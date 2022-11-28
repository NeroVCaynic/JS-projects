import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Itemscreen from '../views/Itemscreen.vue'
import notFound from '../views/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/item/:img/:title',
      name: 'itemPage',
      component: Itemscreen
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: notFound
    },
  ]
})

export default router
