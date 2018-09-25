export const countLengthMixin = {
    data() {
        return {
          text: "Hello World"
        };
      },
      computed: {
        
        countsLengthMixin() {
          return this.text + " (" +  this.text.length + ")";
        }
      },
      created(){ 
          console.log("Created");
      }
    }