import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import work from "work";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(work, { router, store });
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount("#app");
