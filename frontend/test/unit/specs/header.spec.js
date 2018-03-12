import store from '@/store'
import router from '@/router'
import Helpers from './test.helpers.js'
import Header from '@/components/Header'

import { mount } from '@vue/test-utils'

describe('The Header', () => {
  var wrapper, helpers

  beforeEach(() => {
    wrapper = mount(Header, {
      router,
      store
    })

    helpers = new Helpers(wrapper)
  })

  it('shows Sign in and Sign up buttons for an unauthenticated user', (done) => {
    helpers.logUserOut()

    wrapper.vm.$nextTick(function () {
      helpers.expectToSee('Sign up')
      helpers.expectToSee('Sign in')
      done()
    })
  })

  it('hides Sign in and Sign up buttons for an authenticated user', (done) => {
    helpers.logUserIn()

    wrapper.vm.$nextTick(function () {
      helpers.dontExpectToSee('Sign up')
      helpers.dontExpectToSee('Sign in')
      done()
    })
  })

  it('hides the user name and logout button for an unauthenticated user', (done) => {
    helpers.logUserOut()

    wrapper.vm.$nextTick(function () {
      expect(wrapper.contains('#header-right-menu')).toBe(false)
      helpers.dontExpectToSee('Logout')
      done()
    })
  })

  it('shows the user name and logout button for an authenticated user', (done) => {
    helpers.logUserIn()

    wrapper.vm.$nextTick(function () {
      helpers.expectToSee('johnDoe@foo.bar')
      helpers.expectToSee('Logout')
      done()
    })
  })

  it('logs the user out from the application', (done) => {
    helpers.logUserIn()

    helpers.click('a#logout')
    wrapper.vm.$nextTick(function () {
      expect(store.state.auth.user).toEqual({})
      expect(store.state.auth.isAuthenticated).toBe(false)
      done()
    })
  })
})
