<template>
  <main>
    <div class="movies-cards container">
      <div class="row row-cols-4">
        <div class="col-12">
          <h2>Movies:</h2>
        </div>
        <Card
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
        <div class="col" v-for="(el, index) in series" :key="index">
          <h2>Title: {{ el.name }}</h2>
          <h3>Original Title: {{ el.original_name }}</h3>
          <p>
            Language: <span :class="`fi fi-${el.original_language}`"></span>
          </p>
          <p>Vote: {{ el.vote_count }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "indexMain",
  props: {
    movies: Array,
    series: Array,
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped></style>
