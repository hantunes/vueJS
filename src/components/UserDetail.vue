<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name:{{myName}}</p>
        <p>User name:{{switchName()}}</p>
        <p>Age:{{userAge}}</p>
        <button @click="resetName"> Reset the Name </button>
        <button @click="resetFn()"> Reset the Name Parent </button>
    </div>
</template>

<script>
import {eventBus } from '../main';
 export default {
     props:{ // props que podemos passar do pai 
        // myName:[String,Array] // podemos definir varios tipos para o tipo do myNAme
         myName:{
             type:String,
             //required:true,
             default:"xpto"
         },
         resetFn: Function,
         userAge:Number
        //   myName:{
        //      type:Object,
        //     default:function(){
        //         return {
        //          name:'Max'
        //      }
        //     }     
     },
     methods:{
         switchName() {
             return this.myName.split("").reverse().join("");
         },
          resetName() {              
             this.myName = "Max";
             this.$emit('nameWasReset',this.myName);
         }
     },
     created(){
            eventBus.$on('ageWasEdited',(age)=>{
            this.userAge = age;
            });
     }
 }     
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
