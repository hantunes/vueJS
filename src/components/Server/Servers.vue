<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <servers-Item v-for="sI in servers" :myIndex="sI.id" :myStatus="sI.status"> </servers-Item>
        </ul>
    </div>
</template>

<script>
import ServersItem from './ServersItem.vue';
import {eventBus } from '../../main';

 export default {
        data: function(){
            return {
                servers:[
                    {id:1,status:'Normal'},
                    {id:2,status:'Critical'},
                    {id:3,status:'Unknown'},
                    {id:4,status:'Normal'}
                ]
            };
        },
        components: {
            serversItem: ServersItem
        },
        created(){
            eventBus.$on('statusWasEdited',(id,status)=>{
                this.servers[id-1].status = status;
           // this.myStatus = status;
          // alert("ID: " + id + "Status: " + status);
           
            });
        }
    }
</script>

<style>

</style>
