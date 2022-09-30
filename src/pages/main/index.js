import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import work from "work";
import vpdsmart from "vpdsmart";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import "./router/routerController.js";

Vue.use(work, { router, store });
Vue.use(vpdsmart);
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
