import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import SidesView from '../views/SidesView.vue'
import DealView from '../views/DealView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: MenuView
    },
    {
      path: '/Deal',
      name: 'Deal',
      component: DealView
    },
    {
      path: '/Sides',
      name: 'Sides',
      component: SidesView
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/Cart',
      name: 'MyCart',
      component: CartView
    },
  ]
})

export default router
