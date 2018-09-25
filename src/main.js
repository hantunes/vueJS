import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {

  bind(el, binding, vnode) {
    //el.style.backgroundColor="green";
    //el.style.backgroundColor= binding.value;


    var delay = 0;

    //usar modifiers (neste caso delayed)
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      //usar arguments neste caso o background 
      if (binding.arg == 'background')
        el.style.backgroundColor = binding.value;
      else
        el.style.color = binding.value;
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})