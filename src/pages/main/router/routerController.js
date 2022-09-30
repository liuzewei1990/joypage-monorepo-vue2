import router, { resetRouter } from "./index.js";
import menuMock from "./menuMock.js";
import notification from "ant-design-vue/es/notification";
import { workUtils } from "work-base";
import store from "../store/index.js";

const allowList = ["login", "register"];
const loginRoutePath = "/user/login";
const defaultRoutePath = "/dashboard/workplace";

router.beforeEach((to, from, next) => {
    const isLogin = true;
    if (isLogin) {
        // 1、如果重复访问登录路由 重定向到首页去，2、检查是否被注册过动态路由
        if (to.name === "login") {
            next({ path: defaultRoutePath });
        } else {
            hasRoute(to) ? next() : registerRoutes(to, from, next);
        }
    } else {
        // 在免登录名单，直接进入,否则去登录
        if (allowList.includes(to.name)) {
            next();
        } else {
            next({ name: "login", query: { redirect: to.fullPath } });
        }
    }
});

/**
 * 判断当前路由是否存在
 * @param to
 * @returns {boolean}
 */
function hasRoute(to) {
    let find = router.getRoutes().find((item) => item.name === to.name);
    return !!find;
}

async function registerRoutes(to, from, next) {
    try {
        // 1、获取缓存路由或服务器路由
        const routers = await getMenu();

        // 2、注册路由前清空，在注册，避免重复注册
        // resetRouter();
        routers.forEach((route) => {
            router.addRoute("root", route);
        });

        // 3、放行到目标地址
        const redirect = decodeURIComponent(from.query.redirect || to.path);
        if (to.path === redirect) {
            next({ ...to, replace: true });
        } else {
            next({ path: redirect });
        }
    } catch (error) {
        console.error(error);
        notification.error({
            message: "错误",
            description: "请求用户信息失败，请重试"
        });
        // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
        // store.dispatch("Logout").then(() => {
        //     next({ path: loginRoutePath, query: { redirect: to.fullPath } });
        // });
    }
}

async function getMenu() {
    // 获取服务器路由信息
    let routers = [];
    let rootRoute = router.options.routes.find((item) => item.path === "/");
    routers = workUtils.router.createRoutes(menuMock, rootRoute);
    // 注册到store中。。。。
    // .......
    store.commit("SET_ROUTERS", routers[0].children);
    routers = workUtils.router.treeToJson(routers[0].children);
    console.log("routers :>> ", routers);
    return routers;
}
