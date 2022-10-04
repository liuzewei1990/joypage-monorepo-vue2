<template>
    <AdminLayout v-if="loading">
        <keep-alive>
            <router-view />
        </keep-alive>
    </AdminLayout>
</template>

<script>
    import AdminLayout from "../layout/index.js";
    const settings = {
        // 坐侧边布局 或 上下顶栏布局 sidemenu | topmenu
        layout: "sidemenu",
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
        logo: require("../assets/logo.png"),

        // 导航主题色 'light' | 'dark'
        theme: "dark",

        // menu宽度
        siderWidth: 180,

        // 菜单数据
        // 控制菜单的折叠和展开
        collapsed: false,

        menu: {
            name: "Menu"
        },

        plugins: [
            {
                name: "FixedMenu"
            }
        ]
    };
    export default {
        components: { AdminLayout },
        props: {
            workId: String
        },
        data() {
            return {
                loading: false
            };
        },
        created() {
            this.getMenuList();
        },
        methods: {
            async getMenuList() {
                // console.log("workId:", this.workId, mutations);
                const stateKeys = Object.keys({ ...this.$store.state.layoutConfig });
                let projectConfig = await this.api(this.workId);
                for (const stateKey of stateKeys) {
                    this.$store.commit("INIT_CONFIG", { key: stateKey, value: projectConfig[stateKey] });
                }
                this.loading = true;
            },
            async api() {
                return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        resolve(settings);
                    }, 100);
                });
            }
        }
    };
</script>

<style lang="less">
    .ant-pro-basicLayout-content {
        margin: 0px !important;
    }
</style>
