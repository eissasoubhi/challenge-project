import vue from 'vue'
import moxios from 'moxios'
import store from '@/store'
import router from '@/router'
import Login from '@/views/Login'
import Helpers from './test.helpers.js'
import { mount } from '@vue/test-utils'
import JwtService from '@/common/jwt.service'
import ErrorFilter from '@/common/error.filter'
import ApiService from '@/common/api.service'

ApiService.init()

vue.filter('error', ErrorFilter)

describe('The login page', () => {
  var wrapper, helpers

  beforeEach(() => {
    moxios.install()

    wrapper = mount(Login, {
      store,
      router
    })

    helpers = new Helpers(wrapper)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('Logs a user in to the application', (done) => {
    helpers.setFakeServer('users/login', {
      user: {
        email: 'foo@bar.com',
        token: 'foobartoken'
      }
    })

    helpers.submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      expect(wrapper.vm.$store.state.auth.user).toEqual({email: 'foo@bar.com', token: 'foobartoken'})
      expect(wrapper.vm.$store.state.auth.isAuthenticated).toBe(true)
      done()
    })
  })

  it('saves the user\'s token after logging in', (done) => {
    helpers.setFakeServer('users/login', {
      user: {
        email: 'foo@bar.com',
        token: 'foobartoken'
      }
    })

    helpers.submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      expect(JwtService.getToken()).toBe('foobartoken')
      done()
    })
  })

  it('shows the message if error have occurred', (done) => {
    helpers.setFakeServer('users/login', {
      errors: {
        'invalid credentials': ['no record have been found']
      }
    }, 401)

    helpers.submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      helpers.expectToSee('invalid credentials no record have been found')
      done()
    })
  })
})
