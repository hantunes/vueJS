var data = {
  title: 'The  Instance',
  showParagraph: false
}

Vue.component('hello',{
  template:'<h1>Hello! CC</h1>'
});

var vm1 = new Vue({  
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The  Instance (Updated)');
      console.log(this.$refs.myButton);
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
     // alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.newProp = 'Val';
console.log(vm1.$data.title);

vm1.$refs.heading.innerText = "something else";

setTimeout ( function(){
 
  vm1.title = "Changed by timer";
 // vm1.show();
}
  ,3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The  Instance 2',
    showParagraph: false
  },
  methods: {
    onChange: function() {
     vm1.title = "Changed";
      
    }
  } 
  
});


var vm3 = new Vue({
el:'.hello',
  template:'<h1>Hello App33</h1>'
});

//vm3.$mount();
//document.getElementById('app3').appendChild(vm3.$el);