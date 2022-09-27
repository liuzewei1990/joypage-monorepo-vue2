const _Table = import(/* webpackChunkName: "async" */ /* webpackPrefetch:true */ "./component.vue");

const Table = Object.assign(_Table, {
    install: (app) => {
        app.component(_Table.name, _Table);
    }
});

export default Table;
