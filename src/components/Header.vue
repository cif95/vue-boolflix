<template>
  <header>
    <div class="input-group mb-3 p-5">
      <button
        @click="getMovies()"
        class="btn btn-outline-primary"
        type="button"
      >
        Cerca
      </button>
      <input
        v-model="searchInput"
        type="text"
        class="form-control"
        placeholder="scrivi il nome del film da cercare.."
      />
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "indexHeader",
  data() {
    return {
      movies: "",
      searchInput: "",
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=45d1fef94b225203d677fc5ce9e00535&language=it-IT&page=2&include_adult=false&query=${this.searchInput}`
        )
        .then((result) => {
          this.movies = result.data.results;
          console.log(this.movies);
          this.$emit("searchSent", this.movies);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped></style>
