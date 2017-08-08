import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/pages/dashboard'

Vue.use(Router)

const routerMap = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = new Router({mode: 'history', routes: routerMap})

export default router
