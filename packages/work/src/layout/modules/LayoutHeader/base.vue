<script>
    import { mapState } from "vuex";
    import Logo from "./logo.vue";

    export const computeds = mapState({
        collapsed: (state) => state.layoutConfig.collapsed,
        title: (state) => state.layoutConfig.title,
        logo: (state) => state.layoutConfig.logo,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        layout: (state) => state.layoutConfig.layout,
        isCollapsed: (state) => state.layoutConfig.layout === "sidemenu",
        classNames: (state) => ({
            ["fixed-wide"]: state.layoutConfig.layout === "topmenu" && state.layoutConfig.contentWidth === "Fixed" ? true : false
        })
    });
    export const baseProps = {};
    export default {
        inheritAttrs: false,
        components: { Logo },
        props: baseProps,
        computed: { ...computeds }
    };
</script>

<template>
    <div class="base-header" :class="classNames">
        <a-row type="flex">
            <a-col :flex="siderWidth + 'px'" v-if="layout === 'topmenu'">
                <Logo v-bind="{ title, logo, color: '#fff' }" />
            </a-col>
            <a-col :span="2">
                <a-icon class="trigger" v-if="isCollapsed" @click="$store.commit('CHANGE_COLLAPSED')" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-col>
            <a-col :span="6"> </a-col>
            <a-col :span="6"> </a-col>
        </a-row>
    </div>
</template>
