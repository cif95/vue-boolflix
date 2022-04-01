<template>
  <header>
    <div class="input-group mb-3 p-5">
      <button class="btn btn-outline-primary" type="button">Cerca</button>
      <input
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
      movies: [],
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=45d1fef94b225203d677fc5ce9e00535&language=it-IT&page=2&include_adult=false&query=1"
        )
        .then((result) => {
          // this.mov = result.data.response;
          console.log(result);
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped></style>
