import { mount } from '@vue/test-utils'
import ShopList from '@/components/ShopList'
import store from '@/store'
import moxios from 'moxios'
import router from '@/router'
import { API_URL } from '@/common/config'

describe('The nearby shop list', () => {
  var wrapper

  beforeEach(() => {
    moxios.install()

    wrapper = mount(ShopList, {
      store,
      router
    })
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('shows a message if no shop is available', (done) => {
    setFakeServer('shops?offset=0&limit=10', {
      shops: [],
      shopsCount: 0
    })

    wrapper.setProps({
      itemsPerPage: 10
    })

    wrapper.vm.fetchshops()

    moxios.wait(() => {
      expectToSee('No shops are here... yet.')
      done()
    })
  })

  it('shows the loading message while the request is being made and hides it after the response', (done) => {
    setFakeServer('shops?offset=0&limit=10', {
      shops: [],
      shopsCount: 0
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchshops()

    expectToSee('Loading shops...')

    moxios.wait(() => {
      dontExpectToSee('Loading shops...')
      done()
    })
  })

  it('shows the list of the shops if available', (done) => {
    setFakeServer('shops?offset=0&limit=10', {
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
    wrapper.vm.fetchshops()

    moxios.wait(() => {
      expect(wrapper.contains('.shops-list')).toBe(true)
      expect(wrapper.html()).toContain('<h4> shop 1 </h4>')
      expect(wrapper.html()).toContain('<h4> shop 2 </h4>')
      done()
    })
  })

  it('calculates the page numbers correctly', (done) => {
    setFakeServer('shops?offset=0&limit=10', {
      shops: [/* 52 shops */],
      shopsCount: 52
    })

    wrapper.setProps({
      itemsPerPage: 10
    })
    wrapper.vm.fetchshops()

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
    setFakeServer('shops/1/favorite', {
      shop: {
          id: 1,
          name: 'shop 1',
          favorited: 1
        }
    })

    store.commit('fetch_end', {
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
    setFakeServer('shops/1/favorite', {
      shop: {
          id: 1,
          name: 'shop 1',
          favorited: 0
        }
    })

    store.commit('fetch_end', {
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

  let setFakeServer = (uri, response, status = 200) => {
    moxios.stubRequest(API_URL + '/' + uri, {
      status: status,
      response: response
    })
  }

  let expectToSee = text => {
    expect(wrapper.text()).toContain(text)
  }

  let dontExpectToSee = text => {
    expect(wrapper.text()).not.toContain(text)
  }
})
