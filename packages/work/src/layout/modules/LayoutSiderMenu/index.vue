<script>
    import BaseMenu from "../BaseMenu/index.vue";
    import Logo from "../LayoutHeader/logo.vue";
    import { mapState } from "vuex";
    export const computeds = mapState({
        logo: (state) => state.layoutConfig.logo,
        title: (state) => state.layoutConfig.title,
        collapsed: (state) => state.layoutConfig.collapsed,
        theme: (state) => state.layoutConfig.theme,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        classNames: ({ layoutConfig } = state) => ({
            ["fix-sider"]: layoutConfig.fixSiderbar
        })
    });
    export default {
        inheritAttrs: false,
        components: { BaseMenu, Logo },
        computed: { ...computeds }
    };
</script>
<template>
    <a-layout-sider :class="classNames" :theme="theme" :width="siderWidth" :collapsedWidth="80" v-model="collapsed" collapsible :trigger="null">
        <Logo v-bind="{ logo, title, collapsed }" />
        <BaseMenu />
    </a-layout-sider>
</template>
