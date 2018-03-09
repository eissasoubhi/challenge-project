import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import NearbyShops from '@/views/NearbyShops'
import PreferredShops from '@/views/PreferredShops'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: NearbyShops
        },
        {
          path: 'my-preferred-shops',
          name: 'home-preferred-shops',
          component: PreferredShops
        }
      ]
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
