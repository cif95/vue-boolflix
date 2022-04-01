<template>
  <main>
    <p class="text-info">{{ searchedMovieTitle }}</p>
  </main>
</template>

<script>
export default {
  name: "indexMain",
  props: {
    searchedMovieTitle: String,
  },
};
</script>

<style lang="scss" scoped></style>
