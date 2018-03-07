import { mount } from '@vue/test-utils'
import ShopList from '@/components/ShopList'
import store from '@/store'
import moxios from 'moxios'
import router from '@/router'
import ApiService from '@/common/api.service'
import { FETCH_END } from '@/store/mutations.type'
import Helpers from './test.helpers.js'

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
          name: 'shop 1'
        },
        {
          id: 2,
          name: 'shop 2'
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
      expect(wrapper.html()).toContain('<h4> shop 1 </h4>')
      expect(wrapper.html()).toContain('<h4> shop 2 </h4>')
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

  it('likes a shop', (done) => {
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
      expect(wrapper.find('button.btn-like').attributes().disabled).toBeFalsy()

      wrapper.find('button.btn-like').trigger('click')

      moxios.wait(() => {
        expect(wrapper.find('button.btn-like').attributes().disabled).toBeTruthy()
        done()
      })
    })
  })

  it('dislikes a shop', (done) => {
    helpers.setFakeServer('shops/1/favorite', {
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
