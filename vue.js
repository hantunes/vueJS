
var cmp = {

  // data tem de ser um função
  data: function(){
    return{
    status:"Hello"
    }
  },
  template: '<p> Server status: {{status}} (<button @click=ChangeStatus> Change Status</button>)</p>',
  methods: {
    ChangeStatus: function()
    {
      this.status = 'Normal';
    }
  }
};


new Vue({
  el: '#app',
  components:{
    'my-cmp':cmp
  }
 
});

new Vue({
	el: '#app2'
 
});