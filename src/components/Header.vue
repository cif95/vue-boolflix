<template>
  <header>
    <div class="input-group mb-3 px-3 py-5">
      <button @click="getMovies()" class="btn ms-btn" type="button">
        Cerca
      </button>
      <input
        @keydown.enter="getMovies()"
        v-model="searchInput"
        type="text"
        class="form-control"
        placeholder="Cerca.."
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
      hasSearched: false,
      searchInput: "",
      apiKey: "?api_key=45d1fef94b225203d677fc5ce9e00535&query=",
      apiBaseUrl: "https://api.themoviedb.org/3/search/",
    };
  },
  methods: {
    getMovies() {
      this.hasSearched = true;
      this.$emit("madeSearch", this.hasSearched);
      this.sendGetRequest(
        `${this.apiBaseUrl}movie${this.apiKey}${this.searchInput}`,
        this.movies,
        "moviesSearchSent"
      );
      this.sendGetRequest(
        `${this.apiBaseUrl}tv${this.apiKey}${this.searchInput}`,
        this.series,
        "seriesSearchSent"
      );
      this.searchInput = "";
    },
    sendGetRequest(uri, dataEl, nameEvent) {
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

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
button {
  color: white;
  background-color: $brandColor;
}
</style>
