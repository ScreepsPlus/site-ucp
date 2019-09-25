import Vue from 'vue'
import { _axios } from './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

import MainLayout from './layouts/Main.vue'
import BlankLayout from './layouts/Blank.vue'

Vue.component('blank-layout', BlankLayout)
Vue.component('main-layout', MainLayout)

Vue.config.productionTip = false
var isLoggedMixin = {
  methods: {
    async checkIfLogged () {
      const { data } = await _axios.get('/api/auth/me')
      return data
    }
  }
}

new Vue({
  mixins: [isLoggedMixin],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
