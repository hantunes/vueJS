<template>
    <div>
        <div class="nameDivs">
        <label for="FirstName"> First Name</label>
        <input
                type="text"
                id="FirstName"
                class="form-control"
                v-on:change="changeFirstName(firstName)"
                v-model="firstName">
    </div>   
    
    <div class="nameDivs">
        <label for="LastName"> Last Name</label>
        <input
                type="text"
                id="LastName"
                class="form-control"
                v-on:change="changeSecondName(secondName)"
                v-model="secondName">
    </div>      
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      secondName: ""
    };
  },
  props: ["value"], //value é o
  methods: {
    changeFirstName: function(fName) {
      this.firstName = fName;
      this.$emit("input",  this.firstName + " "+ this.secondName);
    },
     changeSecondName: function(sName) {
      this.secondName = sName;
      this.$emit("input",  this.firstName + " "+ this.secondName);
    }
  }
};
</script>

<style scoped>
.nameDivs {
  display: inline-block;
}
</style>