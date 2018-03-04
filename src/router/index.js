import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
