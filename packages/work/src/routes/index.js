import { workRouter, errorRouter, hasRoute, registerRoutes } from "./registerRoutes.js";

export default function initRoutes(router) {
    if (!router) return;

    router.beforeEach((to, from, next) => {
        console.log("全局钩子---work", to);
        hasRoute.bind(router)(to) ? next() : registerRoutes.bind(router)(to, from, next);
    });

    router.addRoute(workRouter);
    router.addRoute(errorRouter);
}
