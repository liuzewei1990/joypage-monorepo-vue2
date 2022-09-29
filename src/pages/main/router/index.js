import Vue from "vue";
import Router from "vue-router";
import { baseRouterMap, asyncRouterMap } from "./router.config.js";

Vue.use(Router);

const createRouter = () =>
    new Router({
        routes: [].concat(baseRouterMap).concat(asyncRouterMap)
    });

export default createRouter();
