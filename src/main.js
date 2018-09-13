import Vue from 'vue'
import App from './App.vue'
import Server from './Server.vue'

Vue.component('server-info',Server);

new Vue({
  el: '#app',
  render: h => h(App)
})
