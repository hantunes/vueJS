<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent= 'appQuote'">Quote</button>
                <button @click="selectedComponent= 'appAuthor'">Author</button>
                <button @click="selectedComponent= 'appNew'">New</button>
                
                <hr>
                <p>{{selectedComponent}}</p>
               <!-- <app-quote >
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p >A winderfull Quote!</p>

               </app-quote> -->
                <keep-alive>   <!--Para não deixar fazer o destroy do componente  -->
                        <component :is="selectedComponent">
                        <p>Default Content</p>
                        </component>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
 import Quote from "./components/Quote.vue";
 import Author from "./components/Author.vue";
 import New from "./components/New.vue";
export default {
  data: function() {
    return {
      quoteTitle: "The Quote1",
      selectedComponent:'appQuote'
    };
  },
  components: {
    appQuote: Quote,
     appAuthor: Author,
     appNew:New
  }
};
</script>

<style>
</style>
