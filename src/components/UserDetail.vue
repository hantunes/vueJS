<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name:{{myName}}</p>
        <p>User name:{{switchName()}}</p>
    </div>
</template>

<script>
 export default {
     props:{ // props que podemos passar do pai 
        // myName:[String,Array] // podemos definir varios tipos para o tipo do myNAme
         myName:{
             type:String,
             //required:true,
             default:"xpto"
         }
        //   myName:{
        //      type:Object,
        //     default:function(){
        //         return {
        //          name:'Max'
        //      }
        //     }     
     },
     methods:{
         switchName()
         {
             return this.myName.split("").reverse().join("");
         }
     }
 }     
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
