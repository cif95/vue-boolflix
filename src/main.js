import Vue from "vue";
import App from "./App.vue";
import LangFlag from "vue-lang-code-flags";
import StarRating from "vue-dynamic-star-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);
Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("star-rating", StarRating);
Vue.component("lang-flag", LangFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
