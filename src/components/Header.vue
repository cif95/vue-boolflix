<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand-lg">
      <div class="container-fluid py-1 px-5">
        <a class="navbar-brand fs-1">Boolflix</a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="d-flex">
            <button
              @click="getMoviesAndSeries()"
              class="btn ms-btn"
              type="button"
            >
              Cerca
            </button>
            <input
              @keydown.enter="getMoviesAndSeries()"
              v-model="searchInput"
              type="text"
              class="form-control mx-2"
              placeholder="Cerca.."
            />
            <select v-model="selectedLanguage" class="form-select w-25">
              <option value="">Select Language</option>
              <option
                :value="language.iso_639_1"
                v-for="(language, index) in availableLanguages"
                :key="index"
              >
                {{ language.english_name }}
              </option>
            </select>
            <select
              @change="$emit('selectedGenre', selectedGenre)"
              v-model="selectedGenre"
              class="form-select ms-2"
            >
              <option value="">Select Genre</option>
              <option
                :value="genre.id"
                v-for="(genre, index) in allGenres"
                :key="index"
              >
                {{ genre.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>
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
      selectedLanguage: "",
      selectedGenre: "",
      availableLanguages: "",
      allGenres: "",
      hasSearched: false,
      searchInput: "",
      apiKey: "?api_key=45d1fef94b225203d677fc5ce9e00535",
      apiBaseUrl: "https://api.themoviedb.org/3/",
    };
  },
  methods: {
    // getting movies and series list based on input search
    getMoviesAndSeries() {
      this.hasSearched = true;
      this.$emit("madeSearch", this.hasSearched);
      if (this.searchInput != "") {
        this.sendRequestAndEmit(
          `${this.apiBaseUrl}search/movie${this.apiKey}&language=${this.selectedLanguage}&query=${this.searchInput}`,
          this.movies,
          "moviesSearchSent"
        );
        this.sendRequestAndEmit(
          `${this.apiBaseUrl}search/tv${this.apiKey}&language=${this.selectedLanguage}&query=${this.searchInput}`,
          this.series,
          "seriesSearchSent"
        );
        this.searchInput = "";
      } else {
        console.log("input value is empty");
      }
    },
    sendRequestAndEmit(uri, dataEl, nameEvent) {
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
  created() {
    // getting languages list from api
    axios
      .get(`${this.apiBaseUrl}configuration/languages${this.apiKey}`)
      .then((result) => {
        this.availableLanguages = result.data;
      })
      .catch((error) => console.error(error));
    // getting all genres from api
    axios
      .get(`${this.apiBaseUrl}genre/movie/list${this.apiKey}&language=en-US`)
      .then((result) => {
        this.allGenres = result.data.genres;
        console.log(this.allGenres);
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
header {
  box-shadow: 1px 1px 3px #2d2d2d;
  input,
  select {
    color: white;
    background-color: transparent;
    option {
      background-color: $darkgrey;
    }
  }
}
button {
  color: $darkgrey;
  background-color: $brandColor;
}
</style>
