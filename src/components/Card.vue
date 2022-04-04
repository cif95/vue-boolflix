<template>
  <!-- :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/w342/${item.poster_path})`,
    }" -->
  <li class="my-card">
    <img
      class="img-fluid"
      :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
      :alt="`poster of ${item.name || item.title}`"
    />
    <h2>{{ item.title || item.name }}</h2>
    <h3
      v-if="
        item.title != item.original_title || item.name != item.original_name
      "
    >
      {{ item.original_title || item.original_name }}
    </h3>
    <lang-flag :iso="item.original_language" />
    <p>Vote: {{ item.vote_average }}</p>
  </li>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
li.my-card {
  @include card;
}
</style>
