import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./stores";

Vue.config.productionTip = false

import "./init/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    router,
    store,
    "render": h => h(App)
}).$mount("#app")

