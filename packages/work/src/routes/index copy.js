import MenuRouteViewLayout from "../views/menuRouteViewLayout.js";
import MenuRouteView from "../views/index.vue";
import WorkAdmin from "../workAdmin/index.vue";
import menuMock from "./menuMock.js";
import { workUtils } from "work-base";

// 根级菜单
const rootRouter = {
    key: "",
    name: "work",
    path: "/work",
    component: WorkAdmin,
    redirect: "/work/dashboard",
    meta: {
        title: "首页"
    },
    children: []
};

const anyRouter = {
    path: "*",
    redirect: "/404",
    hidden: true
};

const errorRouter = {
    path: "/404",
    component: MenuRouteView,
    hidden: true
};

export default function initRoutes(router) {
    if (!router) return;

    router.beforeEach((to, from, next) => {
        console.log("全局钩子---work", to);
        hasRoute.bind(router)(to) ? next() : registerRoutes.bind(router)(to, from, next);
    });

    router.addRoute(rootRouter);
    router.addRoute(errorRouter);
}

function hasRoute(to) {
    let router = this;
    let routes = router.getRoutes();
    let find = routes.find((item) => item.name === to.name || item.path === to.path);
    return !!find;
}

function registerRoutes(to, from, next) {
    console.log("执行注册路由逻辑");
    let router = this;
    try {
        // 1、获取缓存路由或服务器路由
        const routes = getRoutes.bind(this)();

        // 2、注册路由前清空，在注册，避免重复注册
        // resetRouter();
        routes.forEach((route) => {
            router.addRoute("work", route);
        });

        // 如何还未匹配到 转到/404
        router.addRoute(anyRouter);

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

function getRoutes() {
    let menuTree = [];
    let menuMock = [];
    workUtils.router.listToTree(menuMock, menuTree, 0);
    // 获取服务器路由信息
    let routers = [];
    rootRouter.children = menuTree;
    routers = createRoutes([rootRouter], {});
    // 注册到store中。。。。
    // .......
    // store.commit("SET_ROUTERS", routers[0].children);

    routers = workUtils.router.treeToJson(routers[0].children || []);
    console.log("routers :>> ", routers);
    return routers;
}

function createRoutes(menuTree = [], parent) {
    return menuTree.map((item) => {
        const { title, show, hideChildren, hiddenHeaderContent, target, icon } = item.meta || {};
        const currentRouter = {
            // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
            path: item.path || `${(parent && parent.path) || ""}/${item.name}`,
            // 路由名称，建议唯一
            name: item.name || item.key || "",
            // 该路由对应页面的 组件 :方案1
            component: item.component || MenuRouteView,
            // 该路由对应页面的 组件 :方案2 (动态加载)
            // component: pageView,

            props: item.props || {},

            // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
            meta: {
                title: title,
                icon: icon || undefined,
                hiddenHeaderContent: hiddenHeaderContent,
                target: target,
                permission: item.name
            }
        };
        // 是否设置了隐藏菜单
        if (show === false) {
            currentRouter.hidden = true;
        }
        // 是否设置了隐藏子菜单
        if (hideChildren) {
            currentRouter.hideChildrenInMenu = true;
        }
        // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
        if (!currentRouter.path.startsWith("http")) {
            currentRouter.path = currentRouter.path.replace("//", "/");
        }
        // 重定向
        item.redirect && (currentRouter.redirect = parent.path + item.redirect);
        // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
            // Recursion
            currentRouter.children = mapRoutes(item.children, currentRouter);
        }
        return currentRouter;
    });
}
