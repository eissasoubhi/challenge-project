import { FavoriteService } from '@/common/api.service'
import { FAVORITE_ADD, FAVORITE_REMOVE, SHOP_DISLIKE } from './actions.type'
import { UPDATE_SHOP_IN_LIST } from './mutations.type'

export const state = {

}

export const actions = {
  [FAVORITE_ADD] (context, payload) {
    return FavoriteService
      .add(payload)
      .then(({ data }) => {
        // Update list as well.
        context.commit(
          UPDATE_SHOP_IN_LIST,
          data.shop,
          { root: true }
        )
      })
  },
  [FAVORITE_REMOVE] (context, payload) {
    return FavoriteService
      .remove(payload)
      .then(({ data }) => {
        // Update list as well.
        context.commit(
          UPDATE_SHOP_IN_LIST,
          data.shop,
          { root: true }
        )
      })
  },
  [SHOP_DISLIKE] (context, payload) {
    return FavoriteService
      .dislike(payload)
      .then(({ data }) => {
        // Update list as well.
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
