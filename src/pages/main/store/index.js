import Vue from "vue";
import Vuex from "vuex";

import routes from "./modules/async-router";

Vue.use(Vuex);

const getters = {
    asyncRoutes: (state) => state.routes.asyncRoutes
};

export default new Vuex.Store({
    state: {},
    getters,
    mutations: {},
    actions: {},
    modules: { routes }
});
