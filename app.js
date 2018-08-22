
new Vue({
	el: '#exercise',
  data: {  
   name:'Hugo',
   age: '35',
   linkImage: 'https://cdn-images-1.medium.com/max/1250/1*OrjCKmou1jT4It5so5gvOA.jpeg'
  },
  methods: {
    
    getRandomFloat(event) {
      return Math.random();
    },
  }
});