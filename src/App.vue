<template>
  <div id="app">
    <Header
      @moviesSearchSent="getSearchedMovie"
      @seriesSearchSent="getSearchedSeries"
    />
    <Main :movies="searchedMovies" :series="searchedSeries" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      searchedMovies: [],
      searchedSeries: [],
    };
  },
  components: {
    Header,
    Main,
  },
  methods: {
    getSearchedMovie(movies) {
      this.searchedMovies = movies;
    },
    getSearchedSeries(series) {
      this.searchedSeries = series;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
