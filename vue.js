new Vue({
  el: '#exercise',
  data: {
    cClass:''
  },
  methods: {
    startEffect: function() {    
        
      console.log("ENTROU");
      var vm = this;
      setInterval  (
        function()
        {
          console.log("I");
          vm.cClass= vm.cClass == '.highlight' ? '.shrink':'.highlight';
        }
        ,2000);
    }

    }  
});
