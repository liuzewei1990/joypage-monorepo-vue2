const permission = {
    state: {
        asyncRoutes: []
    },
    mutations: {
        SET_ROUTERS: (state, asyncRoutes) => {
            state.asyncRoutes = asyncRoutes;
        }
    },
    actions: {}
};

export default permission;
