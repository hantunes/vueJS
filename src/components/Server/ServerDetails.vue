<template>
    <div class="col-xs-12 col-sm-6" v-show="itemId!=''">
        <!-- <p>Server Details are currently not updated</p> -->
        status: {{itemStatus}}        
         <button @click="changeStatus" >Change Status</button>
    </div>

</template>

<script>

import {eventBus } from '../../main';

export default {
 data: function(){
            return {
               itemStatus:"Server Details are currently not updated",
               itemId:""
            };
        },
   methods:{
       changeStatus() {
            this.itemStatus = 'Normal';            
            eventBus.changeStatus(this.itemId ,this.itemStatus);
         },
   },
     created(){
            eventBus.$on('itemClickStatus',(id,status)=>{
            this.itemStatus = status;
            this.itemId = id;
            });
     }
};
</script>

<style>

</style>
