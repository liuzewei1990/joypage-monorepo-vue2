<script>
    import BaseHeader from "./base.vue";
    import { mapState } from "vuex";
    export const computeds = mapState({
        visibleHeader: (state) => state.layoutConfig.visibleHeader,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        classNames: (state) => ({
            ["fix-header"]: state.layoutConfig.fixedHeader
        }),
        styles: ({ layoutConfig } = state) => ({
            ["padding"]: 0,
            ["right"]: 0,
            ["transition"]: "width 0.2s",
            // ["position"]: layoutConfig.fixedHeader && "fixed",
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
    <a-layout-header :class="classNames" :style="styles" v-if="visibleHeader" style="background: #fff">
        <BaseHeader></BaseHeader>
    </a-layout-header>
</template>
