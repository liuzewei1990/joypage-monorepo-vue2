import Vue from "vue";
import Router from "vue-router";
import { baseRouterMap, asyncRouterMap } from "./router.config.js";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);
const routes = [].concat(baseRouterMap).concat(asyncRouterMap);
const createRouter = () => new Router({ routes });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
