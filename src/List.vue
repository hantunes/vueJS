<template>
    <div >
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" >{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["Apple", "Banana", "Manga", "Melon"],
      filterText: ""
    };
  },
  computed: {
    // usamos computed para o "filtro" da lista para n estrar sempre a "recalcular"
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>
</style>
