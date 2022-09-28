<template>
    <pro-layout
        :logo="logo"
        title="WorkUi"
        :loading="true"
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
        data() {
            return {
                logo: logo,
                collapsed: false,
                // 是否手机模式
                isMobile: false,
                settings: {
                    // 布局类型
                    layout: "sidemenu", // 'sidemenu', 'topmenu'
                    // CONTENT_WIDTH_TYPE
                    contentWidth: "Fluid",
                    // 主题 'dark' | 'light'
                    theme: "dark",
                    // 主色调
                    primaryColor: "#1890ff",
                    fixedHeader: false,
                    fixSiderbar: false,
                    colorWeak: false,

                    hideHintAlert: false,
                    hideCopyButton: false
                }
            };
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
