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
      series: "",
      searchInput: "",
    };
  },
  methods: {
    getMovies() {
      this.sendRequest(
        `https://api.themoviedb.org/3/search/movie?api_key=45d1fef94b225203d677fc5ce9e00535&language=it-IT&page=2&include_adult=false&query=${this.searchInput}`,
        this.movies,
        "moviesSearchSent"
      );
      this.sendRequest(
        `https://api.themoviedb.org/3/search/tv?api_key=45d1fef94b225203d677fc5ce9e00535&language=it_IT&query=${this.searchInput}`,
        this.series,
        "seriesSearchSent"
      );
    },
    sendRequest(uri, dataEl, nameEvent) {
      axios
        .get(uri)
        .then((result) => {
          dataEl = result.data.results;
          console.log(dataEl);
          this.$emit(nameEvent, dataEl);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped></style>
