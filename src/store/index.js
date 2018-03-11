import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.module'
import shop from './shop.module'
import home from './shopsList.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    auth,
    shop
  }
})
