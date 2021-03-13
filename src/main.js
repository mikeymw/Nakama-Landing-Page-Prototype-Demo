import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//import store from "./stores";

Vue.config.productionTip = false

//import { sentryDSN } from "./config";
//import * as Sentry from "@sentry/browser";
//import { Vue as VueIntegration } from "@sentry/integrations";
//import { Integrations } from "@sentry/tracing";
/*if (process.env.NODE_ENV === "production") {
    console.log("production");
    Sentry.init({
        "dsn": sentryDSN,
        "integrations": [
            new VueIntegration(
                {
                    Vue,
                    "tracing": true,
                }
            ),
            new Integrations.BrowserTracing(),
        ],
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        "tracesSampleRate": 1.0,
    });
}*/

//import VueMeta from "vue-meta";
//Vue.use(VueMeta);

import "./init/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    router,
    //store,
    "render": h => h(App)
}).$mount("#app")

