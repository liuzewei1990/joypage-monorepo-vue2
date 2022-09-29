<template>
    <!-- 表示路由页面根节点 -->
    <section class="work">
        <!-- 可以是多个视图 pages -->
        <!-- {{ views[currViewIndex] }} -->
        <work-view v-if="views.length" :workViewItem="views[currViewIndex]"></work-view>
    </section>
</template>

<script>
    const props = {
        work: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        }
    };
    export default {
        props,
        computed: {
            currViewIndex() {
                return this.work.viewIndex;
            },
            views() {
                return this.work.views || [];
            }
        }
    };
</script>

<style lang="less" scoped>
    .work {
        position: relative;
        // 这里width会影响iframe和web component 出现滚动条，原则上所有组件和页面的尺寸都应该是100%
        min-width: 800px;
        padding: 2px 2px;
        box-sizing: border-box;
    }
</style>
