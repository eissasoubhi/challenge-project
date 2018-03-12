// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from '@/store'

import ApiService from '@/common/api.service'
import ErrorFilter from '@/common/error.filter'

require('bootstrap')
global.jQuery = require('jquery')
import 'bootstrap/dist/css/bootstrap.min.css'
require('font-awesome/css/font-awesome.min.css')

Vue.config.productionTip = false
Vue.filter('error', ErrorFilter)

ApiService.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
