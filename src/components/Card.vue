<template>
  <div class="my-card">
    <h2>{{ item.title || item.name }}</h2>
    <h3>{{ item.original_title || item.original_name }}</h3>
    <lang-flag :iso="item.original_language" />
    <p>Vote: {{ item.vote_count }}</p>
  </div>
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
div.my-card {
  @include card;
}
</style>
