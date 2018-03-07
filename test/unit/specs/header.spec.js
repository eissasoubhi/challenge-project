import { mount } from '@vue/test-utils'
import Header from '@/components/Header'
import router from '@/router'
import Helpers from './test.helpers.js'

describe('The Header', () => {
  var wrapper, helpers

  beforeEach(() => {
    wrapper = mount(Header, {
      router
    })

    helpers = new Helpers(wrapper)
  })

  it('shows Sign in and Sign up buttons for an unauthenticated user', () => {
    helpers.logUserOut()

    helpers.expectToSee('Sign up')
    helpers.expectToSee('Sign in')
  })

  it('hides Sign in and Sign up buttons for an authenticated user', () => {
    helpers.logUserIn()

    helpers.dontExpectToSee('Sign up')
    helpers.dontExpectToSee('Sign in')
  })

  it('hides the user name and logout button for an unauthenticated user', () => {
    helpers.logUserOut()

    expect(wrapper.contains('#header-right-menu')).toBe(false)
    helpers.dontExpectToSee('Logout')
  })

  it('shows the user name and logout button for an authenticated user', () => {
    helpers.logUserIn()

    helpers.expectToSee('johnDoe')
    helpers.expectToSee('Logout')
  })
})
