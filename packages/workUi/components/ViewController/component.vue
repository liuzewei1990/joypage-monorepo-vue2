<template>
    <section>
        <a-button-group>
            <a-button type="primary" @click="clickItem"> L </a-button>
            <a-button type="dashed"> R </a-button>
        </a-button-group>
    </section>
</template>

<script>
    export default {
        name: "ViewController",
        methods: {
            clickItem() {}
        }
    };
</script>
