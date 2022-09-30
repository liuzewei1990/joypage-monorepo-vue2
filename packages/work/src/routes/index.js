import MenuRouteViewLayout from "../views/menuRouteViewLayout.js";
import MenuRouteView from "../views/index.vue";
import { workUtils } from "work-base";

// // 根级菜单
const rootRouter = {
    key: "",
    name: "index",
    path: "/work",
    component: MenuRouteView,
    // redirect: "/dashboard",
    meta: {
        title: "首页"
    },
    children: []
};

export default function initRoutes(router) {
    if (!router) return;

    router.beforeEach((to, from, next) => {
        next();
    });

    router.addRoute("root", rootRouter);
}
