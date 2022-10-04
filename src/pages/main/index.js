import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import Menu from "./components/menu.vue";
import work from "work";
// import vpdsmart from "vpdsmart";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);
import "./router/routerController.js";
// Vue.use(Menu, { router, store });

Vue.use(work, { router, store, menuApi: () => {} });
// Vue.use(vpdsmart);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
