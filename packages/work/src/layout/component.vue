<template>
    <a-layout id="admin-layout-side" class="ant-pro-topmenu" style="min-height: 100vh">
        <LayoutSiderMenu v-if="layout === 'sidemenu'" v-bind="$props"></LayoutSiderMenu>
        <a-layout :style="styles">
            <LayoutHeader v-bind="$props"></LayoutHeader>
            <LayoutContent v-bind="$props"> <slot></slot></LayoutContent>
            <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    import PropTypes from "ant-design-vue/es/_util/vue-types";
    import LayoutSiderMenu, { LayoutSiderMenuProps } from "./modules/LayoutSiderMenu/index.vue";
    import LayoutHeader, { LayoutHeaderProps } from "./modules/LayoutHeader/index.vue";
    import LayoutContent, { LayoutContentProps } from "./modules/LayoutContent/index.vue";
    import { mapState } from "vuex";

    export const computeds = mapState({
        layout: (state) => state.layoutConfig.layout,
        collapsed: (state) => state.layoutConfig.collapsed,
        styles: ({ layoutConfig } = state) => ({
            ["transition"]: "margin-left 0.2s",
            ["margin-left"]: layoutConfig.layout === "sidemenu" && layoutConfig.fixSiderbar && (layoutConfig.collapsed ? "80px" : layoutConfig.siderWidth + "px")
        })
    });

    export const adminBaseLayoutProps = {
        // menu props
        ...LayoutSiderMenuProps,
        // header props
        ...LayoutHeaderProps,
        // content props
        ...LayoutContentProps,

        // 流体：自适应 Fluid，固定：固定宽度1200px Fixed
        contentWidth: PropTypes.oneOf(["Fluid", "Fixed"]).def("Fluid"),

        layout: PropTypes.oneOf(["sidemenu", "topmenu"]).def("topmenu")
    };

    export default {
        inheritAttrs: false,
        // props: adminBaseLayoutProps,
        components: { LayoutSiderMenu, LayoutHeader, LayoutContent },
        computed: { ...computeds },
        data() {
            return {};
        },
        created() {
            console.log("入口props=====>", this.layout);
        }
    };
</script>

<style lang="less">
    @import url(./style/index.less);
</style>
