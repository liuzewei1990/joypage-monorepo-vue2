<template>
    <grid-layout
        @layout-ready="layoutReadyEvent"
        :col-num="30"
        :row-height="2"
        :max-rows="Infinity"
        :margin="[5, 5]"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :is-bounded="true"
        :auto-size="true"
        :vertical-compact="true"
        :restore-on-drag="false"
        :prevent-collision="false"
        :use-css-transforms="true"
        :use-style-cursor="true"
        v-bind="$attrs"
        :transformScale="1"
        v-on="$listeners">
        <div v-show="isLayoutReady">
            <slot></slot>
        </div>
    </grid-layout>
</template>

<script>
    import { GridLayout } from "vue-grid-layout";
    export default {
        components: { GridLayout },
        data() {
            return {
                isLayoutReady: false
            };
        },
        methods: {
            layoutReadyEvent() {
                this.isLayoutReady = true;
            }
        }
    };
</script>

<style lang="less" scoped></style>
