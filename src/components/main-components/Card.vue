<template>
  <div class="my-card" @mouseenter="flipCard()">
    <div v-if="!isFlipped" class="front-card">
      <img
        class="img-fluid"
        :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
        :alt="`poster of ${item.name || item.title}`"
      />
    </div>
    <div v-else class="back-card">
      <h6>Titolo: {{ item.title || item.name }}</h6>
      <h6
        v-if="
          item.title != item.original_title || item.name != item.original_name
        "
      >
        Titolo originale: {{ item.original_title || item.original_name }}
      </h6>
      <lang-flag :iso="item.original_language" />
      <span v-if="!flagLang.includes(item.original_language)">
        Lingua : {{ item.original_language }}
      </span>
      <h6>voto:</h6>
      <star-rating
        :rating="rating"
        :isIndicatorActive="false"
        :star-style="starStyle"
      ></star-rating>
      <p>{{ item.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  data: function () {
    return {
      isFlipped: false,
      rating: Math.round(this.item.vote_average / 2),
      starStyle: {
        fullStarColor: "#EFB100",
        emptyStarColor: "#D3D0C6",
        starWidth: 20,
        starHeight: 20,
      },
      flagLang: [
        "am",
        "ar",
        "az",
        "bn",
        "be",
        "ca",
        "cs",
        "de",
        "en",
        "es",
        "et",
        "fa",
        "fr",
        "bg",
        "ha",
        "hi",
        "hu",
        "hy",
        "it",
        "ja",
        "jv",
        "km",
        "ko",
        "lv",
        "mr",
        "ms",
        "pl",
        "pt",
        "ro",
        "ru",
        "sw",
        "ta",
        "te",
        "th",
        "tr",
        "uk",
        "uz",
        "vi",
        "zh",
      ],
    };
  },
  props: {
    item: Object,
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
div.my-card {
  @include card;
  star-rating {
    margin-right: 0;
  }
}
</style>
