const _Calendar = () => import(/* webpackChunkName: "work.ui" */ /* webpackPrefetch:true */ "./component.vue");

const Calendar = Object.assign(_Calendar, {
    install: (app) => {
        app.component("Calendar", _Calendar);
    }
});

export default Calendar;
