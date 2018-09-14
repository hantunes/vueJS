import Vue from 'vue'
import App from './App.vue'



export const eventBus = new Vue({
  methods:{
    changeStatus(id,status){
      this.$emit('statusWasEdited',id,status);
    },
    itemClicked(id,status){     
     // alert("MAIN id: " + id + "status: " + status);
     this.$emit('itemClickStatus',id,status);
     //alert("Status: " + status);
    }
   

  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
