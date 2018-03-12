import moxios from 'moxios'
import { API_URL } from '@/common/config'
import { PURGE_AUTH, SET_AUTH } from '@/store/mutations.type'

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
    this.wrapper.vm.$store.commit(SET_AUTH, {
      email: 'johnDoe@foo.bar',
      'token': 'foobarToken'
    })
  }

  logUserOut () {
    this.wrapper.vm.$store.commit(PURGE_AUTH)
  }

  /**
   * type a text in an element of the current wrapper
   */
  type (text, selector) {
    let node = this.wrapper.find(selector)

    node.element.value = text
    node.trigger('input')
  }

  /**
   * submit a form with some data
   */
  submitFormWith (data) {
    for (let key in data) {
      this.type(data[data], key)
    }

    this.wrapper.find('button#submit').trigger('submit')
  }

  expectButtonToBeDisabled (selector) {
    expect(this.wrapper.find(selector).attributes().disabled).toBeTruthy()
  }

  expectButtonToBeEnabled (selector) {
    expect(this.wrapper.find(selector).attributes().disabled).toBeFalsy()
  }

  click (selector) {
    this.wrapper.find(selector).trigger('click')
  }
}
