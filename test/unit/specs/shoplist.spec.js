import store from '@/store'
import moxios from 'moxios'
import router from '@/router'
import Helpers from './test.helpers.js'
import ShopList from '@/components/ShopList'
import ApiService from '@/common/api.service'

import { mount } from '@vue/test-utils'
import { FETCH_END } from '@/store/mutations.type'

ApiService.init()

describe('The nearby shop list', () => {
  var wrapper, helpers

  beforeEach(() => {
    moxios.install()

    wrapper = mount(ShopList, {
      store,
      router
    })

    helpers = new Helpers(wrapper)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('shows a message if no shop is available', (done) => {
    helpers.setFakeServer('shops?offset=0&limit=10', {
      shops: [],
      shopsCount: 0
    })

    wrapper.setProps({
      itemsPerPage: 10
    })

    wrapper.vm.fetchShops()

    moxios.wait(() => {
      helpers.expectToSee('No shops are here... yet.')
      done()
    })
  })

  it('shows the loading message while the request is being made and hides it after the response', (done) => {
    helpers.setFakeServer('shops?offset=0&limit=10', {
      shops: [],
      shopsCount: 0
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchShops()

    helpers.expectToSee('Loading shops...')

    moxios.wait(() => {
      helpers.dontExpectToSee('Loading shops...')
      done()
    })
  })

  it('shows the list of the shops if available', (done) => {
    helpers.setFakeServer('shops?offset=0&limit=10', {
      shops: [
        {
          id: 1,
          name: 'shop foo 1'
        },
        {
          id: 2,
          name: 'shop bar 2'
        }
      ],
      shopsCount: 2
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchShops()

    moxios.wait(() => {
      expect(wrapper.contains('.shops-list')).toBe(true)
      helpers.expectToSee('shop foo 1')
      helpers.expectToSee('shop bar 2')
      done()
    })
  })

  it('calculates the page numbers correctly', (done) => {
    helpers.setFakeServer('shops?offset=0&limit=10', {
      shops: [/* 52 shops */],
      shopsCount: 52
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchShops()

    moxios.wait(() => {
      expect(wrapper.vm.pages).toEqual([1, 2, 3, 4, 5, 6])
      done()
    })
  })

  it('calculates the pages offset correctly', (done) => {
    wrapper.setData({
      currentPage: 3
    })

    wrapper.setProps({
      itemsPerPage: 10
    })

    moxios.wait(() => {
      expect(wrapper.vm.listConfig.filters.offset).toBe(20)
      done()
    })
  })

  // the test passes but there is an error that shows up at the end of the test : UnhandledPromiseRejectionWarning
  // the source of the error is the refreshShops (in ShopActions.vue) we do after liking/unliking/disliking a shop,
  // so it sends another http request for the refresh that we dont handle in this test
  // we can't prevent the app from sending that request in the test so we are ignoring it for now.
  it('likes a shop in the nearby shops list', (done) => {
    helpers.setFakeServer('shops/1/favorite', {
      shop: {
        id: 1,
        name: 'shop 1',
        favorited: 1
      }
    })

    store.commit(FETCH_END, {
      shops: [
        {
          id: 1,
          name: 'shop 1',
          favorited: null
        }
      ],
      shopsCount: 1
    })

    moxios.wait(() => {
      helpers.expectButtonToBeEnabled('button.btn-like')

      wrapper.find('button.btn-like').trigger('click')

      moxios.wait(() => {
        helpers.expectButtonToBeDisabled('button.btn-like')
        done()
      })
    })
  })

  // the test passes but there is an error that shows up at the end of the test : UnhandledPromiseRejectionWarning
  // the source of the error is the refreshShops (in ShopActions.vue) we do after liking/unliking/disliking a shop,
  // so it sends another http request for the refresh that we dont handle in this test
  // we can't prevent the app from sending that request in the test so we are ignoring it for now
  it('unlikes a shop from the preferred shops list', (done) => {
    // the result from unliking a shop
    helpers.setFakeServer('shops/1/favorite', {
      shop: {
        id: 1,
        name: 'shop 1',
        favorited: null
      }
    })
    // the results from the preferred-shops request
    helpers.setFakeServer('shops?offset=0&limit=10&favorited=johnDoe', {
      shops: [
        {
          id: 1,
          name: 'shop 1',
          favorited: 1
        }
      ],
      shopsCount: 1
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchShops()

    wrapper.setProps({
      // the authenticated user name
      favorited: 'johnDoe'
    })

    moxios.wait(() => {
      helpers.expectButtonToBeEnabled('button.btn-unlike')

      wrapper.find('button.btn-unlike').trigger('click')

      moxios.wait(() => {
        helpers.expectButtonToBeDisabled('button.btn-unlike')
        done()
      })
    })
  })

  // the test passes but there is an error that shows up at the end of the test : UnhandledPromiseRejectionWarning
  // the source of the error is the refreshShops (in ShopActions.vue) we do after liking/unliking/disliking a shop,
  // so it sends another http request for the refresh that we dont handle in this test
  // we can't prevent the app from sending that request in the test so we are ignoring it for now
  it('dislikes a shop in the nearby shops list', (done) => {
    // the result from unliking a shop
    // clock = sinon.useFakeTimers()
    helpers.setFakeServer('shops/1/dislike', {
      shop: {
        id: 1,
        name: 'shop 1',
        favorited: 0
      }
    })

    store.commit(FETCH_END, {
      shops: [
        {
          id: 1,
          name: 'shop 1',
          favorited: null
        }
      ],
      shopsCount: 1
    })

    moxios.wait(() => {
      expect(wrapper.find('button.btn-dislike').attributes().disabled).toBeFalsy()

      wrapper.find('button.btn-dislike').trigger('click')

      moxios.wait(() => {
        expect(wrapper.find('button.btn-dislike').attributes().disabled).toBeTruthy()
        done()
      })
    })
  })
})
