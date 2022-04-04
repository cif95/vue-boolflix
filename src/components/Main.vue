<template>
  <main>
    <div class="movies-cards container">
      <div class="row row-cols-4">
        <div class="col-12">
          <h2>Movies:</h2>
        </div>
        <MovieCard
          class="col"
          :movie="movie"
          v-for="(movie, index) in movies"
          :key="index"
        />
      </div>
      <div class="row row-cols-4">
        <div class="col-12">
          <h2>Series:</h2>
        </div>
        <SeriesCard
          class="col"
          :series="el"
          v-for="(el, index) in series"
          :key="index"
        />
      </div>
    </div>
  </main>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import SeriesCard from "./SeriesCard.vue";
export default {
  name: "indexMain",
  props: {
    movies: Array,
    series: Array,
  },
  components: {
    MovieCard,
    SeriesCard,
  },
};
</script>

<style lang="scss" scoped></style>
