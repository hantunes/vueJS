new Vue({
	el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.pt',
    finishLink: '<a href="http://google.pt">Google</a>'
  },
  methods: {
  	changeGreeting: function(event) {
    	this.title = event.target.value;
    },
    sayHello: function(event) {
      this.title="HHH";      
    	return this.title;
    }
  }
});