import { workRouter, errorRouter, hasRoute, registerRoutes } from "./registerRoutes.js";
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

export default function initRoutes(router) {
    if (!router) return;

    router.beforeEach((to, from, next) => {
        console.log("全局钩子---work", to);
        hasRoute.bind(router)(to) ? next() : registerRoutes.bind(router)(to, from, next);
    });

    router.addRoute(workRouter);
    router.addRoute(errorRouter);
}
