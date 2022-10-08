<template>
    <div>
        <Work v-if="loading" :work="json"></Work>
        <!-- <WorkView v-if="loading" :workViewItem="workViewItem"></WorkView> -->
    </div>
</template>

<script>
    import json from "./json";
    export default {
        data() {
            return {
                loading: false,
                json: []
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                setTimeout(() => {
                    this.json = json;
                    this.loading = true;
                }, 100);
            }
        }
    };
</script>

<style lang="scss" scoped></style>
