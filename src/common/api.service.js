import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource, id = '') {
    return Vue.axios
      .get(`${resource}/${id}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService

export const ShopsService = {
  query (params) {
    return ApiService
      .query('shops', { params: params })
  },
  get (id) {
    return ApiService.get('shops', id)
  },
  create (params) {
    return ApiService.post('shops', {shop: params})
  },
  update (id, params) {
    return ApiService.update('shops', id, {shop: params})
  },
  destroy (id) {
    return ApiService.delete(`shops/${id}`)
  }
}

export const FavoriteService = {
  add (id) {
    return ApiService.post(`shops/${id}/favorite`)
  },
  remove (id) {
    return ApiService.delete(`shops/${id}/favorite`)
  },
  dislike (id) {
    return ApiService.post(`shops/${id}/dislike`)
  }
}
