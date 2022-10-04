<template>
    <!-- 表示视图组件,用来解析element -->
    <section class="work-component">
        <grid-item :static="true" :i="workComponentItem.i" :x="workComponentItem.x" :y="workComponentItem.y" :w="workComponentItem.w" :h="workComponentItem.h">
            <div class="work-component-container" :class="[_coNameClass]">
                <component :is="coName" v-bind="coProps"> </component>
            </div>
        </grid-item>
    </section>
</template>

<script>
    import Vue from "vue";
    import { GridItem } from "vue-grid-layout";
    import { Empty } from "ant-design-vue";
    export const props = {
        workComponentItem: {
            type: Object,
            default() {
                return {};
            }
        }
    };
    export default {
        props,
        components: { GridItem, Empty },
        computed: {
            isComponent() {
                return Vue.component(this.workComponentItem.coName) || ["router-view"].indexOf(this.workComponentItem.coName) !== -1;
            },
            _coNameClass() {
                return "work-component-container-" + this.coName;
            },
            elStyle() {
                return this.workComponentItem.elStyle;
            },
            coName() {
                return this.isComponent ? this.workComponentItem.coName : "Empty";
            },
            coProps() {
                return this.workComponentItem.coProps;
            }
        }
    };
</script>

<style lang="less" scoped>
    .work-component {
        // position: absolute;
    }

    .vue-grid-item:not(.vue-grid-placeholder) {
        // background: #f2f2f2;
        // border: 1px solid rgb(233, 232, 232);
        border-radius: 5px;
        touch-action: none;
        background: #fff;
        box-shadow: 0px 0px 3px rgb(229, 229, 229);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .work-component-container {
        flex: 1;
    }

    .work-component-container-WebIframe {
        width: 100%;
        height: 100%;
        // overflow: hidden;
    }

    .vue-grid-item .resizing {
        opacity: 0.9;
    }
    .vue-grid-item .static {
    }
    .vue-grid-item .text {
        // font-size: 24px;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        width: 100%;
    }
    .vue-grid-item .no-drag {
        height: 100%;
        width: 100%;
    }
    .vue-grid-item .minMax {
        font-size: 12px;
    }
    .vue-grid-item .add {
        cursor: pointer;
    }
    .vue-draggable-handle {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
        background-position: bottom right;
        padding: 0 8px 8px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>
