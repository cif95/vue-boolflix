<template>
  <div class="col">
    <div class="my-card" @mouseover="flip()" @mouseleave="flipBack()">
      <div
        v-if="!isFlipped"
        class="front-card"
        :class="{ fallback: item.poster_path === null }"
      >
        <img
          class="img-fluid"
          :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
          :alt="`${item.name || item.title}`"
        />
      </div>
      <div v-else class="back-card">
        <h6>Titolo: {{ item.title || item.name }}</h6>
        <h6 v-if="isTitleDifferent(item)">
          Titolo originale: {{ item.original_title || item.original_name }}
        </h6>
        <lang-flag :iso="item.original_language" />
        <h6 v-if="!flagLang.includes(item.original_language)">
          Lingua : {{ item.original_language }}
        </h6>
        <h6>voto:</h6>
        <star-rating
          :rating="rating"
          :isIndicatorActive="false"
          :star-style="starStyle"
        ></star-rating>
        <p>{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  data: function () {
    return {
      isFlipped: false,
      rating: this.item.vote_average / 2,
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
    isTitleDifferent(item) {
      if (
        item.title !== item.original_title ||
        item.name !== item.original_name
      )
        return true;
    },
    flip() {
      this.isFlipped = true;
    },
    flipBack() {
      this.isFlipped = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
div.my-card {
  @include card;
  div.front-card,
  div.back-card,
  div.front-card {
    max-width: 100%;
    img {
      height: 45vh;
      object-fit: cover;
    }
  }
  div.back-card {
    box-shadow: 0px 3px 11px 2px #404040;
    background-color: $darkgrey;
    padding: 3rem 1rem;
    border-radius: 20px;
    @include sizing(100%, 100%);
    max-width: 300px;
    min-width: 250px;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    star-rating {
      margin-right: 0;
    }
    svg {
      height: 25px;
    }
    h6 {
      font-size: 0.95rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
}
</style>
