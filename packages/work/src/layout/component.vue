<script>
    import PropTypes from "ant-design-vue/es/_util/vue-types";
    import LayoutSiderMenu from "./modules/LayoutSiderMenu/index.vue";
    import LayoutHeader from "./modules/LayoutHeader/index.vue";
    import LayoutContent from "./modules/LayoutContent/index.vue";
    import LayoutFooter from "./modules/LayoutFooter/index.vue";
    import { mapState } from "vuex";

    export const computeds = mapState({
        layout: (state) => state.layoutConfig.layout,
        collapsed: (state) => state.layoutConfig.collapsed,
        plugins: (state) => state.layoutConfig.plugins,

        styles: ({ layoutConfig } = state) => ({
            ["transition"]: "margin-left 0.2s",
            ["margin-left"]: layoutConfig.layout === "sidemenu" && layoutConfig.fixSiderbar && (layoutConfig.collapsed ? "80px" : layoutConfig.siderWidth + "px")
        })
    });

    export default {
        inheritAttrs: false,
        // props: adminBaseLayoutProps,
        components: { LayoutSiderMenu, LayoutHeader, LayoutContent, LayoutFooter },
        computed: { ...computeds },
        data() {
            return {};
        },
        created() {
            console.log("入口props=====>", this.layout);
        }
    };
</script>

<template>
    <a-layout id="admin-layout-side" class="ant-pro-topmenu" style="min-height: 100vh">
        <LayoutSiderMenu v-if="layout === 'sidemenu'" v-bind="$props"></LayoutSiderMenu>
        <a-layout :style="styles">
            <LayoutHeader v-bind="$props"></LayoutHeader>
            <LayoutContent v-bind="$props">
                <slot></slot>
                <component v-for="(plugin, index) in plugins" :key="index" :is="plugin.name"></component>
            </LayoutContent>
            <LayoutFooter></LayoutFooter>
        </a-layout>
    </a-layout>
</template>

<style lang="less">
    @import url(./style/index.less);
</style>
