import { FavoriteService } from '@/common/api.service'
import { UPDATE_SHOP_IN_LIST } from './mutations.type'
import { FAVORITE_ADD, FAVORITE_REMOVE, SHOP_DISLIKE } from './actions.type'

export const state = {

}

export const actions = {
  /**
   * Like a shop and update the list
   */
  [FAVORITE_ADD] (context, payload) {
    return FavoriteService
      .add(payload)
      .then(({ data }) => {
        context.commit(
          UPDATE_SHOP_IN_LIST,
          data.shop,
          { root: true }
        )
      })
  },

  /**
   * Unike a shop and update the list
   */
  [FAVORITE_REMOVE] (context, payload) {
    return FavoriteService
      .remove(payload)
      .then(({ data }) => {
        context.commit(
          UPDATE_SHOP_IN_LIST,
          data.shop,
          { root: true }
        )
      })
  },

  /**
   * Dislike a shop and update the list
   */
  [SHOP_DISLIKE] (context, payload) {
    return FavoriteService
      .dislike(payload)
      .then(({ data }) => {
        context.commit(
          UPDATE_SHOP_IN_LIST,
          data.shop,
          { root: true }
        )
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {

}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
