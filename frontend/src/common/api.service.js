import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'

import { API_URL } from '@/common/config'

const ApiService = {
  /**
   * Set the base URL
   */
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  /**
   * Set the token header
   */
  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  /**
   * Send a get request with a params in the query
   */
  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  /**
   * Get all/one resource
   */
  get (resource, id = '') {
    return Vue.axios
      .get(`${resource}/${id}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  /**
   * Send a post request
   */
  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  /**
   * Update a resource
   */
  update (resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, params)
  },

  /**
   * Replace a resource
   */
  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  /**
   * Delete a resource
   */
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
  /**
   * Get nearby shops/preferred shops with pagination
   */
  query (params) {
    return ApiService
      .query('shops', { params: params })
  }
}

export const FavoriteService = {
  /**
   * Like a shop
   */
  add (id) {
    return ApiService.post(`shops/${id}/favorite`)
  },
  /**
   * Unlike a shop
   */
  remove (id) {
    return ApiService.delete(`shops/${id}/favorite`)
  },

  /**
   * Dislike a shop
   */
  dislike (id) {
    return ApiService.post(`shops/${id}/dislike`)
  }
}
