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
                workViewItem: {
                    elements: [
                        {
                            elId: "30008",
                            x: 0,
                            y: 160,
                            w: 30,
                            h: 166,
                            i: "30008",
                            elStyle: {},
                            coType: "vue",
                            coName: "Work",
                            coProps: { work: json },
                            coEvent: [],
                            coMethods: [],
                            moved: false
                        }
                    ]
                },
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
