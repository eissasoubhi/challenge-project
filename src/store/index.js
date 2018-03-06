import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = API_URL

let auth = {

  state: {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
  },

  actions: {
    login (context, credentials) {
      return new Promise((resolve) => {
        Vue.axios
          .post('users/login', {user: credentials})
          .then(({data}) => {
            context.commit('set_auth', data.user)
            resolve(data)
          })
          .catch(({response}) => {
            context.commit('set_error', response.data.errors)
          })
      })
    },
    register (context, credentials) {
      return new Promise((resolve, reject) => {
        Vue.axios
          .post('users', credentials)
          .then(({data}) => {
            // console.log(data)
            context.commit('set_auth', data.user)
            resolve(data)
          })
          .catch(({response}) => {
            context.commit('set_error', response.data.errors)
          })
      })
    }
  },

  mutations: {
    set_error (state, error) {
      state.errors = error
    },
    set_auth (state, user) {
      state.isAuthenticated = true
      state.user = user
      state.errors = {}
      JwtService.saveToken(state.user.token)
    }
  }
}

let shopList = {
  state: {
    shops: [],
    isLoading: true,
    shopsCount: 0
  },
  getters: {
    shopsCount (state) {
      return state.shopsCount
    },
    shops (state) {
      return state.shops
    },
    isLoading (state) {
      return state.isLoading
    }
  },

  actions: {
    fetch_shops ({ commit }, params) {
      commit('fetch_start')
      return Vue.axios.get('shops', {params: params.filters})
        .then(({ data }) => {
          commit('fetch_end', data)
        })
        .catch((error) => {
          throw new Error(error)
        })
    },

    favorite_add (context, payload) {
      return Vue.axios
        .post('shops/' + payload + '/favorite')
        .then(({ data }) => {
          // Update list as well. This allows us to like a shop in the Home view.
          context.commit(
            'update_shop_in_list',
            data.shop,
            { root: true }
          )
        })
    },
    favorite_remove (context, payload) {
      return Vue.axios
        .delete('shops/' + payload + '/favorite')
        .then(({ data }) => {
          // Update list as well. This allows us to favorite a shop in the Home view.
          context.commit(
            'update_shop_in_list',
            data.shop,
            { root: true }
          )
        })
    }
  },

  mutations: {
    fetch_start (state) {
      state.isLoading = true
    },
    fetch_end (state, { shops, shopsCount }) {
      state.shops = shops
      state.shopsCount = shopsCount
      state.isLoading = false
    },
    update_shop_in_list (state, data) {
      state.shops = state.shops.map((shop) => {
        if (shop.id !== data.id) { return shop }
        // We could just return data, but it seems dangerous to
        // mix the results of different api calls, so we
        // protect ourselves by copying the information.
        shop.favorited = data.favorited
        return shop
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    auth,
    shopList
  }
})
