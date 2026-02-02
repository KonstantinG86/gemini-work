import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homeView.vue'
import EmojiView from '@/views/emojiView.vue'
import AstroView from '@/views/astroView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: EmojiView
    },
    {
      path: '/astro',
      name: 'astro',
      component: AstroView
    }
  ],
})

export default router
