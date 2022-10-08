<template>
    <!-- 表示页面中的一个视图 -->
    <section class="work-view">
        <!-- {{ workComponents }} -->
        <work-layout :layout.sync="workComponents">
            <work-component v-for="item in workComponents" :key="item.elId" :workComponentItem="item"></work-component>
        </work-layout>
    </section>
</template>

<script>
    export default {
        props: {
            workViewItem: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        watch: {
            workViewItem: {
                immediate: true,
                handler() {
                    this.workComponents = JSON.parse(JSON.stringify(this.workViewItem.elements));
                }
            }
        },
        data() {
            return {
                workComponents: []
            };
        },
        computed: {
            workView() {
                return this.workViewItem;
            }
        },
        created() {
            console.log("created:workview");
        }
    };
</script>

<style lang="less" scoped>
    .work-view {
        // background: #f9f9f9;
    }
</style>
