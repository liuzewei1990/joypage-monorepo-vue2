const _FixedMenu = () => import(/* webpackChunkName: "work.ui" */ /* webpackPrefetch:true */ "./component.vue");

const FixedMenu = Object.assign(_FixedMenu, {
    install: (app) => {
        app.component("FixedMenu", _FixedMenu);
    }
});

export default FixedMenu;
