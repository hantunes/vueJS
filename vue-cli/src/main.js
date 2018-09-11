//npm install -g vue-cli
// https://github.com/vuejs/vue-cli
//vue init webpack-simple  vue-cli
//cd .\vue-cli\
//npm install
// npm run dev

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
