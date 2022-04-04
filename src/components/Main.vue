<template>
  <main class="px-3 text-white">
    <section id="movies" v-if="hasSearched">
      <h2>Movies:</h2>
      <span v-if="movies.length == 0"> No results found</span>
      <Content :SearchedList="movies" />
    </section>
    <section id="tv-series" v-if="hasSearched">
      <h2>Series:</h2>
      <span v-if="series.length == 0"> No results found</span>
      <Content :SearchedList="series" />
    </section>
  </main>
</template>

<script>
import Content from "./main-components/Content.vue";

export default {
  name: "indexMain",
  components: {
    Content,
  },
  props: {
    hasSearched: Boolean,
    series: Array,
    movies: Array,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main-style.scss";
</style>
