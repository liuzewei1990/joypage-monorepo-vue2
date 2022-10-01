<template>
    <AdminLayout v-bind="settings" :menus="menus">
        <router-view />
    </AdminLayout>
</template>

<script>
    import AdminLayout from "../layout/index.js";
    const settings = {
        // 坐侧边布局 或 上下顶栏布局 sidemenu | topmenu
        layout: "topmenu",
        // 系统标题
        title: "Work",
        // 系统logo
        logo: require("../assets/logo.png"),
        // 局的内容模式，流体：自适应，固定：固定宽度1200px 'Fixed' | 'Fluid'布
        contentWidth: "Fluid",
        // 导航主题色 'light' | 'dark'
        theme: "light",
        // menu宽度
        siderWidth: 200,
        // 菜单数据
        // 控制菜单的折叠和展开
        collapsed: false,
        // 是否移动端
        isMobile: false,
        // 菜单折叠折叠事件
        handleCollapse: () => {},
        // 渲染logo部分 v-slot | VNode | (logo,title)=>VNode | false
        // menuHeaderRender: "",

        // 是否显示header
        visibleHeader: true,
        // 自定义header方法 (props: BasicLayoutProps) => VNode
        headerRender: () => {},
        // 自定义右侧内容区 (props: HeaderViewProps) => VNode
        rightContentRender: () => {},
        // 自定义collapsed图标 (collapsed: boolean) => VNode
        // collapsedButtonRender: () => {},
        // 自定义footer区 (props: BasicLayoutProps) => VNode
        footerRender: () => {},
        // 自定义面包屑呈现方法 ({ route, params, routes, paths, h }) => VNode[]
        breadcrumbRender: () => {},
        // 仅菜单打开根键
        openOnceKey: true,
        // primaryColor: "#1890ff",
        // 固定header
        fixedHeader: false,
        // 固定menu
        fixSiderbar: true

        // colorWeak: false,

        // hideHintAlert: false,
        // hideCopyButton: false
    };
    export default {
        components: { AdminLayout },
        props: {
            menuList: Array
        },
        data() {
            this.settings = settings;
            return {
                menus: []
            };
        },
        created() {
            this.getMenuList();
        },
        methods: {
            handleMediaQuery() {},
            handleCollapse() {},
            getMenuList() {
                // this.menus = this.$store.getters.asyncRoutes;
            }
        }
    };
</script>

<style lang="less">
    .ant-pro-basicLayout-content {
        margin: 0px !important;
    }
</style>
