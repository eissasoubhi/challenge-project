import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NearbyShops from '@/views/NearbyShops'
import Presentation from '@/views/Presentation'
import PreferredShops from '@/views/PreferredShops'

import { CHECK_AUTH } from '@/store/actions.type'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Presentation
        },
        {
          path: 'nearby-shops',
          name: 'nearbyShops',
          component: NearbyShops,
          meta: { requiresAuth: true }
        },
        {
          path: 'my-preferred-shops',
          name: 'home-preferred-shops',
          component: PreferredShops,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta: { requiresGuest: true }
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: { requiresGuest: true }
    }
  ]
})

export default router

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    return Promise
      .all([store.dispatch(CHECK_AUTH)])
      .then(() => {
        // redirect the user if he's not autorised
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (store.state.auth.isAuthenticated) {
            next()
          } else {
            next({ name: 'login' })
          }
        } else if (to.matched.some(record => record.meta.requiresGuest)) {
          if (!store.state.auth.isAuthenticated) {
            next()
          } else {
            next({ name: 'home' })
          }
        } else {
          next()
        }
      })
  }
)
