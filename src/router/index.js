import Vue from 'vue'
import Router from 'vue-router'

import HfRegister from '@/views/Register'
import HfLogin from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'register',
      path: '/register',
      component: HfRegister
    },
    {
      name: 'login',
      path: '/login',
      component: HfLogin
    }
  ]
})
