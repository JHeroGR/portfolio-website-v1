import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import Coder from '../views/Coder.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/coder', name: 'Coder', component: Coder },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router