new Vue({
  el: '#exercise',
  data: {
    mClass: '',
    timer: ''
  },
  methods: {
    startEffect: function () {
      var vm = this;
      this.mClass = 'highlight';

      if (this.timer == '') {
        this.timer = setInterval(
          function () {
            vm.mClass = vm.mClass == 'highlight' ? 'shrink' : 'highlight';
          }, 5000);
      }
    }
  }
});