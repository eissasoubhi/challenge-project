const ID_TOKEN_KEY = 'id_token'

var localStorage = (() => {
  var store = {}

  return {
    getItem (key) {
      return store[key]
    },

    setItem (key, value) {
      store[key] = value.toString()
    },

    removeItem (key) {
      delete store[key]
    }
  }
})()

if (!window.localStorage) {
  Object.defineProperty(window, 'localStorage', {
    value: localStorage
  })
}

export default {
  getToken () {
    return window.localStorage.getItem(ID_TOKEN_KEY)
  },

  saveToken (token) {
    window.localStorage.setItem(ID_TOKEN_KEY, token)
  },

  destroyToken () {
    window.localStorage.removeItem(ID_TOKEN_KEY)
  }
}
