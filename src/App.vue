<template>
  <div id="app">
    <Header
      @moviesSearchSent="getSearchedMovie"
      @seriesSearchSent="getSearchedSeries"
      @madeSearch="checkHasSearched"
    />
    <main>
      <section id="movies" v-if="hasSearched">
        <h2 :isSearchDone="hasSearched">Movies:</h2>
        <span v-if="searchedMovies.length == 0"> No results found</span>
        <Content :SearchedList="searchedMovies" />
      </section>
      <section id="tv-series" v-if="hasSearched">
        <h2 :isSearchDone="hasSearched">Series:</h2>
        <span v-if="searchedSeries.length == 0"> No results found</span>
        <Content :SearchedList="searchedSeries" />
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  data() {
    return {
      searchedMovies: [],
      searchedSeries: [],
      hasSearched: "",
    };
  },
  components: {
    Header,
    Content,
  },
  methods: {
    getSearchedMovie(movies) {
      this.searchedMovies = movies;
    },
    getSearchedSeries(series) {
      this.searchedSeries = series;
    },
    checkHasSearched(hasSearched) {
      this.hasSearched = hasSearched;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
