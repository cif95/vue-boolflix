<template>
  <main class="p-5 text-white">
    <section id="movies" v-if="hasSearched">
      <h4>Movies:</h4>
      <span v-if="!checkLists(movies, filteredMovies(genre))">
        No results found</span
      >
      <Content
        :SearchedList="hasSelectedGenre ? filteredMovies(genre) : movies"
      />
    </section>
    <section id="tv-series" v-if="hasSearched">
      <h4>Series:</h4>
      <span v-if="!checkLists(series, filteredSeries(genre))">
        No results found</span
      >
      <Content
        :SearchedList="hasSelectedGenre ? filteredSeries(genre) : series"
      />
    </section>
    <section id="popular-movies">
      <h4>Most popular:</h4>
      <Content :SearchedList="popularMovies" />
    </section>
  </main>
</template>

<script>
import Content from "./main-components/Content.vue";
import axios from "axios";

export default {
  name: "indexMain",
  data: function () {
    return {
      popularMovies: null,
    };
  },
  components: {
    Content,
  },
  props: {
    hasSearched: Boolean,
    hasSelectedGenre: Boolean,
    series: Array,
    movies: Array,
    genre: Number,
  },
  methods: {
    filteredSeries(genre) {
      return this.series.filter((element) => element.genre_ids.includes(genre));
    },
    filteredMovies(genre) {
      return this.movies.filter((element) => element.genre_ids.includes(genre));
    },
    checkLists(firstList, secondList) {
      if (firstList.length !== 0 || secondList.length !== 0) return true;
    },
  },
  created() {
    // getting popular movies
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=45d1fef94b225203d677fc5ce9e00535&language=en-US"
      )
      .then((result) => {
        this.popularMovies = result.data.results;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main-style.scss";
</style>
