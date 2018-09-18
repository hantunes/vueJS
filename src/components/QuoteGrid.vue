<template>
    <div class="row">
         <app-quote v-for='(quote, index) in quotes' @click.native="deleteQuote(index)" >{{quotes}}</app-quote>
    </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods:{
      deleteQuote(index)
      {
        this.$emit("QuoteDeleted",index);
      }
  }

};
</script>

<style>
</style>