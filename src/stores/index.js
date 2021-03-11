import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import layout from "./LayoutStore";
import user from "./UserStore";

export default new Vuex.Store(
    {
        "modules": {
            layout,
            user,
        }
    }
);
