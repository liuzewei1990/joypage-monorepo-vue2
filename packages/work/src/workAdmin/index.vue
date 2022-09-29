<template>
    <pro-layout
        :logo="logo"
        title="WorkUi"
        :loading="false"
        layout="top"
        navTheme="dark"
        :menus="[]"
        :sider-width="180"
        :collapsed="collapsed"
        :isMobile="isMobile"
        :handleMediaQuery="handleMediaQuery"
        :handleCollapse="handleCollapse"
        v-bind="settings">
        <router-view />
    </pro-layout>
</template>

<script>
    const logo = require("../assets/logo.png");
    export default {
        props: {
            menuList: Array
        },
        data() {
            return {
                logo: logo,
                collapsed: false,
                // 是否手机模式
                isMobile: false,
                settings: {
                    layout: "sidemenu",
                    contentWidth: "Fluid",
                    theme: "dark",
                    primaryColor: "#1890ff",
                    fixedHeader: false,
                    fixSiderbar: false,
                    colorWeak: false,

                    hideHintAlert: false,
                    hideCopyButton: false
                }
            };
        },
        created() {
            console.log("this.menuList :>> ", this.menuList);
        },
        methods: {
            handleMediaQuery() {},
            handleCollapse() {}
        }
    };
</script>

<style lang="less">
    .ant-pro-basicLayout-content {
        margin: 5px !important;
    }
</style>
