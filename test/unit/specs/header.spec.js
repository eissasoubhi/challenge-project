import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '../../../src/components/Header'

describe('The Header', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it('shows Sign in and Sign up buttons for an unauthenticated user', () => {
    logUserOut()

    expect(wrapper.text()).toContain('Sign up')
    expect(wrapper.text()).toContain('Sign in')
  })

  it('hides Sign in and Sign up buttons for an authenticated user', () => {
    logUserIn()

    expect(wrapper.text()).not.toContain('Sign up')
    expect(wrapper.text()).not.toContain('Sign in')
  })

  it('hides the user name and logout button for an unauthenticated user', () => {
    logUserOut()

    expect(wrapper.contains('#header-right-menu')).toBe(false)
    expect(wrapper.text()).not.toContain('Logout')
  })

  it('shows the user name and logout button for an authenticated user', () => {
    logUserIn()

    expect(wrapper.text()).toContain('johnDoe')
    expect(wrapper.text()).toContain('Logout')
  })

  let logUserIn = () => {
    wrapper.setProps({
      isAuthenticated: true,
      currentUser: {
        name: 'johnDoe'
      }
    })
  }

  let logUserOut = () => {
    wrapper.setProps({
      isAuthenticated: false,
      currentUser: {}
    })
  }
})
