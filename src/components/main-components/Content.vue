<template>
  <div class="my-cards container-fluid py-5">
    <div
      class="row row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-5 align-items-start"
    >
      <Card :item="el" v-for="(el, index) in SearchedList" :key="index" />
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
