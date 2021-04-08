import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import store from '@/store/websocket.js'

Vue.use(VueNativeSock, 'ws://skade.cc:38080', {
  store,
  format: 'json',
  reconnection: true,
  reconnectionDelay: 3000
})
