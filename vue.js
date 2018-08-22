new Vue({
	el: '#app',
  data: {
    title: 'cc!',
    link: 'http://google.pt',
    finishLink: '<a href="http://google.pt">Google</a>',
    counter:0,
    x:0,
    y:0

  },
  methods: {
  	changeGreeting: function(event) {
    	this.title = event.target.value;
    },
    sayHello: function(event) {
      this.title="HHH";      
    	return this.title;
    },
    increase: function(step,event)
    {
      this.counter += step;
    },
    updateCoordinates: function(event){

      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event){

     alert("alert");
    }
  }
});