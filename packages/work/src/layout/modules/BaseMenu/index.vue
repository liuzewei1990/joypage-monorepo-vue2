<script>
    import { mapState } from "vuex";
    export const computeds = mapState({
        logo: (state) => state.layoutConfig.logo,
        title: (state) => state.layoutConfig.title,
        collapsed: (state) => state.layoutConfig.collapsed,
        theme: (state) => state.layoutConfig.theme,
        menuComponentName: (state) => state.layoutConfig.menu.name || ""
    });
    export default {
        inheritAttrs: false,
        computed: { ...computeds }
    };
</script>

<template>
    <component v-bind="{ theme }" :is="menuComponentName"></component>
</template>
