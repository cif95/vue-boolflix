<template>
  <div class="my-card">
    <h2>Title : {{ movie.title }}</h2>
    <h3>Original Title: {{ movie.original_title }}</h3>
    <p>Language: <span :class="`fi fi-${movie.original_language}`"></span></p>
    <p>Vote: {{ movie.vote_count }}</p>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~flag-icons/css/flag-icons.min.css";
div.my-card {
  border: 1px solid black;
  padding: 1rem;
  background-color: rgb(163, 224, 211);
}
</style>
