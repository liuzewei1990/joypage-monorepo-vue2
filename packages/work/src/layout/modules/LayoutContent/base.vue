<script>
    import PropTypes from "ant-design-vue/es/_util/vue-types";
    import { mapState } from "vuex";

    export const computeds = mapState({
        layout: (state) => state.layoutConfig.layout,
        classNames: (state) => ({
            ["fixed-wide"]: state.layoutConfig.layout === "topmenu" && state.layoutConfig.contentWidth === "Fixed" ? true : false
        })
    });
    export const baseProps = {};
    export default {
        inheritAttrs: false,
        props: baseProps,
        computed: { ...computeds }
    };
</script>

<template>
    <div :class="[classNames]">
        <slot></slot>
    </div>
</template>
