import Vue from 'vue'
import './plugins/bootstrap-vue'
// import VueGoogleMaps from './plugins/google-maps'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
// Vue.prototype.$google = VueGoogleMaps
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
