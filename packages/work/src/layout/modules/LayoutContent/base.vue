<script>
    import { mapState } from "vuex";

    export const computeds = mapState({
        layout: (state) => state.layoutConfig.layout,
        classNames: (state) => ({
            ["fixed-wide"]: state.layoutConfig.layout === "topmenu" && state.layoutConfig.contentWidth === "Fixed" ? true : false
        })
    });
    export default {
        computed: { ...computeds }
    };
</script>

<template>
    <div class="base-content" :class="[classNames]">
        <slot></slot>
    </div>
</template>
