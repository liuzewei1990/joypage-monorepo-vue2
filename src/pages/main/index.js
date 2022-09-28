import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import work from "work";
// import vpdsmart from "vpdsmart";
import Antd from "ant-design-vue";
import ProLayout from "@ant-design-vue/pro-layout";
import "ant-design-vue/dist/antd.css";

Vue.use(work);
// Vue.use(vpdsmart);
Vue.use(Antd);
Vue.use(ProLayout);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");