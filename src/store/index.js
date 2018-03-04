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

export default new Vuex.Store({
  modules: {
    auth
  }
})
