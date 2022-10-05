<script>
    import BaseHeader from "./base.vue";
    import { mapState } from "vuex";

    export const computeds = mapState({
        visibleHeader: (state) => state.layoutConfig.visibleHeader,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        classNames: (state) => ({
            ["fix-header"]: state.layoutConfig.fixedHeader,
            ["header-treme-" + state.layoutConfig.theme]: state.layoutConfig.layout === "topmenu"
        }),
        styles: ({ layoutConfig } = state) => ({
            ["padding"]: 0,
            ["right"]: 0,
            ["transition"]: "width 0.2s",
            ["width"]: layoutConfig.layout === "sidemenu" && layoutConfig.fixedHeader ? (layoutConfig.collapsed ? `calc(100% - ${80}px)` : `calc(100% - ${layoutConfig.siderWidth}px)`) : "100%"
        })
    });
    export default {
        name: "LayoutHeader",
        inheritAttrs: false,
        components: { BaseHeader },
        computed: { ...computeds }
    };
</script>

<template>
    <a-layout-header class="work-header" :class="classNames" theme="dark" :style="styles" v-if="visibleHeader">
        <BaseHeader></BaseHeader>
    </a-layout-header>
</template>
