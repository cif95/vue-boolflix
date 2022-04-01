<template>
  <div id="app">
    <Header @searchSent="getSearchedMovie" />
    <Main :movies="searchedMovies" />
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
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
