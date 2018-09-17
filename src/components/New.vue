<template>
    <div class="container">
        <div >
           <h3>New Quaote</h3>
           <button @click="counter++">Increment</button>
           <p>{{counter}}</p>
        </div>
    </div>
</template>

<script>

export default {
  data:function(){
      return{
          counter:0
      }
  },
  destroyed(){
      console.log('Destroyed!');
  },  
  deactivated(){
      console.log('Deactivated');
  },
   activated(){
      console.log('Activated');
  }
};
</script>

<style>
</style>