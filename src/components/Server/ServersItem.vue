<template>
    <li  class="list-group-item"  @click="serverItemClicked" > 
        Server #{{ myIndex }}                
        Status #{{ myStatus }}
    </li>     
</template>

<script>
import {eventBus } from '../../main';

export default {
  props: {   
    myIndex: {
      type: Number,
      required: true
    },
    myStatus: {
      type: String,
      required: true
    }
  },
   methods:{
         serverItemClicked() {
            eventBus.itemClicked(this.myIndex,this.myStatus);
         }
   }
};
</script>

<style>
</style>
