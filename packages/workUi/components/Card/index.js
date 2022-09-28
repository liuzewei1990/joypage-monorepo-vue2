const _Card = () => import(/* webpackChunkName: "work.ui" */ /* webpackPrefetch:true */ "./component.vue");

const Card = Object.assign(_Card, {
    install: (app) => {
        app.component("Card", _Card);
    }
});

export default Card;
