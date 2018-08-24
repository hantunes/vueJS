
new Vue({
	el: '#exercise',
  data: {  
    value: 0,
    result :''
  },
  watch:{
    value : function(value){
      this.result = value == 37? 'done':'not there yet';    
    },
    result : function(value){
      
       var vm  = this;
       setTimeout (
         function()
         {
           vm.result = ''; 
         }
         ,5000)
 
     }
  }
});
