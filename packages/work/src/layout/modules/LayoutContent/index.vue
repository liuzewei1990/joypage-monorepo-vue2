<script>
    import BaseContent from "./base.vue";
    import { mapState } from "vuex";
    export const computeds = mapState({
        classNames: ({ layoutConfig } = state) => ({
            ["fix-header-content-top"]: layoutConfig.visibleHeader && layoutConfig.fixedHeader
        }),
        styles: ({ layoutConfig } = state) => ({})
    });
    export default {
        name: "LayoutContent",
        inheritAttrs: false,
        components: { BaseContent },
        computed: { ...computeds }
    };
</script>

<template>
    <a-layout-content :style="styles" :class="classNames">
        <BaseContent><slot></slot></BaseContent>
    </a-layout-content>
</template>

<style lang="less" scoped></style>
