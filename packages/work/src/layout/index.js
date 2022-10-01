import component from "./component.vue";

const Layout = Object.assign(component, {
    install: (app) => {
        app.component("Layout", component);
    }
});

export default Layout;
