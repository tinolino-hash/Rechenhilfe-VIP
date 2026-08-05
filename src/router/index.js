import { createRouter, createWebHashHistory } from 'vue-router'
import RechenhilfeView from '../views/RechenhilfeView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  { path: '/', name: 'Rechenhilfe', component: RechenhilfeView },
  { path: '/admin', name: 'Admin', component: AdminView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
