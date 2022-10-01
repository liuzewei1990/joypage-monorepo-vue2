<script>
    import BaseMenu from "./base.vue";
    import Logo from "../LayoutHeader/logo.vue";
    import { mapState } from "vuex";
    export const computeds = mapState({
        logo: (state) => state.layoutConfig.logo,
        title: (state) => state.layoutConfig.title,
        collapsed: (state) => state.layoutConfig.collapsed,
        theme: (state) => state.layoutConfig.theme,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        classNames: (state) => ({
            ["fix-sider"]: state.layoutConfig.fixSiderbar
        })
    });
    export default {
        inheritAttrs: false,
        name: "LayoutSiderMenu",
        components: { BaseMenu, Logo },
        computed: { ...computeds }
    };
</script>
<template>
    <a-layout-sider :class="classNames" :theme="theme" :width="siderWidth" :collapsedWidth="80" v-model="collapsed" collapsible :trigger="null">
        <Logo v-bind="{ logo, title, collapsed }" />
        <BaseMenu></BaseMenu>
    </a-layout-sider>
</template>
