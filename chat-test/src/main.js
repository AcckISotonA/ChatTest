import Vue from 'vue'
import App from './App.vue'
import '@/assets/js/websocket'
import store from './store/websocket'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
