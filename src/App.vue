<template>
  <div id="app">
    <Header
      @moviesSearchSent="getSearchedMovie"
      @seriesSearchSent="getSearchedSeries"
      @madeSearch="checkHasSearched"
      @selectedGenre="updateGenre"
    />
    <Loader v-if="(!searchedMovies || !searchedSeries) && hasSearched" />
    <Main
      v-else
      :series="searchedSeries"
      :movies="searchedMovies"
      :hasSearched="hasSearched"
      :hasSelectedGenre="hasSelectedGenre"
      :genre="genre"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Loader from "./components/main-components/Loader.vue";

export default {
  name: "App",
  data() {
    return {
      searchedMovies: null,
      searchedSeries: null,
      hasSearched: false,
      hasSelectedGenre: false,
      genre: null,
    };
  },
  components: {
    Header,
    Main,
    Loader,
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
    updateGenre(selectedGenre) {
      this.genre = selectedGenre;
      console.log(selectedGenre);
      this.hasSelectedGenre = true;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
