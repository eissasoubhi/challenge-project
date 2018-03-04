import { mount } from '@vue/test-utils'
import Register from '@/views/Register'
import store from '@/store'
import moxios from 'moxios'
import vue from 'vue'
import router from '@/router'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'
import ErrorFilter from '@/common/error.filter'

vue.filter('error', ErrorFilter)

describe('The register page', () => {
  var wrapper

  beforeEach(() => {
    moxios.install()

    wrapper = mount(Register, {
      store,
      router
    })
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('registers a user and logs them in to the application', (done) => {
    setFakeServer('users', {
      user: {
        email: 'foo@bar.com',
        token: 'foobartoken'
      }
    })

    submitFormWith({
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
    setFakeServer('users', {
      user: {
        email: 'foo@bar.com',
        token: 'foobartoken'
      }
    })

    submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      expect(JwtService.getToken()).toBe('foobartoken')
      done()
    })
  })

  it('shows the message if error have occurred', (done) => {
    setFakeServer('users', {
      errors: {
        'invalid password': ['password too short']
      }
    }, 401)

    submitFormWith({
      'input#email': 'foo@bar.com',
      'input#password': 'secret'
    })

    moxios.wait(() => {
      expectToSee('invalid password password too short')
      done()
    })
  })

  let type = (text, selector) => {
    let node = wrapper.find(selector)

    node.element.value = text
    node.trigger('input')
  }

  let setFakeServer = (uri, response, status = 200) => {
    moxios.stubRequest(API_URL + '/' + uri, {
      status: status,
      response: response
    })
  }

  let submitFormWith = (data) => {
    for (let key in data) {
      type(data[data], key)
    }

    wrapper.find('button#submit').trigger('submit')
  }

  let expectToSee = text => {
    expect(wrapper.text()).toContain(text)
  }
})
