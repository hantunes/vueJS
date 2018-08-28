new Vue({
  el: '#exercise',
  data: {
    mClass: '',
    timer: '',
    color: 'blue',
    sizeSmall: false,
    userClass:'',
    user2Class:'',
    useMyClass:false
    
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
    }
  }
});