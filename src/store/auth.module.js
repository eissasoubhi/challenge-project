import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'
import { LOGIN, REGISTER } from './actions.type'
import { SET_AUTH, SET_ERROR } from './mutations.type'

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    return new Promise((resolve) => {
      ApiService
        .post('users/login', {user: credentials})
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [REGISTER] (context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService
        .post('users', {user: credentials})
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    JwtService.saveToken(state.user.token)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
