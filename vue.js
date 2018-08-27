new Vue({
	el: '#app',
  data: {
    title: 'cc!',
    link: 'http://google.pt',
    finishLink: '<a href="http://google.pt">Google</a>',
    counter:0,
    secondCounter:0,
    x:0,
    y:0,
    attachRed:false,
    color:'green'
  },
  computed:{
    output : function(){
      console.log('computed');
      return this.counter > 5 ? 'Greater 5' :'Smaller than 5';
    },
    divClasses :function(){
      return {
        red:this.attachRed,
        blue: !this.attachRed
      };
    }

  },
  watch:{
    counter : function(value){
      var vm  = this;
      setTimeout (
        function()
        {
          vm.counter = 0; 
        }
        ,2000)
    }
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
    },
    result : function()
    {
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' :'Smaller than 5';
    }
  }
});