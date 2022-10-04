import { WorkAdmin } from "work";
/**
 * 基础路由
 */
export const baseRouterMap = [
    {
        path: "/",
        name: "root",
        props: { menuList: [{ a: 11 }] }
        // component: WorkAdmin
        // redirect: "/result"
    }
];

/**
 * 异步路由
 */
export const asyncRouterMap = [];
