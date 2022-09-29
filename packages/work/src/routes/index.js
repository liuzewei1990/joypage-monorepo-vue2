import MenuRouteViewLayout from "../views/menuRouteViewLayout.js";
import MenuRouteView from "../views/index.vue";

const routes = {
    path: "/work",
    name: "work",
    component: MenuRouteView,
    meta: { title: "menu.home" }
};
export default function initRoutes(router) {
    router.addRoute("root", routes);
}
