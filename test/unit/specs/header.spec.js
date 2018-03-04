import { mount } from '@vue/test-utils'
import Header from '@/components/Header'
import router from '@/router'

describe('The Header', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      router
    })
  })

  it('shows Sign in and Sign up buttons for an unauthenticated user', () => {
    logUserOut()

    expectToSee('Sign up')
    expectToSee('Sign in')
  })

  it('hides Sign in and Sign up buttons for an authenticated user', () => {
    logUserIn()

    dontExpectToSee('Sign up')
    dontExpectToSee('Sign in')
  })

  it('hides the user name and logout button for an unauthenticated user', () => {
    logUserOut()

    expect(wrapper.contains('#header-right-menu')).toBe(false)
    dontExpectToSee('Logout')
  })

  it('shows the user name and logout button for an authenticated user', () => {
    logUserIn()

    expectToSee('johnDoe')
    expectToSee('Logout')
  })

  let logUserIn = () => {
    wrapper.setProps({
      isAuthenticated: true,
      currentUser: {
        email: 'johnDoe@foo.bar'
      }
    })
  }

  let logUserOut = () => {
    wrapper.setProps({
      isAuthenticated: false,
      currentUser: {}
    })
  }

  let expectToSee = text => {
    expect(wrapper.text()).toContain(text)
  }

  let dontExpectToSee = text => {
    expect(wrapper.text()).not.toContain(text)
  }
})
