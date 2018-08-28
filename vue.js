new Vue({
  el: '#exercise',
  data: {
    mClass: '',
    timer: '',
    timerProgress: '',
    color: 'blue',
    sizeSmall: false,
    userClass:'',
    user2Class:'',
    useMyClass:false,
    userInput5:'',
    mWith:0
   
    
  },
  methods: {
    startEffect: function () {
      var vm = this;
      this.mClass = 'highlight';

      if (this.timer == '') {
        this.timer = setInterval(
          function () {
            vm.mClass = vm.mClass == 'highlight' ? 'shrink' : 'highlight';
            vm.sizeSmall = vm.sizeSmall == true ? false: true;
          }, 2000);
      }
    },
    startProgress : function()
    {
      
      if (this.timerProgress == '') {
        var vm = this;
        this.timerProgress = setInterval(
          function () {
          console.log("TIMER");
              if(vm.mWith <100)
               vm.mWith = vm.mWith +1;
              else
              clearInterval(vm.timerProgress);

          }, 100);
      }
    }
  }
});