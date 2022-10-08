<template>
    <!-- 表示路由页面根节点 -->
    <section class="work">
        <!-- 可以是多个视图 pages -->
        <!-- {{ views[currViewIndex] }} -->
        <!-- <a-button-group>
            <a-button type="primary" @click="currViewIndex = 0"> L </a-button>
            <a-button type="dashed" @click="currViewIndex = 1"> R </a-button>
        </a-button-group> -->
        <component :is="workData.viewController"></component>
        <keep-alive>
            <work-view v-for="(item, index) in views" :key="item.viewId || index" :workViewItem="item" v-if="currViewIndex === index"></work-view>
        </keep-alive>
    </section>
</template>

<script>
    const props = {};
    export default {
        props: {
            work: {
                type: Object,
                required: true,
                default() {
                    return {};
                }
            }
        },
        watch: {
            work: {
                immediate: true,
                handler(newData) {
                    this.workData = newData;
                }
            }
        },
        computed: {
            currViewIndex: {
                get() {
                    return this.workData.viewIndex;
                },
                set(val) {
                    this.workData.viewIndex = val;
                }
            },
            views() {
                return this.workData.views || [];
            }
        },
        data() {
            return {
                workData: {}
            };
        },
        methods: {
            setCurrViewIndex(index) {
                this.currViewIndex = index || 0;
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
