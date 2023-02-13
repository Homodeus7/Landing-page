import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'
import About from '@/views/about.vue'
import News from '@/views/news.vue'
import Contact from '@/views/contact.vue'
import Shop from '@/views/shop.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: Home,
      beforeEnter: () => {
        return { path: `/` }
      },
    },
  ],
})

export default router
