<template>
    <!-- 基于work单独渲染一个页面，用于web component -->
    <Work :work="json">22222</Work>
</template>

<script>
    import json from "./json";
    export default {
        created() {
            this.json = json;
        }
    };
</script>

<style lang="scss" scoped></style>
