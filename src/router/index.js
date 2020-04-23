import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modal.vue'
import List from '../views/List.vue'
import Drawer from '../views/Drawer.vue'
import Simple from '../views/Simple.vue'
import Stagger from '../views/Stagger.vue'
import State from '../views/State.vue'
import Timeline from '../views/Timeline.vue'
import Master from '../views/Master.vue'

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
  },
  {
    path: '/simple',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/stagger',
    name: 'Stagger',
    component: Stagger
  },
  {
    path: '/state',
    name: 'State',
    component: State
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/master',
    name: 'Master',
    component: Master
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
