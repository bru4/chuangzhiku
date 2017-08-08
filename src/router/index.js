import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = r => require.ensure([], () => r(require('@/views/pages/dashboard')), 'dashboard')
const SignIn = r => require.ensure([], () => r(require('@/views/pages/auth/signIn')), 'auth')

Vue.use(Router)

const routerMap = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }, {
    path: '/sign_in',
    name: 'sign_in',
    component: SignIn
  }
]

const router = new Router({mode: 'history', routes: routerMap})

export default router
