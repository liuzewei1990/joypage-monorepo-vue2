import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import work from "work";
Vue.use(work, { router, store });

import antd from "ant-design-vue";
Vue.use(antd);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount("#app");
