import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Actor from '../views/Actor.vue'
import Gamer from '../views/Gamer.vue'
import Coder from '../views/Coder.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/actor', name: 'Actor', component: Actor },
  { path: '/gamer', name: 'Gamer', component: Gamer },
  { path: '/coder', name: 'Coder', component: Coder },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router