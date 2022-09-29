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
        // const root = router.options.routes.find((item) => item.path === "/");
        console.log(router.app, 111);
        // root.children = [];
        // let children = workUtils.router.createRoutes([], rootRouter);
        // console.log("获取接口数据L：", children);

        // router.addRoute("root", rootRouter);
        // console.log(router.getRoutes());
        next();
    });

    // const routes = {
    //     path: "/work",
    //     name: "work",
    //     component: MenuRouteView,
    //     beforeEnter: (to, from, next) => {
    //         let children = workUtils.router.createRoutes();
    //         console.log("获取接口数据L：", children[0]);

    //         router.addRoute(children[0]);

    //         next();
    //         // ...
    //     },
    //     meta: { title: "menu.home" }
    // };

    // router.addRoute("root", rootRouter);
}
