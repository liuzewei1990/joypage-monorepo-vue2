import Vue from "vue";
import Router from "vue-router";
import { WorkAdmin } from "work";
Vue.use(Router);

const createRouter = () =>
    new Router({
        routes: [
            {
                path: "/",
                name: "root",
                props: { menuList: [{ a: 11 }] },
                component: WorkAdmin,
                redirect: "/work"
            }
        ]
    });

export default createRouter();
