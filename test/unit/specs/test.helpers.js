import moxios from 'moxios'
import { API_URL } from '@/common/config'

export default class TestHelpers {
  constructor (wrapper) {
    this.wrapper = wrapper
  }

  setFakeServer (uri, response, status = 200) {
    moxios.stubRequest(API_URL + '/' + uri, {
      status: status,
      response: response
    })
  }

  expectToSee (text) {
    expect(this.wrapper.text()).toContain(text)
  }

  dontExpectToSee (text) {
    expect(this.wrapper.text()).not.toContain(text)
  }

  logUserIn () {
    this.wrapper.setProps({
      isAuthenticated: true,
      currentUser: {
        email: 'johnDoe@foo.bar'
      }
    })
  }

  logUserOut () {
    this.wrapper.setProps({
      isAuthenticated: false,
      currentUser: {}
    })
  }

  type (text, selector) {
    let node = this.wrapper.find(selector)

    node.element.value = text
    node.trigger('input')
  }

  submitFormWith (data) {
    for (let key in data) {
      this.type(data[data], key)
    }

    this.wrapper.find('button#submit').trigger('submit')
  }
}
