<template>
  <div id="app">
    <Header @searchSent="getSearchedMovie" />
    <Main :searchedMovieTitle="searchedMovie" />
    <p class="text-danger">{{ searchedMovie }}</p>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      searchedMovie: "",
    };
  },
  components: {
    Header,
    Main,
  },
  methods: {
    getSearchedMovie(searchInput) {
      this.searchedMovie = searchInput;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
