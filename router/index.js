// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'
import Gallery from '../src/components/Gallery.vue'
import About from '../src/components/About.vue'
import Book from '../src/components/Book.vue'
import Faq from '../src/components/Faq.vue'
import Aftercare from '../src/components/Aftercare.vue'
import Policies from '../src/components/Policies.vue'
import GiftCard from '../src/components/GiftCard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/about', component: About },
  { path: '/book', component: Book },
  { path: '/faq', component: Faq },
  { path: '/aftercare', component: Aftercare },
  { path: '/policies', component: Policies },
  { path: '/giftcard', component: GiftCard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
