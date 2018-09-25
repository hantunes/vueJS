import Vue from 'vue'
import App from './App.vue'

//filtro global 
 Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
 });

 // um Global mixin é adicionado a todoas as instancias da app --normalmente n se usa isto 
 Vue.mixin({
   created(){

    console.log("Global Mixin - Created Hook");
   }
 });

new Vue({
  el: '#app',
  render: h => h(App)
})
