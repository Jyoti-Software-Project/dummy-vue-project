<template lang="en">
    <div>
        <div class="d-flex flex-row justify-content-center color">
            <p class="h1">Hello&nbsp;</p>
            <p class="h1">{{ name }}</p>
        </div>
        <button class="btn btn-success w-50 mx-auto mb-3" v-on:click="hello()">Hello</button>
    </div>
</template>
<script>
export default {
    name: 'FirstTest',
    props: {
        name:String
    },
    methods: {
        hello() {
            console.log("Hello console");
        },
    }
}
</script>
<style scoped>
    .color {
        color: green;
    }
    .h1 {
        font-size: 36px;
    }
</style>