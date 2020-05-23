import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Default from '@/layouts/Default.vue'
import Error from '@/layouts/Error.vue'

Vue.component('Default-layout', Default)
Vue.component('Error-layout', Error)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
