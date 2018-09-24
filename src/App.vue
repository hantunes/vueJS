<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                       <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <h1>Form</h1>
                    <hr>
                    <div class="form-group">
                         <app-input-name v-model="name"></app-input-name>
                    </div>

                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                               
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"                                 
                                  v-model="userData.password">
                    </div>                    

                    <div class="form-group">
                        <label for="storeData">Store Data</label>                       
                        <div id="on" @click="switched(true)" :class="{active: userData.storeData}">On</div>
                        <div id="off" @click="switched(false)" :class="{active: !userData.storeData}">Off</div>
                    </div>
                 
                </div>
                 <hr>
                    <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                
                    <button class="btn btn-primary" @click.prevent="Submited" >Submit! </button>
                    
                </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{name}} </p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password:{{userData.password}} </p>
                        <p>Store in Database?: {{userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import InputName  from "./InputName.vue";

export default {
  data() {
    return {
      userData: {
        name: "",       
        email: "",
        password: "",
        storeData: false
      },
      isSubmitted :false
    };
  },
  methods: {
    switched(isToStoreData) {
        this.userData.storeData = isToStoreData;
    },
    Submited() {
        this.isSubmitted = true;
    }
  },
  components: {
    appInputName: InputName
  }
};
</script>

<style scoped>

#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
