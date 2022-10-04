export default {
    state: {
        // 坐侧边布局 或 上下顶栏布局 sidemenu | topmenu
        layout: "topmenu",
        // 是否显示header
        visibleHeader: true,
        // 固定header
        fixedHeader: true,
        // 固定menu
        fixSiderbar: true,
        // 局的内容模式，流体：自适应，固定：固定宽度1200px 'Fixed' | 'Fluid'布
        contentWidth: "Fixed",

        // 系统标题
        title: "Work",
        // 系统logo
        logo: require("../../assets/logo.png"),

        // 导航主题色 'light' | 'dark'
        theme: "dark",

        // menu宽度
        siderWidth: 180,

        // 菜单数据
        // 控制菜单的折叠和展开
        collapsed: false,
        menu: {},
        plugins: [
            {
                name: "BaseMenu"
            }
        ]
    },
    mutations: {
        ["CHANGE_COLLAPSED"](state, boolean) {
            state.collapsed = !state.collapsed;
        },

        ["INIT_CONFIG"](state, { key, value }) {
            state[key] = value;
        }
    },
    actions: {}
};
