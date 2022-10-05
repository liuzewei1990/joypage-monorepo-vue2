import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const createRouter = () =>
    new Router({
        // routes: [
        //     {
        //         path: "/",
        //         name: "root",
        //         redirect: "/work"
        //     }
        //     // {
        //     //     path: "/login",
        //     //     component: () => import("./login.vue"),
        //     //     name: "login"
        //     // }
        // ]
    });

export default createRouter();
