<template>
  <div class="my-card">
    <h2>{{ series.name }}</h2>
    <h3>{{ series.original_name }}</h3>
    <lang-flag :iso="series.original_language" />
    <p>Vote: {{ series.vote_count }}</p>
  </div>
</template>

<script>
export default {
  name: "SeriesCard",
  props: {
    series: Object,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
div.my-card {
  @include card;
}
</style>
