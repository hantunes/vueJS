
new Vue({
	el: '#exercise',
  data: {  
    value: ''
  },
  methods: {
    
    showAlert:function(event) {
      alert("Button Clicked");
    },
    storeKey:function(event) {
     this.value=  event.target.value;
    }
  }
});
