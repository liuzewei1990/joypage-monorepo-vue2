<script>
    import Logo from "./logo.vue";
    import BaseMenu from "../BaseMenu/index.vue";
    import { mapState } from "vuex";

    export const computeds = mapState({
        collapsed: (state) => state.layoutConfig.collapsed,
        title: (state) => state.layoutConfig.title,
        logo: (state) => state.layoutConfig.logo,
        theme: (state) => state.layoutConfig.theme,
        siderWidth: (state) => state.layoutConfig.siderWidth,
        layout: (state) => state.layoutConfig.layout,
        isTop: (state) => state.layoutConfig.layout === "topmenu",
        menuComponentName: (state) => state.layoutConfig.menu.coName || "",
        visibleSider: (state) => state.layoutConfig.visibleSider,
        classNames: (state) => ({
            ["fixed-wide"]: state.layoutConfig.layout === "topmenu" && state.layoutConfig.contentWidth === "Fixed" ? true : false
        })
    });
    export default {
        components: { Logo, BaseMenu },
        computed: { ...computeds }
    };
</script>

<template>
    <div class="base-header" :class="classNames">
        <a-row type="flex">
            <a-col :flex="siderWidth + 'px'" v-if="layout === 'topmenu'">
                <Logo v-bind="{ title, logo, color: '#fff' }" />
            </a-col>
            <a-col flex="65px">
                <a-icon class="trigger" v-if="!isTop" @click="$store.commit('CHANGE_COLLAPSED')" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-col>
            <a-col :flex="1">
                <BaseMenu v-if="isTop && visibleSider" v-bind="{ mode: 'horizontal' }"></BaseMenu>
            </a-col>
            <a-col flex="300px"> </a-col>
        </a-row>
    </div>
</template>
