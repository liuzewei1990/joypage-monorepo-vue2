import MenuRouteView from "../views/index.vue";
import WorkAdmin from "../workAdmin/index.vue";

const reg = /^\/\d+\/work\//;

// 根级菜单
export const workRouter = {
    name: "work",
    path: "/:workId/work",
    beforeEnter(to, from, next) {
        next();
    },
    props: (route) => ({ workId: route.params.workId }),
    component: WorkAdmin
    // redirect: "/work/2"
};

// 404
export const errorRouter = {
    path: "/404",
    component: MenuRouteView,
    hidden: true
};

/**
 * 判断当前访问路由是否存在
 * @param {object} to
 * @returns {boolean}
 */
export function hasRoute(to) {
    let router = this;
    let find = router.getRoutes().find((item) => to.path === "/" || to.name === item.name);
    return !!find;
}

/**
 * 当前路由如果不存在，执行注册路由
 * @param {object} to
 * @param {object} from
 * @param {function} next
 */
export function registerRoutes(to, from, next) {
    console.log("执行注册路由逻辑");

    let router = this;
    if (reg.test(to.path)) {
        const route = createRoute(to);
        router.addRoute("work", route);
        next({ ...to, replace: true });
    } else {
        next({ path: "/404", replace: true });
    }
}

export function createRoute(to = {}) {
    const id = to.path.replace(reg, "");
    return {
        path: id,
        name: id,
        meta: { id: id },
        component: getViewComponent()
    };
}

/**
 * 创建一个work路由页面组件
 * @returns {Component}
 */
const getViewComponent = () => {
    return {
        render(h) {
            return h(MenuRouteView);
        }
    };
};
