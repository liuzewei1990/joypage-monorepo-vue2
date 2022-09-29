import WorkBase from "work-base";
import WorkUi from "work-ui";
import ProLayout from "@ant-design-vue/pro-layout";

import Work from "./components/Work/index.vue";
import WorkView from "./components/WorkView/index.vue";
import WorkLayout from "./components/WorkLayout/index.vue";
import WorkComponent from "./components/WorkComponent/index.vue";

import WorkAdmin from "./workAdmin/index.vue";

import initRoutes from "./routes/index.js";
import initStore from "./store/index.js";

// import microApp from "@micro-zoe/micro-app";
// microApp.start();

const install = function (app, options = {}) {
    const { router, store } = options;

    // 注册基础组件库
    app.use(WorkBase);
    app.use(WorkUi);
    app.use(ProLayout);

    // 注册Work系列解析组件
    app.component("Work", Work);
    app.component("WorkView", WorkView);
    app.component("WorkLayout", WorkLayout);
    app.component("WorkComponent", WorkComponent);

    // 注册本体组件
    app.component("WorkAdmin", WorkAdmin);

    // 注册路由和store模块
    initRoutes(router);
    initStore(store);
};

export { WorkAdmin };
export default { install };
