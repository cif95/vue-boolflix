<template>
  <div class="loader">
    <font-awesome-icon icon="fa-spinner" />
  </div>
</template>

<script>
export default {
  name: "MovieLoader",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
div.loader {
  @include flex(center, center);
  @include position(fixed, 0, 0, 0, 0, 2);
  width: 100%;
  height: 100%;
  background: rgb(37, 37, 37);
  svg {
    width: 100px;
    height: 100px;
    color: $brandColor;
    animation: 2s linear clockwise infinite;
  }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(300deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
