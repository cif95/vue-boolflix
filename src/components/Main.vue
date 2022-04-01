<template>
  <main>
    <ul>
      <li v-for="(element, index) in movies" :key="index">
        <h2>Title : {{ element.title }}</h2>
        <h3>Original Title: {{ element.original_title }}</h3>
        <p>Language: {{ element.original_language }}</p>
        <p>Vote: {{ element.vote_count }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  name: "indexMain",
  props: {
    movies: Array,
  },
  // data() {
  //   return {
  //     movies: [],
  //   };
  // },
  // methods: {
  //   getMovies() {
  //     axios
  //       .get(
  //         "https://api.themoviedb.org/3/search/movie?api_key=45d1fef94b225203d677fc5ce9e00535&language=it-IT&page=2&include_adult=false&query={{this.searchedMovieTitle}}"
  //       )
  //       .then((result) => {
  //         this.movies = result.data.results;
  //         console.log(this.movies);
  //       })
  //       .catch((error) => console.error(error));
  //   },
  // },
  // computed: {
  //   filteredMovies() {
  //     return this.movies.filter((element) => {
  //       return element.title
  //         .toLowerCase()
  //         .includes(this.searchedMovieTitle.toLowerCase());
  //     });
  //   },
  // },
  // created() {
  //   this.getMovies();
  // },
};
</script>

<style lang="scss" scoped></style>
