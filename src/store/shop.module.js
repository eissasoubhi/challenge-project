import { FavoriteService } from '@/common/api.service'
import { FAVORITE_ADD, FAVORITE_REMOVE } from './actions.type'
import { UPDATE_SHOP_IN_LIST } from './mutations.type'

export const state = {

}

export const actions = {
  [FAVORITE_ADD] (context, payload) {
    return FavoriteService
      .add(payload)
      .then(({ data }) => {
        // Update list as well. This allows us to favorite a shop in the Home view.
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
        // Update list as well. This allows us to favorite a shop in the Home view.
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
