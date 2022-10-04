import Vue from "vue";
import Router from "vue-router";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    console.log(111, location, this);
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

const createRouter = () =>
    new Router({
        routes: [
            {
                path: "/",
                name: "root",
                redirect: "/work"
            },
            {
                path: "/login",
                component: () => import("./login.vue"),
                name: "login"
            }
        ]
    });

export default createRouter();
