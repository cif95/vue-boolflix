<template>
  <div class="my-cards container">
    <ul class="row row-cols-4">
      <Card
        class="col"
        :item="el"
        v-for="(el, index) in SearchedList"
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "indexMain",
  props: {
    SearchedList: Array,
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped></style>
