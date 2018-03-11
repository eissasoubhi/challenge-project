import { FETCH_SHOPS } from './actions.type'
import { ShopsService } from '@/common/api.service'
import {FETCH_START, FETCH_END, UPDATE_SHOP_IN_LIST } from './mutations.type'

const state = {
  shops: [],
  isLoading: true,
  shopsCount: 0
}

const getters = {
  shopsCount (state) {
    return state.shopsCount
  },
  shops (state) {
    return state.shops
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  /**
   * Get the shops list with filtering
   */
  [FETCH_SHOPS] ({ commit }, params) {
    commit(FETCH_START)
    return ShopsService.query(params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [FETCH_END] (state, { shops, shopsCount }) {
    state.shops = shops
    state.shopsCount = shopsCount
    state.isLoading = false
  },
  [UPDATE_SHOP_IN_LIST] (state, data) {
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

export default {
  state,
  getters,
  actions,
  mutations
}
