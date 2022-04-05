<template>
  <div class="my-cards container-fluid">
    <div class="row row-cols-6 g-1">
      <Card
        class="col"
        :item="el"
        v-for="(el, index) in SearchedList"
        :key="index"
      />
    </div>
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

<style lang="scss" scoped>
div.row {
  color: white;
}
</style>
