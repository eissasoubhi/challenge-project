import { mount } from '@vue/test-utils'
import Register from '@/views/Register'
import store from '@/store'
import moxios from 'moxios'
import vue from 'vue'
import router from '@/router'
import JwtService from '@/common/jwt.service'
import Helpers from './test.helpers.js'
import ErrorFilter from '@/common/error.filter'
import ApiService from '@/common/api.service'

ApiService.init()

vue.filter('error', ErrorFilter)

describe('The register page', () => {
  var wrapper, helpers

  beforeEach(() => {
    moxios.install()

    wrapper = mount(Register, {
      store,
      router
    })

    helpers = new Helpers(wrapper)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('registers a user and logs them in to the application', (done) => {
    helpers.setFakeServer('users', {
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

  it('registers a user and saves their token', (done) => {
    helpers.setFakeServer('users', {
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
    helpers.setFakeServer('users', {
      errors: {
        'invalid password': ['password too short']
      }
    }, 401)

    helpers.submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      helpers.expectToSee('invalid password password too short')
      done()
    })
  })
})
