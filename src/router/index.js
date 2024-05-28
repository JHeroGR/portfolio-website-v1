import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Actor from '../views/Actor.vue'
import Gamer from '../views/Gamer.vue'
import Coder from '../views/Coder.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/actor', name: 'actor', component: Actor },
  { path: '/gamer', name: 'gamer', component: Gamer },
  { path: '/coder', name: 'coder', component: Coder },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router