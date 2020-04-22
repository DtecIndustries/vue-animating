import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modal.vue'
import List from '../views/List.vue'
import Drawer from '../views/Drawer.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/drawer',
    name: 'Drawer',
    component: Drawer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
