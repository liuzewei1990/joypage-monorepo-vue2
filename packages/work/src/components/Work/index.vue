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
        // min-width: 800px;
    }
</style>
