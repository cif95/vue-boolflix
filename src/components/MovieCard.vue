<template>
  <div class="my-card">
    <h2>{{ movie.title }}</h2>
    <h3>{{ movie.original_title }}</h3>
    <lang-flag :iso="movie.original_language" />
    <p>Vote: {{ movie.vote_count }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
div.my-card {
  @include card;
}
</style>
